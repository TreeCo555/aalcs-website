import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id || !["approved", "rejected"].includes(status)) {
      return NextResponse.json(
        { success: false, message: "Invalid moderation request." },
        { status: 400 }
      );
    }

    const submittedPath = path.join(
      process.cwd(),
      "data",
      "reviews",
      "submittedReviews.json"
    );

    const approvedPath = path.join(
      process.cwd(),
      "data",
      "reviews",
      "approvedReviews.json"
    );

    const submittedData = await fs.readFile(submittedPath, "utf8");
    const submittedReviews = JSON.parse(submittedData);

    const selectedReview = submittedReviews.find(
      (review: any) => review.id === id
    );

    if (!selectedReview) {
      return NextResponse.json(
        { success: false, message: "Review not found." },
        { status: 404 }
      );
    }

    const remainingSubmittedReviews = submittedReviews.filter(
      (review: any) => review.id !== id
    );

    if (status === "approved") {
      const approvedData = await fs.readFile(approvedPath, "utf8");
      const approvedReviews = JSON.parse(approvedData);

    approvedReviews.push({
      ...selectedReview,
      status: "approved",
      featured: false,
      featuredVideoId: null,
      approvedAt: new Date().toISOString(),
    });

      await fs.writeFile(
        approvedPath,
        JSON.stringify(approvedReviews, null, 2),
        "utf8"
      );
    }

    await fs.writeFile(
      submittedPath,
      JSON.stringify(remainingSubmittedReviews, null, 2),
      "utf8"
    );

    return NextResponse.json({
      success: true,
      message:
        status === "approved"
          ? "Review approved and moved to approved reviews."
          : "Review rejected and removed from pending reviews.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false, message: "Failed to moderate review." },
      { status: 500 }
    );
  }
}
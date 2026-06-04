import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";


export async function POST(request: Request) {
  try {
    const body = await request.json();

    const review = {
      id: crypto.randomUUID(),
      reviewType: body.reviewType,
      serviceTitle: body.serviceTitle ?? "",
      client: body.client?.trim() || "Anonymous",
      rating: body.rating,
      review: body.review,
      status: "pending",
      submittedAt: new Date().toISOString(),
    };

    const filePath = path.join(
      process.cwd(),
      "data",
      "reviews",
      "submittedReviews.json"
    );

    const existingData = await fs.readFile(filePath, "utf8");
    const reviews = JSON.parse(existingData);

    reviews.push(review);

    await fs.writeFile(
      filePath,
      JSON.stringify(reviews, null, 2),
      "utf8"
    );

    return NextResponse.json({
      success: true,
      message: "Review submitted for approval.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit review.",
      },
      { status: 500 }
    );
  }
}
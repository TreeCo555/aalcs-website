import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const approvedReviewsPath = path.join(
  process.cwd(),
  "data",
  "reviews",
  "approvedReviews.json"
);

export async function POST(req: Request) {
  try {
    const { id } = await req.json();

    const approvedReviews = JSON.parse(
      fs.readFileSync(approvedReviewsPath, "utf-8")
    );

    const updatedReviews = approvedReviews.filter(
      (review: any) => review.id !== id
    );

    fs.writeFileSync(
      approvedReviewsPath,
      JSON.stringify(updatedReviews, null, 2)
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to delete review" },
      { status: 500 }
    );
  }
}
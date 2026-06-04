import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const approvedPath = path.join(
      process.cwd(),
      "data",
      "reviews",
      "approvedReviews.json"
    );

    const data = await fs.readFile(approvedPath, "utf8");
    const reviews = JSON.parse(data);

    const { id, featured, featuredVideoId } = body;

    const updatedReviews = reviews.map((review: any) => {
      // Remove video assignment from any existing review
      // already assigned to this video
      if (
        typeof featuredVideoId === "string" &&
        review.featuredVideoId === featuredVideoId &&
        review.id !== id
      ) {
        return {
          ...review,
          featured: false,
          featuredVideoId: null,
        };
      }

      // Update selected review
      if (review.id === id) {
        return {
          ...review,
          featured:
            typeof featured === "boolean"
              ? featured
              : !review.featured,

          featuredVideoId:
            typeof featuredVideoId === "string"
              ? featuredVideoId
              : featured === false
                ? null
                : review.featuredVideoId ?? null,
        };
      }

      return review;
    });

    await fs.writeFile(
      approvedPath,
      JSON.stringify(updatedReviews, null, 2),
      "utf8"
    );

    return NextResponse.json({
      success: true,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
      },
      { status: 500 }
    );
  }
}
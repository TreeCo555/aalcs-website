import { NextResponse } from "next/server";
import { sql } from "@/lib/reviewsDb";

type FeatureReviewBody = {
  id?: unknown;
  featured?: unknown;
  featuredVideoId?: unknown;
};

type ReviewRow = {
  id: string;
  featured: boolean;
  featured_video_id: string | null;
};

type UpdatedReviewRow = {
  id: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as FeatureReviewBody;

    const id = typeof body.id === "string" ? body.id : "";

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message: "Review ID is required.",
        },
        { status: 400 }
      );
    }

    const existingRows = (await sql`
      SELECT
        id,
        featured,
        featured_video_id
      FROM reviews
      WHERE id = ${id}
        AND status = 'approved'
      LIMIT 1
    `) as ReviewRow[];

    const existingReview = existingRows[0];

    if (!existingReview) {
      return NextResponse.json(
        {
          success: false,
          message: "Approved review not found.",
        },
        { status: 404 }
      );
    }

    const requestedVideoId =
      typeof body.featuredVideoId === "string" &&
      body.featuredVideoId.trim()
        ? body.featuredVideoId.trim()
        : null;

    const nextFeatured =
      typeof body.featured === "boolean"
        ? body.featured
        : requestedVideoId
          ? true
          : !existingReview.featured;

    const nextVideoId =
      nextFeatured && requestedVideoId
        ? requestedVideoId
        : nextFeatured
          ? existingReview.featured_video_id
          : null;

    if (nextVideoId) {
      await sql`
        UPDATE reviews
        SET
          featured = FALSE,
          featured_video_id = NULL
        WHERE featured_video_id = ${nextVideoId}
          AND id <> ${id}
      `;
    }

    const updatedRows = (await sql`
      UPDATE reviews
      SET
        featured = ${nextFeatured},
        featured_video_id = ${nextVideoId}
      WHERE id = ${id}
        AND status = 'approved'
      RETURNING id
    `) as UpdatedReviewRow[];

    if (updatedRows.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Review could not be updated.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      featured: nextFeatured,
      featuredVideoId: nextVideoId,
    });
  } catch (error) {
    console.error("Failed to update featured review:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update featured review.",
      },
      { status: 500 }
    );
  }
}
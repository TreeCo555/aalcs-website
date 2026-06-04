import { NextResponse } from "next/server";
import { sql } from "@/lib/reviewsDb";

type ReviewRequestBody = {
  reviewType?: unknown;
  serviceTitle?: unknown;
  client?: unknown;
  rating?: unknown;
  review?: unknown;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ReviewRequestBody;

    const reviewType =
      body.reviewType === "general" || body.reviewType === "service"
        ? body.reviewType
        : null;

    const serviceTitle =
      typeof body.serviceTitle === "string" ? body.serviceTitle.trim() : "";

    const client =
      typeof body.client === "string" && body.client.trim()
        ? body.client.trim()
        : "Anonymous";

    const rating =
      typeof body.rating === "number" ? body.rating : Number(body.rating);

    const reviewText =
      typeof body.review === "string" ? body.review.trim() : "";

    if (!reviewType) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid review type.",
        },
        { status: 400 }
      );
    }

    if (reviewType === "service" && !serviceTitle) {
      return NextResponse.json(
        {
          success: false,
          message: "A service must be selected.",
        },
        { status: 400 }
      );
    }

    if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
      return NextResponse.json(
        {
          success: false,
          message: "Rating must be between 1 and 5.",
        },
        { status: 400 }
      );
    }

    if (!reviewText || reviewText.length > 1000) {
      return NextResponse.json(
        {
          success: false,
          message: "Review must contain between 1 and 1000 characters.",
        },
        { status: 400 }
      );
    }

    const id = crypto.randomUUID();
    const submittedAt = new Date().toISOString();

    await sql`
      INSERT INTO reviews (
        id,
        review_type,
        service_title,
        client,
        rating,
        review,
        status,
        featured,
        featured_video_id,
        submitted_at,
        approved_at
      )
      VALUES (
        ${id},
        ${reviewType},
        ${serviceTitle},
        ${client},
        ${rating},
        ${reviewText},
        'pending',
        FALSE,
        NULL,
        ${submittedAt},
        NULL
      )
    `;

    return NextResponse.json({
      success: true,
      message: "Review submitted for approval.",
    });
  } catch (error) {
    console.error("Failed to submit review:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit review.",
      },
      { status: 500 }
    );
  }
}
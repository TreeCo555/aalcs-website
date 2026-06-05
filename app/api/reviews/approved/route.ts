import { NextResponse } from "next/server";
import { sql } from "@/lib/reviewsDb";

export async function GET() {
  try {
    const rows = await sql`
      SELECT
        id,
        review_type,
        service_title,
        client,
        rating,
        review,
        status,
        featured,
        featured_video_id,
        show_in_general,
        submitted_at,
        approved_at
      FROM reviews
      WHERE status = 'approved'
      ORDER BY approved_at DESC NULLS LAST, submitted_at DESC
    `;

    const reviews = rows.map((row) => ({
      id: row.id,
      reviewType: row.review_type,
      serviceTitle: row.service_title,
      client: row.client,
      rating: Number(row.rating),
      review: row.review,
      status: row.status,
      featured: row.featured,
      featuredVideoId: row.featured_video_id,
      showInGeneralReviews: row.show_in_general,
      submittedAt: row.submitted_at,
      approvedAt: row.approved_at,
    }));

    return NextResponse.json({
      success: true,
      reviews,
    });
  } catch (error) {
    console.error("Failed to load approved reviews:", error);

    return NextResponse.json(
      {
        success: false,
        reviews: [],
        message: "Failed to load approved reviews.",
      },
      { status: 500 }
    );
  }
}
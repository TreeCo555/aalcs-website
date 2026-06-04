import { NextResponse } from "next/server";
import { sql } from "@/lib/reviewsDb";

type ModerateReviewBody = {
  id?: unknown;
  status?: unknown;
};

type UpdatedReviewRow = {
  id: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ModerateReviewBody;

    const id = typeof body.id === "string" ? body.id : "";
    const status =
      body.status === "approved" || body.status === "rejected"
        ? body.status
        : null;

    if (!id || !status) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid moderation request.",
        },
        { status: 400 }
      );
    }

    let updatedRows: UpdatedReviewRow[];

    if (status === "approved") {
      updatedRows = (await sql`
        UPDATE reviews
        SET
          status = 'approved',
          approved_at = NOW(),
          featured = FALSE,
          featured_video_id = NULL
        WHERE id = ${id}
          AND status = 'pending'
        RETURNING id
      `) as UpdatedReviewRow[];
    } else {
      updatedRows = (await sql`
        UPDATE reviews
        SET
          status = 'rejected',
          approved_at = NULL,
          featured = FALSE,
          featured_video_id = NULL
        WHERE id = ${id}
          AND status = 'pending'
        RETURNING id
      `) as UpdatedReviewRow[];
    }

    if (updatedRows.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Pending review not found.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        status === "approved"
          ? "Review approved."
          : "Review rejected.",
    });
  } catch (error) {
    console.error("Failed to moderate review:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to moderate review.",
      },
      { status: 500 }
    );
  }
}
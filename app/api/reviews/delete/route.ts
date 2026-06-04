import { NextResponse } from "next/server";
import { sql } from "@/lib/reviewsDb";

type DeleteReviewBody = {
  id?: unknown;
};

type DeletedReviewRow = {
  id: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as DeleteReviewBody;

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

    const deletedRows = (await sql`
      DELETE FROM reviews
      WHERE id = ${id}
      RETURNING id
    `) as DeletedReviewRow[];

    if (deletedRows.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Review not found.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Review deleted.",
    });
  } catch (error) {
    console.error("Failed to delete review:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete review.",
      },
      { status: 500 }
    );
  }
}
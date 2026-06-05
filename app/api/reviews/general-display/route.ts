import { NextResponse } from "next/server";
import { sql } from "@/lib/reviewsDb";

type GeneralDisplayBody = {
  id?: unknown;
  showInGeneralReviews?: unknown;
};

type UpdatedReviewRow = {
  id: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as GeneralDisplayBody;

    const id = typeof body.id === "string" ? body.id : "";
    const showInGeneralReviews =
      typeof body.showInGeneralReviews === "boolean"
        ? body.showInGeneralReviews
        : null;

    if (!id || showInGeneralReviews === null) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid general display request.",
        },
        { status: 400 }
      );
    }

    const updatedRows = (await sql`
      UPDATE reviews
      SET show_in_general = ${showInGeneralReviews}
      WHERE id = ${id}
        AND status = 'approved'
        AND review_type = 'service'
      RETURNING id
    `) as UpdatedReviewRow[];

    if (updatedRows.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Approved service review not found.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      showInGeneralReviews,
    });
  } catch (error) {
    console.error("Failed to update general review display:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update general review display.",
      },
      { status: 500 }
    );
  }
}
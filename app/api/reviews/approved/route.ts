import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const filePath = path.join(
      process.cwd(),
      "data",
      "reviews",
      "approvedReviews.json"
    );

    const data = await fs.readFile(filePath, "utf8");
    const reviews = JSON.parse(data);

    return NextResponse.json({
      success: true,
      reviews,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        reviews: [],
      },
      { status: 500 }
    );
  }
}
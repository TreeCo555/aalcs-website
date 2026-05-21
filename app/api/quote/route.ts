import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      phone,
      email,
      address,
      suburb,
      postcode,
      services,
      details,
      timeframe,
      heardFrom,
    } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "AALCS New Quote Request",
      html: `
        <h2>New Quote Request</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Property Address:</strong> ${address}</p>
        <p><strong>Suburb / City:</strong> ${suburb}</p>
        <p><strong>Postcode:</strong> ${postcode}</p>

        <hr />

        <p><strong>Services Interested In:</strong></p>
        <p>${services?.join(", ") || "Not selected"}</p>

        <p><strong>Property Details:</strong></p>
        <p>${details}</p>

        <p><strong>Preferred Timeframe:</strong> ${timeframe}</p>
        <p><strong>Heard From:</strong> ${heardFrom}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}
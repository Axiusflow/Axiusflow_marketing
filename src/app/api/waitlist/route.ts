export const runtime = "nodejs";

const waitlistRecipient = process.env.WAITLIST_TO_EMAIL ?? "axiusflow@gmail.com";
const resendFrom =
  process.env.RESEND_FROM_EMAIL ?? "Axiusflow Waitlist <onboarding@resend.dev>";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return Response.json(
      { error: "Waitlist email is not configured." },
      { status: 500 },
    );
  }

  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email =
    typeof payload === "object" &&
    payload !== null &&
    "email" in payload &&
    typeof payload.email === "string"
      ? payload.email.trim().toLowerCase()
      : "";

  if (!isValidEmail(email) || email.length > 254) {
    return Response.json(
      { error: "Enter a valid email address." },
      { status: 400 },
    );
  }

  const submittedAt = new Date().toISOString();
  const safeEmail = escapeHtml(email);

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: resendFrom,
      to: [waitlistRecipient],
      subject: "New Axiusflow waitlist signup",
      reply_to: email,
      html: `
        <div style="font-family: Inter, Arial, sans-serif; color: #111827;">
          <h1 style="font-size: 20px; margin: 0 0 12px;">New waitlist signup</h1>
          <p style="font-size: 16px; margin: 0 0 8px;">${safeEmail}</p>
          <p style="font-size: 13px; color: #6b7280; margin: 0;">Submitted at ${submittedAt}</p>
        </div>
      `,
      text: `New Axiusflow waitlist signup\n\nEmail: ${email}\nSubmitted at: ${submittedAt}`,
      tags: [
        {
          name: "source",
          value: "marketing_waitlist",
        },
      ],
    }),
  });

  if (!resendResponse.ok) {
    return Response.json(
      { error: "Could not submit. Please try again." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}

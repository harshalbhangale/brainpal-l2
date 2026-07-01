import { addToWaitlist, getWaitlistCount } from "@/lib/db";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Returns the current "families joined" count (base + real signups). */
export async function GET() {
  const count = await getWaitlistCount();
  return Response.json({ count });
}

/** Adds an email to the early-access waitlist. */
export async function POST(request: Request) {
  try {
    const body = (await request.json().catch(() => ({}))) as { email?: unknown };
    const email = String(body?.email ?? "").trim();

    if (!EMAIL_RE.test(email) || email.length > 254) {
      return Response.json(
        { ok: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const { inserted } = await addToWaitlist(email, "landing");
    const count = await getWaitlistCount();
    return Response.json({ ok: true, inserted, count });
  } catch {
    return Response.json(
      { ok: false, error: "Something went wrong — please try again." },
      { status: 500 }
    );
  }
}

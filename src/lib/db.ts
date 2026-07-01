import { neon } from "@neondatabase/serverless";

/**
 * Neon (Postgres) access for the early-access waitlist. Server-only — never
 * import this from a Client Component. The connection string lives in
 * DATABASE_URL (.env.local, gitignored).
 */
function getSql() {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL is not set");
  return neon(url);
}

const BASE = Number(process.env.NEXT_PUBLIC_WAITLIST_BASE ?? 2400);

/** Displayed "families joined" number = base + real signups. */
export async function getWaitlistCount(): Promise<number> {
  try {
    const rows = (await getSql()`SELECT count(*)::int AS count FROM waitlist`) as {
      count: number;
    }[];
    return BASE + Number(rows[0]?.count ?? 0);
  } catch {
    return BASE;
  }
}

/** Insert an email; idempotent on the unique constraint. */
export async function addToWaitlist(
  email: string,
  source = "landing"
): Promise<{ inserted: boolean }> {
  const rows = (await getSql()`
    INSERT INTO waitlist (email, source)
    VALUES (${email.toLowerCase()}, ${source})
    ON CONFLICT (email) DO NOTHING
    RETURNING id
  `) as { id: number }[];
  return { inserted: rows.length > 0 };
}

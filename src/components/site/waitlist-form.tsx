"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "done" | "error";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.ok) {
        setStatus("error");
        setMessage(data?.error ?? "Something went wrong — please try again.");
        return;
      }
      setStatus("done");
    } catch {
      setStatus("error");
      setMessage("Network error — please try again.");
    }
  }

  if (status === "done") {
    return (
      <div className="mx-auto flex w-full max-w-md items-center justify-center gap-3 rounded-full bg-white/10 px-6 py-4 text-white ring-1 ring-white/20">
        <span className="grid size-8 shrink-0 place-items-center rounded-full text-ink" style={{ backgroundImage: "var(--grad-lime)" }}>
          <Check className="size-5" strokeWidth={3} />
        </span>
        <p className="text-sm font-semibold">You&apos;re on the list — we&apos;ll be in touch soon.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-md">
      <form
        onSubmit={onSubmit}
        className={cn(
          "flex flex-col gap-2 rounded-2xl bg-white/10 p-2 ring-1 backdrop-blur transition-colors sm:flex-row sm:rounded-full",
          status === "error" ? "ring-destructive/60" : "ring-white/20"
        )}
      >
        <label htmlFor="waitlist-email" className="sr-only">
          Email address
        </label>
        <input
          id="waitlist-email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder="you@family.com.au"
          className="h-12 flex-1 rounded-full bg-transparent px-5 text-base text-white placeholder:text-white/50 focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="sheen group inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-base font-bold text-ink shadow-pop transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70"
          style={{ backgroundImage: "var(--grad-lime)" }}
        >
          {status === "loading" ? (
            <>
              <Loader2 className="size-4 animate-spin" /> Joining…
            </>
          ) : (
            <>
              Get Early Access
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </>
          )}
        </button>
      </form>
      {status === "error" && (
        <p className="mt-2 text-center text-sm text-white/80" role="alert">
          {message}
        </p>
      )}
    </div>
  );
}

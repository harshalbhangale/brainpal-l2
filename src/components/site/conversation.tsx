"use client";

import { useRef } from "react";
import { SendHorizontal, Mic } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import { CHAT_SCRIPT, type ChatMessage, type PalKey } from "@/lib/data";
import { PAL_META } from "@/components/brand/pal-avatar";
import { BrainMark } from "@/components/brand/logo";
import { Face } from "@/components/brand/face";
import { SectionHeading } from "@/components/brand/section-heading";
import { cn } from "@/lib/utils";

function PalCircle({ palKey, className }: { palKey: PalKey; className?: string }) {
  const meta = PAL_META[palKey];
  const Icon = meta.icon;
  return (
    <span
      className={cn(
        "grid size-7 shrink-0 place-items-center rounded-full",
        meta.onDark ? "text-white" : "text-ink",
        className
      )}
      style={{ background: `linear-gradient(135deg, color-mix(in srgb, ${meta.color} 80%, white), ${meta.color})` }}
    >
      <Icon className="size-3.5" strokeWidth={2.5} />
    </span>
  );
}

function Bubble({ msg }: { msg: ChatMessage }) {
  const isUser = !msg.joined && (msg.from === "oliver" || msg.from === "parent");

  if (isUser) {
    const isOliver = msg.from === "oliver";
    return (
      <div data-msg className="flex items-end justify-end gap-2.5">
        <div
          className={cn(
            "max-w-[80%] whitespace-pre-wrap rounded-3xl rounded-br-md px-4 py-2.5 text-sm font-medium leading-snug sm:text-[15px]",
            isOliver ? "text-ink" : "bg-ink text-white/95"
          )}
          style={isOliver ? { backgroundImage: "var(--grad-lime)" } : undefined}
        >
          {msg.text}
        </div>
        <Face seed={msg.author} className="size-9 shrink-0 shadow-soft ring-1 ring-border" alt={msg.author} />
      </div>
    );
  }

  const palKey = msg.from as PalKey;
  const meta = PAL_META[palKey];
  return (
    <div data-msg className="flex flex-col gap-1.5">
      <span
        className="ml-9 inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold"
        style={{
          background: `color-mix(in srgb, ${meta.color} 16%, white)`,
          color: `color-mix(in srgb, ${meta.color} 72%, black)`,
        }}
      >
        {meta.name} joined
      </span>
      <div className="flex items-end gap-2">
        <PalCircle palKey={palKey} />
        <div className="glass max-w-[80%] whitespace-pre-wrap rounded-3xl rounded-bl-md px-4 py-2.5 text-sm leading-snug text-ink shadow-soft sm:text-[15px]">
          {msg.text}
        </div>
      </div>
    </div>
  );
}

export function Conversation() {
  const listRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = listRef.current?.querySelectorAll<HTMLElement>("[data-msg]");
      if (!items || items.length === 0) return;
      gsap.from(items, {
        opacity: 0,
        y: 18,
        scale: 0.98,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.5,
        scrollTrigger: { trigger: listRef.current, start: "top 72%", once: true },
      });
    },
    { scope: listRef }
  );

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          kicker="See it in action"
          title={
            <>
              One conversation.{" "}
              <span className="text-gradient">Everything a kid needs.</span>
            </>
          }
          description="Not a chatbot. Not a menu of apps. The PALs call in the right specialist the moment it's needed — starting with money."
        />

        <div className="mx-auto mt-14 max-w-2xl">
          <div className="overflow-hidden rounded-[2rem] bg-card shadow-soft-lg ring-1 ring-border">
            {/* header */}
            <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
              <div className="flex items-center gap-2.5">
                <BrainMark className="size-8" />
                <div>
                  <p className="text-sm font-bold text-ink">Family chat</p>
                  <p className="flex items-center gap-1 text-[11px] text-ink-3">
                    <span className="size-1.5 rounded-full bg-brand" />
                    PALs on call
                  </p>
                </div>
              </div>
              <div className="flex -space-x-2">
                {(["money", "parent", "study"] as PalKey[]).map((k) => (
                  <PalCircle key={k} palKey={k} className="ring-2 ring-card" />
                ))}
              </div>
            </div>

            {/* messages */}
            <div ref={listRef} className="flex flex-col gap-4 bg-gradient-to-b from-lime-soft/40 to-transparent px-4 py-6 sm:px-6">
              {CHAT_SCRIPT.map((msg, i) => (
                <Bubble key={i} msg={msg} />
              ))}
            </div>

            {/* composer */}
            <div className="flex items-center gap-2 border-t border-border p-3">
              <div className="flex flex-1 items-center rounded-full bg-secondary px-4 py-2.5 text-sm text-ink-3">
                Message BrainPal…
              </div>
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-secondary text-ink-2">
                <Mic className="size-4" strokeWidth={2.4} />
              </span>
              <span className="grid size-10 shrink-0 place-items-center rounded-full text-ink shadow-pop" style={{ backgroundImage: "var(--grad-lime)" }}>
                <SendHorizontal className="size-4" strokeWidth={2.4} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

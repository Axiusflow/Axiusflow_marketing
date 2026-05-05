"use client";

import {
  BarChartIcon,
  SlidersHorizontalIcon,
  ZapIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { FlickeringGrid } from "@/registry/magicui/flickering-grid";

type FeatureKey = "journal" | "sync" | "review";

type FeaturePanel = {
  label: string;
  title: string;
  description: string;
  badge: string;
  stats: Array<{ label: string; value: string }>;
};

const panels: Record<FeatureKey, FeaturePanel> = {
  journal: {
    label: "Smart Journal",
    title: "Capture trades, notes, tags, and screenshots in one clean workflow",
    description:
      "Keep every trade review tied to the context that matters, from notes and setups to screenshots and performance history.",
    badge: "Journal Live",
    stats: [
      { label: "Tagged Trades", value: "248" },
      { label: "Review Notes", value: "91" },
      { label: "Saved Views", value: "18" },
      { label: "Error Tags", value: "12" },
    ],
  },
  sync: {
    label: "Broker Sync",
    title: "Import trade history and keep supported broker workflows connected",
    description:
      "Start with imports, then add supported broker auto sync where it improves reliability and makes your review process faster.",
    badge: "Sync Status",
    stats: [
      { label: "Imported Trades", value: "12.4k" },
      { label: "Connected Sources", value: "6" },
      { label: "Sync Checks", value: "99.2%" },
      { label: "CSV Sources", value: "14" },
    ],
  },
  review: {
    label: "AI Review",
    title: "Replay decisions, spot mistakes, and turn history into repeatable lessons",
    description:
      "Use replay, analytics, and AI-assisted reviews to understand what happened, why it happened, and what to improve next.",
    badge: "Review Engine",
    stats: [
      { label: "AI Reviews", value: "127" },
      { label: "Repeat Errors", value: "8" },
      { label: "Avg R:R", value: "1.84" },
      { label: "Win/Loss Ratio", value: "1.87" },
    ],
  },
};

const toggleRows = [
  {
    key: "sync",
    title: "Broker imports",
    description: "Bring in fills, executions, and account history from supported sources.",
  },
  {
    key: "sentiment",
    title: "AI review cues",
    description: "Surface recurring mistakes, strengths, and habits worth reviewing.",
  },
  {
    key: "risk",
    title: "Replay context",
    description: "Keep notes, screenshots, and performance context attached to each session.",
  },
] as const;

type ToggleKey = (typeof toggleRows)[number]["key"];

export function TradingFeaturesSection() {
  const [activeTab, setActiveTab] = useState<FeatureKey>("journal");
  const [toggles, setToggles] = useState<Record<ToggleKey, boolean>>({
    sync: true,
    sentiment: true,
    risk: false,
  });

  const activePanel = panels[activeTab];

  return (
    <section className="af-page-bg pb-16 pt-4 transition-colors duration-300 lg:pb-20">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[760px] text-left">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] af-text-secondary">
              Review Workspace
            </p>
            <h2 className="font-display mt-2 text-[clamp(24px,2.8vw,40px)] font-semibold leading-[1.08] tracking-[-0.018em] af-text-primary">
              A smart trading journal built for review, replay, and broker sync
            </h2>
            <p className="mt-3 max-w-[680px] text-[15px] leading-[1.55] af-text-secondary">
              Keep imports, notes, analytics, replay, and AI review connected in one
              focused workflow without pretending to be a charting terminal.
            </p>
          </div>

          <div className="inline-flex w-full max-w-[560px] flex-wrap items-center gap-2 rounded-full border border-white/10 bg-black/40 p-1.5 backdrop-blur-sm">
            {(
              [
                {
                  key: "journal",
                  label: "Smart Journal",
                  icon: BarChartIcon,
                },
                {
                  key: "sync",
                  label: "Broker Sync",
                  icon: ZapIcon,
                },
                {
                  key: "review",
                  label: "AI Review",
                  icon: SlidersHorizontalIcon,
                },
              ] as const
            ).map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-[8px] px-4 py-2 text-xs font-medium transition-colors",
                  activeTab === tab.key
                    ? "bg-white/90 text-black"
                    : "af-text-secondary hover:bg-white/10 hover:text-white",
                )}
              >
                <HugeiconsIcon icon={tab.icon} className="h-3.5 w-3.5" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 p-4 sm:p-5 lg:p-7">
          <FlickeringGrid
            className="pointer-events-none absolute inset-0 z-0 opacity-45 [mask-image:radial-gradient(700px_circle_at_20%_15%,white,transparent)]"
            squareSize={4}
            gridGap={6}
            color="var(--token-text-secondary)"
            maxOpacity={0.45}
            flickerChance={0.1}
          />

          <div className="relative z-10 grid gap-4 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)]">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/55 backdrop-blur-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 p-4 sm:p-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-200/90">
                    {activePanel.label}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-white sm:text-xl">
                    {activePanel.title}
                  </h3>
                  <p className="mt-1 max-w-[560px] text-sm leading-relaxed text-neutral-300">
                    {activePanel.description}
                  </p>
                </div>
                <span className="inline-flex rounded-[8px] border border-sky-200/40 bg-sky-500/15 px-3 py-1 text-xs font-medium text-sky-100">
                  {activePanel.badge}
                </span>
              </div>

              <div className="relative h-[360px] w-full sm:h-[420px]">
                <Image
                  src="/hero_light.png"
                  alt="Trading journal dashboard preview"
                  fill
                  className="object-cover dark:hidden"
                />
                <Image
                  src="/hero_dark.png"
                  alt="Trading journal dashboard preview"
                  fill
                  className="hidden object-cover dark:block"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20" />
                <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {activePanel.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-white/15 bg-black/45 px-3 py-2 backdrop-blur-sm"
                    >
                      <p className="text-[10px] uppercase tracking-[0.12em] text-neutral-300">
                        {stat.label}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white sm:text-base">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-black/55 p-4 sm:p-5">
                <h4 className="text-sm font-semibold text-white">Workflow Toggles</h4>
                <p className="mt-1 text-xs leading-relaxed text-neutral-300">
                  Turn on the review tools that matter for your current process.
                </p>

                <div className="mt-4 space-y-3">
                  {toggleRows.map((row) => {
                    const enabled = toggles[row.key];

                    return (
                      <div
                        key={row.key}
                        className="flex items-start justify-between gap-3 rounded-xl border border-white/10 bg-black/40 px-3 py-3"
                      >
                        <div>
                          <p className="text-sm font-medium text-white">{row.title}</p>
                          <p className="mt-1 text-xs leading-relaxed text-neutral-300">
                            {row.description}
                          </p>
                        </div>

                        <button
                          type="button"
                          role="switch"
                          aria-checked={enabled}
                          onClick={() =>
                            setToggles((prev) => ({
                              ...prev,
                              [row.key]: !prev[row.key],
                            }))
                          }
                          className={cn(
                            "relative mt-0.5 h-6 w-11 shrink-0 rounded-full border transition-colors",
                            enabled
                              ? "border-sky-300/50 bg-sky-500/30"
                              : "border-white/20 bg-black/50",
                          )}
                        >
                          <span
                            className={cn(
                              "absolute top-0.5 h-4.5 w-4.5 rounded-full bg-white transition-transform",
                              enabled ? "translate-x-[21px]" : "translate-x-[3px]",
                            )}
                          />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/55 p-4 sm:p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-sky-200/90">
                  Journal Snapshot
                </p>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  <div className="rounded-lg border border-white/10 bg-black/40 p-3">
                    <p className="text-[10px] uppercase tracking-[0.1em] text-neutral-300">
                      Synced Accounts
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">3</p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-black/40 p-3">
                    <p className="text-[10px] uppercase tracking-[0.1em] text-neutral-300">
                      Review Streak
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">12 days</p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-black/40 p-3">
                    <p className="text-[10px] uppercase tracking-[0.1em] text-neutral-300">
                      Win Rate
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">63.2%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

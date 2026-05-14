import {
  Cancel01Icon,
  Clock01Icon,
  Tick02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";
import { Component as Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { siteUrl } from "@/lib/seo";

export type Cell =
  | { kind: "check" }
  | { kind: "cross" }
  | { kind: "soon"; label?: string }
  | { kind: "text"; value: string; emphasized?: boolean };

export interface ComparisonRow {
  feature: string;
  axiusflow: Cell;
  competitor: Cell;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ReasonItem {
  title: string;
  body: string;
}

export interface VsComparisonProps {
  competitorName: string;
  slug: string;
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  comparison: ComparisonRow[];
  reasonsToSwitch: ReasonItem[];
  faq: FaqItem[];
}

const supportedBrokers = [
  { src: "/broker_logo/Ibkr.png", name: "Interactive Brokers" },
  { src: "/broker_logo/ninjatrader.png", name: "NinjaTrader" },
  { src: "/broker_logo/tradestation.png", name: "TradeStation" },
  { src: "/broker_logo/tradovate.png", name: "Tradovate" },
  { src: "/broker_logo/td_ameritrade.png", name: "TD Ameritrade" },
  { src: "/broker_logo/charles_shwab.png", name: "Charles Schwab" },
  { src: "/broker_logo/webull.png", name: "Webull" },
  { src: "/broker_logo/robinhood.png", name: "Robinhood" },
  { src: "/broker_logo/coinbase.png", name: "Coinbase" },
  { src: "/broker_logo/binance.png", name: "Binance" },
  { src: "/broker_logo/kraken.png", name: "Kraken" },
  { src: "/broker_logo/mt_5.png", name: "MetaTrader 5" },
  { src: "/broker_logo/c_trader.png", name: "cTrader" },
];

function CellView({ cell }: { cell: Cell }) {
  if (cell.kind === "check") {
    return (
      <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
        <HugeiconsIcon icon={Tick02Icon} className="h-3.5 w-3.5" />
      </span>
    );
  }
  if (cell.kind === "cross") {
    return (
      <span className="grid h-6 w-6 place-items-center rounded-full bg-gray-100 text-gray-400 dark:bg-white/5 dark:text-white/30">
        <HugeiconsIcon icon={Cancel01Icon} className="h-3.5 w-3.5" />
      </span>
    );
  }
  if (cell.kind === "soon") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-amber-700 dark:bg-amber-500/15 dark:text-amber-300">
        <HugeiconsIcon icon={Clock01Icon} className="h-3 w-3" />
        {cell.label ?? "Coming soon"}
      </span>
    );
  }
  return (
    <span className={`text-[13px] ${cell.emphasized ? "af-text-primary font-semibold" : "af-text-secondary"}`}>
      {cell.value}
    </span>
  );
}

export function VsComparisonPage({
  competitorName,
  slug,
  heroEyebrow,
  heroTitle,
  heroDescription,
  comparison,
  reasonsToSwitch,
  faq,
}: VsComparisonProps) {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: `vs ${competitorName}`, item: `${siteUrl}/vs/${slug}` },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="min-h-screen af-page-bg transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      <Header />

      {/* Hero */}
      <section className="px-6 pt-16 pb-12">
        <div className="mx-auto max-w-[820px] text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] af-text-secondary">
            {heroEyebrow}
          </p>
          <h1 className="mt-3 font-display text-[clamp(36px,5vw,56px)] font-semibold leading-[1.05] tracking-[-0.03em] af-text-primary">
            {heroTitle}
          </h1>
          <p className="mx-auto mt-5 max-w-[620px] text-[17px] leading-[1.65] af-text-secondary">
            {heroDescription}
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="https://app.axiusflow.com/pricing?checkout=pro"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-neutral-950 px-7 text-[15px] font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
            >
              Switch to Axiusflow Pro
            </Link>
            <Link
              href="/pricing"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/10 bg-transparent px-7 text-[15px] font-medium af-text-primary transition-colors hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/5"
            >
              See pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Broker strip */}
      <section className="px-6 pb-14" aria-label="Supported brokers and platforms">
        <div className="mx-auto max-w-[1080px]">
          <h2 className="mb-6 text-center text-[13px] font-medium uppercase tracking-[0.16em] af-text-secondary">
            Works with the brokers and platforms you already use
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {supportedBrokers.map((logo) => (
              <Image
                key={logo.src}
                src={logo.src}
                alt={`${logo.name} trading journal integration`}
                width={120}
                height={36}
                className="h-7 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 dark:invert dark:hover:invert-0"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="px-6 pb-16" aria-labelledby="comparison-heading">
        <div className="mx-auto max-w-[960px]">
          <div className="mb-10 text-center">
            <h2 id="comparison-heading" className="font-display text-[clamp(26px,3vw,36px)] font-semibold tracking-[-0.02em] af-text-primary">
              Axiusflow vs {competitorName} — Feature Comparison
            </h2>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[12px] af-text-secondary">
              <span className="inline-flex items-center gap-1.5">
                <CellView cell={{ kind: "check" }} /> Available
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CellView cell={{ kind: "soon" }} />
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CellView cell={{ kind: "cross" }} /> Not supported
              </span>
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border af-surface-bg">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-border af-surface-muted-bg">
                  <th className="p-4 text-[14px] font-semibold af-text-primary">Feature</th>
                  <th className="p-4 text-[14px] font-semibold af-text-primary">
                    <span className="inline-flex items-center gap-2">
                      <Image src="/logo.svg" alt="" width={20} height={20} className="h-5 w-5" />
                      Axiusflow
                    </span>
                  </th>
                  <th className="p-4 text-[14px] font-semibold af-text-secondary">{competitorName}</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.feature} className="border-b border-border last:border-0">
                    <td className="p-4 text-[14px] af-text-primary font-medium">{row.feature}</td>
                    <td className="p-4">
                      <CellView cell={row.axiusflow} />
                    </td>
                    <td className="p-4">
                      <CellView cell={row.competitor} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Reasons to switch */}
      <section className="px-6 pb-16" aria-labelledby="reasons-heading">
        <div className="mx-auto max-w-[1040px]">
          <h2 id="reasons-heading" className="font-display text-[clamp(26px,3vw,36px)] font-semibold tracking-[-0.02em] af-text-primary text-center">
            Why traders switch from {competitorName} to Axiusflow
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {reasonsToSwitch.map((reason) => (
              <div key={reason.title} className="rounded-2xl border border-border af-surface-bg p-6">
                <h3 className="font-display text-[18px] font-semibold af-text-primary">{reason.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.7] af-text-secondary">{reason.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-[760px]">
          <h2 className="font-display text-[clamp(24px,2.6vw,32px)] font-semibold tracking-[-0.02em] af-text-primary text-center">
            Switching from {competitorName} — FAQ
          </h2>
          <div className="mt-8 space-y-3">
            {faq.map((item, idx) => (
              <details key={idx} className="group rounded-xl border border-border af-surface-bg p-5 open:af-surface-muted-bg">
                <summary className="flex cursor-pointer items-center justify-between gap-3 text-[15px] font-medium af-text-primary">
                  {item.q}
                  <span className="grid size-5 shrink-0 place-items-center af-text-secondary transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-[14px] leading-relaxed af-text-secondary">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import {
  VsComparisonPage,
  type ComparisonRow,
  type FaqItem,
  type ReasonItem,
} from "@/components/vs-comparison";

const comparison: ComparisonRow[] = [
  { feature: "Trading journal core (notes, tags, screenshots)", axiusflow: { kind: "check" }, competitor: { kind: "check" } },
  { feature: "Broker CSV imports", axiusflow: { kind: "check" }, competitor: { kind: "check" } },
  { feature: "Advanced analytics (win rate, R-multiple, expectancy)", axiusflow: { kind: "check" }, competitor: { kind: "check" } },
  { feature: "Custom report layouts", axiusflow: { kind: "check" }, competitor: { kind: "check" } },
  { feature: "Light & dark mode", axiusflow: { kind: "check" }, competitor: { kind: "check" } },
  { feature: "Personalized AI trained on your own trades", axiusflow: { kind: "check" }, competitor: { kind: "text", value: "Generic AI features" } },
  { feature: "Supported broker auto sync", axiusflow: { kind: "text", value: "Expanding deliberately" }, competitor: { kind: "check" } },
  { feature: "Trade replay", axiusflow: { kind: "soon" }, competitor: { kind: "check" } },
  { feature: "Free plan", axiusflow: { kind: "cross" }, competitor: { kind: "cross" } },
  { feature: "Starting price", axiusflow: { kind: "text", value: "$20/mo · $192/yr", emphasized: true }, competitor: { kind: "text", value: "Higher tiers" } },
  { feature: "Direct founder access", axiusflow: { kind: "check" }, competitor: { kind: "cross" } },
];

const reasonsToSwitch: ReasonItem[] = [
  {
    title: "Personalized AI that learns from you",
    body: "Most journals bolt generic AI prompts onto a static dashboard. Axiusflow's AI studies your imported trades, tags, notes, and behavior to surface mistakes and strengths that match how you actually trade.",
  },
  {
    title: "A modern, premium workspace",
    body: "Tradezella works, but its UI shows its age. Axiusflow is a calm, modern interface designed for long review sessions — no clutter, no spreadsheet feel.",
  },
  {
    title: "One simple plan",
    body: "No tiered upsells. Axiusflow Pro is a single plan at $20/month or $192/year with everything included.",
  },
  {
    title: "Honest scope",
    body: "We don't claim every feature is shipped. Trade replay isn't live yet — it's on the roadmap and we say so. That honesty is the foundation we're building on.",
  },
];

const switchFaq: FaqItem[] = [
  {
    q: "Is Axiusflow really a Tradezella alternative?",
    a: "Yes. Axiusflow covers the core trading journal workflow — imports, tagging, notes, screenshots, premium analytics, and personalized AI review — in a more modern UI built specifically for active traders.",
  },
  {
    q: "Can I import my Tradezella data?",
    a: "Yes. If you can export your Tradezella trades to CSV, Axiusflow's CSV import handles it. Reach out via /contact and we'll help you map fields cleanly.",
  },
  {
    q: "How does Axiusflow's AI compare?",
    a: "Axiusflow's AI is personalized — it learns from your own tags, notes, and behavior patterns instead of applying generic templates.",
  },
  {
    q: "Does Axiusflow have trade replay like Tradezella?",
    a: "Not yet. Trade replay is on the roadmap and will only ship when it materially improves the review workflow. Today, Axiusflow focuses on personalized AI, imports, premium analytics, and journaling.",
  },
  {
    q: "Is Axiusflow cheaper?",
    a: "Axiusflow Pro is a single plan at $20/month or $192/year ($16/month effective on yearly). It typically lands below comparable Tradezella tiers, with personalized AI and the full premium workspace included.",
  },
];

export default function VsTradezellaPage() {
  return (
    <VsComparisonPage
      competitorName="Tradezella"
      slug="tradezella"
      heroEyebrow="Axiusflow vs Tradezella"
      heroTitle="The Modern Trading Journal Alternative to Tradezella"
      heroDescription="Axiusflow is a premium trading journal with personalized AI built around your own trades — designed for active traders who want a serious review workspace without the dated UI."
      comparison={comparison}
      reasonsToSwitch={reasonsToSwitch}
      faq={switchFaq}
    />
  );
}

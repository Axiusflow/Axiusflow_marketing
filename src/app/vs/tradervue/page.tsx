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
  { feature: "Modern, premium UI", axiusflow: { kind: "check" }, competitor: { kind: "text", value: "Dated interface" } },
  { feature: "Light & dark mode", axiusflow: { kind: "check" }, competitor: { kind: "text", value: "Limited theming" } },
  { feature: "Personalized AI trained on your own trades", axiusflow: { kind: "check" }, competitor: { kind: "cross" } },
  { feature: "Supported broker auto sync", axiusflow: { kind: "text", value: "Expanding deliberately" }, competitor: { kind: "text", value: "Limited" } },
  { feature: "Trade replay", axiusflow: { kind: "soon" }, competitor: { kind: "cross" } },
  { feature: "Free plan", axiusflow: { kind: "cross" }, competitor: { kind: "check" } },
  { feature: "Starting price (paid)", axiusflow: { kind: "text", value: "$20/mo · $192/yr", emphasized: true }, competitor: { kind: "text", value: "Tiered plans" } },
  { feature: "Direct founder access", axiusflow: { kind: "check" }, competitor: { kind: "cross" } },
];

const reasonsToSwitch: ReasonItem[] = [
  {
    title: "Personalized AI Tradervue doesn't have",
    body: "Tradervue is a solid classic journal, but it doesn't ship personalized AI. Axiusflow studies your imported trades, tags, and notes to surface recurring mistakes, repeat strengths, and review prompts tuned to your style.",
  },
  {
    title: "A modern interface built for long review sessions",
    body: "Tradervue's UI feels like it was built a decade ago. Axiusflow is a calm, modern workspace — clean typography, real dark mode, and screens designed so journaling and analytics feel premium, not dated.",
  },
  {
    title: "One clear plan instead of tiers",
    body: "No silver/gold/platinum upsells. Axiusflow Pro is one plan at $20/month or $192/year with personalized AI, imports, supported broker sync, and the full premium analytics workspace included.",
  },
  {
    title: "Honest roadmap",
    body: "Trade replay isn't live yet — it's on the roadmap and we say so. We don't oversell what we ship. That honesty is the foundation we're building on.",
  },
];

const switchFaq: FaqItem[] = [
  {
    q: "Is Axiusflow a Tradervue alternative?",
    a: "Yes. Axiusflow is built for the same audience — active day traders, futures traders, options traders, forex and crypto traders, and prop firm traders — with personalized AI, broker imports, and a modern review workspace that goes beyond Tradervue's classic feature set.",
  },
  {
    q: "Can I import my Tradervue data into Axiusflow?",
    a: "Yes. Tradervue exports trade history to CSV. Axiusflow's CSV import handles the standard fields (entry, exit, instrument, P&L, notes, tags). Reach out via /contact and we'll help map any custom fields cleanly.",
  },
  {
    q: "Does Axiusflow have AI like Tradervue?",
    a: "Axiusflow's AI is personalized to your trading. It learns from your tags, notes, and behavior to surface real mistakes and edges — not generic templates. This is one of the biggest differences between Axiusflow and Tradervue today.",
  },
  {
    q: "Does Axiusflow have a free plan like Tradervue?",
    a: "Not today. Axiusflow runs a single Pro plan at $20/month or $192/year. The Pro plan includes the full premium workspace, personalized AI, imports, supported broker sync, and advanced analytics.",
  },
  {
    q: "Will my futures, forex, options, and crypto trades all work?",
    a: "Yes. Axiusflow is multi-asset by design. Day trading, futures (ES, NQ, MES, MNQ), options spreads, forex, and crypto all journal cleanly with the same imports, tags, and analytics.",
  },
];

export default function VsTradervuePage() {
  return (
    <VsComparisonPage
      competitorName="Tradervue"
      slug="tradervue"
      heroEyebrow="Axiusflow vs Tradervue"
      heroTitle="The Modern Trading Journal Alternative to Tradervue"
      heroDescription="Axiusflow is a premium trading journal with personalized AI, modern UI, and broker imports — a clean alternative to Tradervue for traders who want their journal to feel as serious as their trading."
      comparison={comparison}
      reasonsToSwitch={reasonsToSwitch}
      faq={switchFaq}
    />
  );
}

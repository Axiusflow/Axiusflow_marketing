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
  { feature: "Modern, premium UI", axiusflow: { kind: "check" }, competitor: { kind: "text", value: "Dense, dated interface" } },
  { feature: "Light & dark mode", axiusflow: { kind: "check" }, competitor: { kind: "text", value: "Limited" } },
  { feature: "Personalized AI trained on your own trades", axiusflow: { kind: "check" }, competitor: { kind: "cross" } },
  { feature: "Supported broker auto sync", axiusflow: { kind: "text", value: "Expanding deliberately" }, competitor: { kind: "cross" } },
  { feature: "Trade replay", axiusflow: { kind: "soon" }, competitor: { kind: "cross" } },
  { feature: "Pricing model", axiusflow: { kind: "text", value: "$20/mo · $192/yr", emphasized: true }, competitor: { kind: "text", value: "$169/yr (per year only)" } },
  { feature: "Monthly billing option", axiusflow: { kind: "check" }, competitor: { kind: "cross" } },
  { feature: "Direct founder access", axiusflow: { kind: "check" }, competitor: { kind: "cross" } },
];

const reasonsToSwitch: ReasonItem[] = [
  {
    title: "Personalized AI Edgewonk doesn't ship",
    body: "Edgewonk leans on manual tags and questionnaires. Axiusflow's personalized AI studies your imported trades, tags, and notes to surface recurring mistakes and edges automatically — without you having to design every report yourself.",
  },
  {
    title: "A clean, modern review workspace",
    body: "Edgewonk packs a lot into a dense interface. Axiusflow strips that down to a calm, modern workspace where journaling, imports, and analytics feel premium, not overwhelming.",
  },
  {
    title: "Monthly or yearly — your choice",
    body: "Edgewonk is yearly only. Axiusflow Pro is $20/month or $192/year, so you can start monthly and upgrade to yearly when you're sure.",
  },
  {
    title: "Honest scope",
    body: "Trade replay isn't live yet — it's on the roadmap and we say so. Axiusflow ships what's real today: personalized AI, imports, premium analytics, and a serious review workflow.",
  },
];

const switchFaq: FaqItem[] = [
  {
    q: "Is Axiusflow an Edgewonk alternative?",
    a: "Yes. Axiusflow targets the same serious-review audience as Edgewonk — day traders, futures traders, options traders, forex and crypto traders, and prop firm traders — with personalized AI, broker imports, and a modern UI that's easier to live in day to day.",
  },
  {
    q: "Can I import my Edgewonk trades?",
    a: "Yes. Edgewonk exports trade history to CSV, and Axiusflow's CSV import handles the standard fields. Reach out via /contact if you want help mapping custom fields.",
  },
  {
    q: "How does Axiusflow's AI compare to Edgewonk?",
    a: "Edgewonk relies on manual tagging and predefined reports. Axiusflow's AI is personalized — it learns from your tags, notes, and behavior and surfaces patterns automatically. You still own the workflow; the AI just removes the busywork.",
  },
  {
    q: "Is Axiusflow cheaper than Edgewonk?",
    a: "Edgewonk is yearly-only at around $169 per year. Axiusflow Pro is $20/month or $192/year ($16/month effective on yearly), with monthly billing if you prefer to start small. Personalized AI is included.",
  },
  {
    q: "Will it work for prop firm and futures traders?",
    a: "Yes. Axiusflow is built around active traders, including FTMO, Topstep, and MyForexFunds prop firm flow, plus futures contracts like ES, NQ, MES, and MNQ.",
  },
];

export default function VsEdgewonkPage() {
  return (
    <VsComparisonPage
      competitorName="Edgewonk"
      slug="edgewonk"
      heroEyebrow="Axiusflow vs Edgewonk"
      heroTitle="The Modern Trading Journal Alternative to Edgewonk"
      heroDescription="Axiusflow is a premium trading journal with personalized AI, modern UI, monthly or yearly billing, and broker imports — a cleaner Edgewonk alternative for traders who want a serious review workflow without the spreadsheet feel."
      comparison={comparison}
      reasonsToSwitch={reasonsToSwitch}
      faq={switchFaq}
    />
  );
}

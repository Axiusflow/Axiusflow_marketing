import type { Metadata } from "next";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Our Story: Building a TradingView Alternative",
  description:
    "Read why Axiusflow is building a smoother trading OS for active traders: live crypto charts, journaling, replay, AI review, broker imports, and honest market-data expansion.",
  alternates: {
    canonical: `${siteUrl}/story`,
  },
};

export default function StoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

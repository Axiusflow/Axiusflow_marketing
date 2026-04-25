import type { Metadata } from "next";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Pricing for Trading Journal, Replay & AI Review",
  description:
    "Compare Axiusflow plans for live crypto charting, trade journaling, trade replay, AI-powered review, broker imports, and trading performance analytics.",
  alternates: {
    canonical: `${siteUrl}/pricing`,
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

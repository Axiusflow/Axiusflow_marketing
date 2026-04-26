import type { Metadata } from "next";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Axiusflow Pricing: Free and Pro Trading Journal Plans",
  description:
    "Compare Axiusflow Free and Pro plans. Start free or upgrade to Pro for $20/month to unlock the full trading journal, imports, analytics, and workspace.",
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

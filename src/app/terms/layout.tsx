import type { Metadata } from "next";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the Axiusflow Terms of Service for using the trading journal, broker import, auto sync, replay, analytics, and AI review workspace.",
  alternates: {
    canonical: `${siteUrl}/terms`,
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from "next";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Changelog for Trading Journal, Replay & AI Review",
  description:
    "Follow Axiusflow product updates across trading journal analytics, trade replay, AI reviews, broker imports, auto sync workflows, and performance improvements.",
  alternates: {
    canonical: `${siteUrl}/changelog`,
  },
};

export default function ChangelogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

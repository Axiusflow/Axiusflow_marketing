import type { Metadata } from "next";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Read the Axiusflow trading risk disclaimer covering financial advice limitations, market risk, analytics, and educational platform use.",
  alternates: {
    canonical: `${siteUrl}/disclaimer`,
  },
};

export default function DisclaimerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

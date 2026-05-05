import type { Metadata } from "next";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Our Story: Building Axiusflow",
  description:
    "Read why Axiusflow is building a focused trading journal for active traders with broker imports, supported auto sync, replay, AI review, and honest product expansion.",
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

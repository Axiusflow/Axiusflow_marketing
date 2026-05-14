import type { Metadata } from "next";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Axiusflow vs Tradervue — Modern Trading Journal Alternative",
  description:
    "Compare Axiusflow and Tradervue. Axiusflow is the modern Tradervue alternative with personalized AI, premium UI, broker imports, and supported auto sync — built for active traders.",
  alternates: {
    canonical: `${siteUrl}/vs/tradervue`,
  },
  openGraph: {
    title: "Axiusflow vs Tradervue — Modern Trading Journal Alternative",
    description:
      "Why active traders are moving from Tradervue to Axiusflow: personalized AI, premium UI, and a focused review workspace.",
    url: `${siteUrl}/vs/tradervue`,
  },
};

export default function VsTradervueLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

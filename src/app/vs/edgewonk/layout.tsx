import type { Metadata } from "next";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Axiusflow vs Edgewonk — Modern Trading Journal Alternative",
  description:
    "Compare Axiusflow and Edgewonk. Axiusflow is the modern Edgewonk alternative with personalized AI, premium UI, broker imports, and supported auto sync — built for active traders.",
  alternates: {
    canonical: `${siteUrl}/vs/edgewonk`,
  },
  openGraph: {
    title: "Axiusflow vs Edgewonk — Modern Trading Journal Alternative",
    description:
      "Why traders are switching from Edgewonk to Axiusflow: personalized AI, premium UI, and a clean review workspace.",
    url: `${siteUrl}/vs/edgewonk`,
  },
};

export default function VsEdgewonkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

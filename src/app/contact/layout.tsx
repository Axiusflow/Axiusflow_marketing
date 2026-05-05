import type { Metadata } from "next";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Axiusflow",
  description:
    "Contact Axiusflow to request a trading journal demo, discuss broker imports, auto sync workflows, or share your replay and analytics needs.",
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

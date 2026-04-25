import type { Metadata } from "next";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Read the Axiusflow Cookie Policy to understand how cookies and similar technologies support website functionality and analytics.",
  alternates: {
    canonical: `${siteUrl}/cookies`,
  },
};

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

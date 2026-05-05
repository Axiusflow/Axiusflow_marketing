import type { Metadata } from "next";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Axiusflow Privacy Policy to understand how information is collected, used, protected, and handled across the service.",
  alternates: {
    canonical: `${siteUrl}/privacy`,
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

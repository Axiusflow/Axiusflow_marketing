import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Axiusflow",
  description:
    "Contact Axiusflow to join the waitlist, request a trading journal demo, discuss broker imports, or share your charting and replay workflow.",
  alternates: {
    canonical: "https://axiusflow.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

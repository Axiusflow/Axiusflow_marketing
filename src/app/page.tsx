import { AxiusflowLandingPage } from "@/components/axiusflow-landing";
import {
  faqItems,
  ogImageHeight,
  ogImageUrl,
  ogImageWidth,
  siteDescription,
  siteName,
  siteUrl,
} from "@/lib/seo";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: siteName,
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/logo_transparent.svg`,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: siteName,
        url: siteUrl,
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${siteUrl}/#software`,
        name: siteName,
        applicationCategory: "FinanceApplication",
        operatingSystem: "Web",
        url: siteUrl,
        image: {
          "@type": "ImageObject",
          url: ogImageUrl,
          width: ogImageWidth,
          height: ogImageHeight,
        },
        description: siteDescription,
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        offers: {
          "@type": "Offer",
          price: "20",
          priceCurrency: "USD",
          description: "Axiusflow Pro is available for $20 per month. A free plan is available for evaluation.",
        },
        featureList: [
          "Live crypto charting",
          "Trading journal",
          "Trade replay",
          "AI-powered trade reviews",
          "Broker and CSV trade imports",
          "Performance analytics",
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        id="schema-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <AxiusflowLandingPage />
    </>
  );
}

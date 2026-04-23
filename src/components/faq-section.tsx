"use client";

import { HelpCircleIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import * as Accordion from "@/components/ui/accordion";
import { faqItems } from "@/lib/seo";

export function FAQSection() {
  return (
    <section className="af-page-bg py-16 lg:py-24">
      <div className="mx-auto max-w-[800px] px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-[8px] border border-border af-surface-bg px-4 py-1.5">
            <HugeiconsIcon icon={HelpCircleIcon} className="h-4 w-4 af-text-secondary" />
          <span className="text-[13px] font-medium af-text-secondary">
              FAQ
            </span>
          </div>
          <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-semibold leading-[1.1] tracking-[-0.02em] af-text-primary">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-[540px] text-[15px] leading-[1.6] af-text-secondary">
            Answers for traders comparing charting, journaling, replay, AI review, and market-data workflows.
          </p>
        </div>

        {/* Accordion */}
        <Accordion.Root type="single" collapsible className="space-y-3">
          {faqItems.map((item) => (
            <Accordion.Item key={item.id} value={item.id}>
              <Accordion.Header>
                <Accordion.Trigger>
                  <span>{item.question}</span>
                  <Accordion.Arrow />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content>
                {item.answer}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}

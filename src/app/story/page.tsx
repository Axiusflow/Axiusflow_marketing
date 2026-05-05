"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Component as Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function StoryPage() {
  return (
    <div className="min-h-screen af-page-bg transition-colors duration-300">
      <Header />

      <main className="px-6 pb-24">
        <article className="mx-auto max-w-[720px]">
          {/* Hero Section */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-16 pb-12 text-center lg:pt-24 lg:pb-16"
          >
            <span className="mb-4 inline-block text-[13px] font-medium uppercase tracking-widest af-text-secondary">
              Our Story
            </span>
            <h1 className="font-display text-[clamp(36px,5vw,56px)] font-semibold leading-[1.1] tracking-[-0.03em] af-text-primary">
              Building a Smarter Trading Journal
            </h1>
            <p className="mt-6 text-[18px] leading-[1.7] af-text-secondary">
              A solo founder&apos;s journey to build the focused trading journal and review workflow that traders deserve.
            </p>
          </motion.div>

          {/* Founder Section */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16 flex flex-col items-center gap-4"
          >
            <div className="relative h-20 w-20 overflow-hidden rounded-full ring-1 ring-black/5 dark:ring-white/10">
              <Image
                src="/founder.jpg"
                alt="Devraj, founder of Axiusflow"
                fill
                sizes="80px"
                className="object-cover"
                priority
              />
            </div>
            <div className="text-center">
              <p className="font-display text-[18px] font-semibold af-text-primary">Devraj</p>
              <p className="text-[14px] af-text-secondary">Founder & Developer</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose-content space-y-8"
          >
            {/* The Vision */}
            <section>
              <h2 className="font-display mb-4 text-[24px] font-semibold tracking-[-0.02em] af-text-primary">
                The Vision
              </h2>
              <p className="text-[16px] leading-[1.8] af-text-secondary">
                Hi, I&apos;m Devraj — the founder of Axiusflow. At 19 years old, I set out to solve a problem that 
                every serious trader faces: the fragmentation of trading tools. Journaling in one place, 
                broker connections scattered elsewhere, review notes buried across tabs. It&apos;s chaos that costs traders 
                time, money, and mental clarity.
              </p>
              <p className="mt-4 text-[16px] leading-[1.8] af-text-secondary">
                Axiusflow was born from a simple yet ambitious idea — to build a <strong className="af-text-primary font-medium">centralized 
                trading review workspace</strong> where you can journal, import broker history, sync supported accounts, and replay trades
                all in one seamless environment. No more tab-switching. No more scattered data. Just one 
                unified workspace designed for the way traders actually review and improve.
              </p>
            </section>

            {/* What We're Building */}
            <section>
              <h2 className="font-display mb-4 text-[24px] font-semibold tracking-[-0.02em] af-text-primary">
                What We&apos;re Building
              </h2>
              <p className="text-[16px] leading-[1.8] af-text-secondary">
                Axiusflow is more than just another trading tool. It&apos;s a focused review product that brings together:
              </p>
              <ul className="mt-4 space-y-3 text-[16px] leading-[1.8] af-text-secondary">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span><strong className="af-text-primary font-medium">Integrated Trading Journal</strong> — A focused place for notes, tags, screenshots, and performance review.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span><strong className="af-text-primary font-medium">Broker Imports & Auto Sync</strong> — Bring trade history into one dashboard while supported broker workflows expand.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span><strong className="af-text-primary font-medium">Trade Replay</strong> — Review your trades with execution context, notes, and outcomes in one place.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span><strong className="af-text-primary font-medium">AI Review & Analytics</strong> — Surface recurring mistakes, behavior patterns, and lessons worth repeating.</span>
                </li>
              </ul>
            </section>

            {/* Our Promise */}
            <section>
              <h2 className="font-display mb-4 text-[24px] font-semibold tracking-[-0.02em] af-text-primary">
                Our Promise
              </h2>
              <p className="text-[16px] leading-[1.8] af-text-secondary">
                I started Axiusflow solo, and I&apos;m building it with one unwavering priority: <strong className="af-text-primary font-medium">smooth 
                operation and exceptional user experience</strong>. Every feature, every interaction, every pixel is 
                designed with the trader in mind. As we scale, this commitment only grows stronger.
              </p>
              <p className="mt-4 text-[16px] leading-[1.8] af-text-secondary">
                My promise to you is simple: as Axiusflow grows, things will only get better. More features, 
                more integrations, better performance — all while maintaining the clean, intuitive experience 
                that traders deserve. This isn&apos;t just a product; it&apos;s a long-term commitment to the trading community.
              </p>
            </section>

            {/* A Note on Broker Coverage */}
            <section>
              <h2 className="font-display mb-4 text-[24px] font-semibold tracking-[-0.02em] af-text-primary">
                A Note on Broker Coverage
              </h2>
              <p className="text-[16px] leading-[1.8] af-text-secondary">
                Transparency matters. Reliable broker connectivity takes real engineering work, dependable APIs, 
                and ongoing maintenance. We&apos;re being honest about that because you deserve to know what&apos;s live, 
                what&apos;s import-based, and what&apos;s still on the roadmap.
              </p>
              <p className="mt-4 text-[16px] leading-[1.8] af-text-secondary">
                Here&apos;s our commitment: <strong className="af-text-primary font-medium">we will only expand broker auto sync when it is stable, useful, and transparent</strong>. 
                Until then, we&apos;ll keep improving imports, replay, and review workflows so traders can still get real value today.
              </p>
            </section>

            {/* Join the Journey */}
            <section className="rounded-xl border border-border af-surface-muted-bg p-8">
              <h2 className="font-display mb-4 text-[24px] font-semibold tracking-[-0.02em] af-text-primary">
                Join the Journey
              </h2>
              <p className="text-[16px] leading-[1.8] af-text-secondary">
                Axiusflow is just getting started, and I&apos;d love for you to be part of this journey. Whether 
                you&apos;re a day trader, swing trader, or long-term investor, we&apos;re building this for you.
              </p>
              <p className="mt-4 text-[16px] leading-[1.8] af-text-secondary">
                Thank you for believing in what we&apos;re creating. Together, we&apos;re going to change how traders work.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="text-[14px] af-text-secondary">—</span>
                <span className="font-display text-[16px] font-medium af-text-primary">Devraj, Founder of Axiusflow</span>
              </div>
            </section>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-[8px] px-6 py-3 text-[15px] font-medium af-header-cta transition-colors"
            >
              Explore Axiusflow
            </Link>
          </motion.div>
        </article>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

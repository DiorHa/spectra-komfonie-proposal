"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function HeroSection() {
  return (
    <section id="top" className="container-pad relative overflow-hidden pb-20 pt-16 sm:pb-24 sm:pt-24">
      <div className="absolute inset-0 -z-10 bg-grid-fade bg-[size:32px_32px] opacity-30" />
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <p className="mb-5 text-xs uppercase tracking-[0.24em] text-accentSoft">Strategic Partnership Proposal</p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            Start with a focused 2-person team. Scale with confidence.
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-7 text-muted sm:text-base">
            A structured, long-term support model by Spectra, built around Komfonie&apos;s HLKS planning,
            BIM coordination, and project workflow environment.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-muted/90 sm:text-base">
            The proposal is designed for continuity, reliable execution, and measurable integration across tools
            such as Trimble Nova, Trimble Connect, Solibri Model Checker, ProjektPro, Microsoft 365, Azure
            Virtual Desktop, Smino, and Miro.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#model"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-medium text-bg transition duration-300 hover:-translate-y-0.5 hover:bg-accentSoft hover:shadow-[0_10px_28px_rgba(255,138,61,0.32)]"
            >
              Explore the Proposal
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="mailto:partnerships@spectra.example?subject=Komfonie%20Intro%20Conversation"
              className="inline-flex items-center gap-2 rounded-xl border border-line px-5 py-3 text-sm text-text transition duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent/10 hover:text-white"
            >
              <CalendarDays className="h-4 w-4" />
              Book an Intro Conversation
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="panel edge-glow relative overflow-hidden p-6 sm:p-8">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-transparent to-transparent" />
          <div className="relative space-y-6">
            <div className="flex items-center justify-between rounded-xl border border-line bg-bg/50 px-4 py-3">
              <span className="text-sm text-muted">Focused team core</span>
              <span className="text-sm font-medium text-white">2 nodes connected</span>
            </div>

            <div className="relative h-56 overflow-hidden rounded-xl border border-line bg-bg/50 p-4">
              <svg viewBox="0 0 360 180" className="h-full w-full">
                <defs>
                  <linearGradient id="conn" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#ff8a3d" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#ffb381" stopOpacity="0.9" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M45 68 C 120 20, 215 140, 300 92"
                  fill="none"
                  stroke="url(#conn)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0.2, opacity: 0.3 }}
                  animate={{ pathLength: [0.25, 1, 0.25], opacity: [0.35, 1, 0.35] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.circle
                  cx="45"
                  cy="68"
                  r="8"
                  fill="#ff8a3d"
                  animate={{ r: [8, 10, 8], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2.6, repeat: Infinity }}
                />
                <motion.circle
                  cx="300"
                  cy="92"
                  r="8"
                  fill="#ffb381"
                  animate={{ r: [8, 10, 8], opacity: [0.75, 1, 0.75] }}
                  transition={{ duration: 2.6, repeat: Infinity, delay: 0.7 }}
                />
                <motion.circle
                  r="4"
                  fill="#ffd0ad"
                  animate={{
                    cx: [45, 120, 200, 300, 45],
                    cy: [68, 48, 100, 92, 68],
                    opacity: [0.35, 1, 1, 0.35, 0.35],
                  }}
                  transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                />
              </svg>

              <div className="absolute bottom-5 left-5 right-5 h-1 rounded-full bg-line">
                <motion.div
                  className="h-1 rounded-full bg-gradient-to-r from-accent to-accentSoft"
                  animate={{ width: ["30%", "84%", "30%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </div>

            <p className="text-xs leading-6 text-muted">
              Suggested path: begin with focused support, integrate into established delivery routines, then
              scale based on proven outcomes.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

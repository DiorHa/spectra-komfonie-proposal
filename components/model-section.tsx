"use client";

import { modelStats } from "@/lib/content";
import { motion } from "framer-motion";
import { Reveal } from "@/components/reveal";

export function ModelSection() {
  return (
    <section id="model" className="container-pad py-16 sm:py-20">
      <Reveal>
        <div className="accent-line" />
        <h2 className="section-title mt-6">Focused 2 FTE model</h2>
        <p className="section-copy">
          Spectra believes in starting lean, structured, and measurable. A focused team can integrate deeply,
          learn Komfonie&apos;s workflow environment, and create continuity that improves with each delivery cycle.
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mt-10 rounded-2xl border border-line bg-panel/55 p-6 sm:p-8">
        <div className="grid gap-0 rounded-xl border border-line/70 bg-bg/25 md:grid-cols-3">
          {modelStats.map((item, index) => (
            <div
              key={item.label}
              className={`group px-5 py-5 sm:px-6 ${index < modelStats.length - 1 ? "border-b border-line/70 md:border-b-0 md:border-r" : ""}`}
            >
              <p className="text-xs uppercase tracking-[0.12em] text-muted">{item.label}</p>
              <motion.p
                className="mt-3 text-3xl font-semibold tracking-tight text-white transition group-hover:text-accentSoft sm:text-4xl"
                initial={{ opacity: 0.7, y: 4 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                {item.value}
              </motion.p>
              <p className="mt-2 text-sm text-muted">{item.sub}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div className="edge-glow interactive-lift rounded-xl border border-line bg-bg/30 p-5 sm:p-6">
            <h3 className="text-lg font-medium text-white">Bundled fee includes</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>- 2 full-time dedicated team members</li>
              <li>- Operational support from Spectra</li>
              <li>- Coordination and management oversight</li>
              <li>- Onboarding support</li>
              <li>- Infrastructure where applicable</li>
            </ul>
          </div>

          <div className="edge-glow interactive-lift rounded-xl border border-accent/35 bg-gradient-to-br from-accent/12 to-accent/5 p-5 sm:p-6">
            <p className="text-xs uppercase tracking-[0.12em] text-accentSoft">Core anchor</p>
            <p className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-[30px]">
              2 FTE + 12+ months + EUR 7,600/month
            </p>
            <p className="mt-3 text-sm text-muted">
              Start lean, integrate deeply, and scale only after quality and workflow fit are proven.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

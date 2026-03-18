"use client";

import { phases } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { motion } from "framer-motion";

export function TimelineSection() {
  return (
    <section id="timeline" className="container-pad py-16 sm:py-20">
      <Reveal>
        <div className="accent-line" />
        <h2 className="section-title mt-6">Delivery approach</h2>
      </Reveal>

      <Reveal delay={0.08} className="mt-10">
        <div className="relative hidden lg:block">
          <div className="absolute left-0 right-0 top-5 h-px bg-line" />
          <motion.div
            className="absolute left-0 top-5 h-px bg-gradient-to-r from-accent to-accentSoft"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          />
          <div className="grid grid-cols-4 gap-6 pt-0">
            {phases.map((phase, index) => (
              <div key={phase.title} className="group pt-9">
                <div className="absolute -mt-[18px] h-3.5 w-3.5 rounded-full border border-accent/45 bg-bg transition group-hover:scale-125 group-hover:bg-accent" style={{ left: `calc(${index * 25}% + 8px)` }} />
                <h3 className="text-base font-medium text-white transition group-hover:text-accentSoft">{phase.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted transition group-hover:text-text">{phase.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 lg:hidden">
          {phases.map((phase, index) => (
            <div key={phase.title} className="edge-glow interactive-lift relative rounded-xl border border-line bg-panel/45 p-5">
              <span className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-accent/80 to-transparent" />
              <p className="pl-4 text-xs uppercase tracking-[0.12em] text-accentSoft">{`0${index + 1}`}</p>
              <h3 className="mt-2 pl-4 text-base font-medium text-white">{phase.title}</h3>
              <p className="mt-2 pl-4 text-sm leading-6 text-muted">{phase.detail}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

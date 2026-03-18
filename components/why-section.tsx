import { Reveal } from "@/components/reveal";

const pressurePoints = [
  "Drafting throughput during active project peaks",
  "Model coordination follow-through between review cycles",
  "Documentation consistency across team handoffs",
  "Structured support for QA-oriented delivery routines",
];

export function WhySection() {
  return (
    <section id="why" className="container-pad py-16 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <div className="accent-line" />
          <h2 className="section-title mt-6">Why this makes sense</h2>
          <p className="section-copy">
            In HLKS and BIM-driven project environments, delivery pressure does not sit only at senior engineering
            level. Reliable execution often depends on stronger support around drafting, model coordination,
            documentation quality, and consistent follow-through.
          </p>
          <p className="section-copy">
            This model gives Komfonie additional delivery capacity exactly where structured support creates the most
            impact: keeping planning packages clean, coordination cycles tight, and output aligned with internal QA
            expectations.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative border-l border-accent/30 pl-6 sm:pl-8">
            <p className="text-xs uppercase tracking-[0.14em] text-accentSoft">Operational pressure points</p>
            <div className="mt-4 space-y-5">
              {pressurePoints.map((point, index) => (
                <div key={point} className="group relative edge-glow rounded-xl border border-line/80 bg-panel/50 p-4 interactive-lift">
                  <span className="absolute -left-[34px] top-5 hidden h-2.5 w-2.5 rounded-full bg-accent sm:block" />
                  <p className="text-sm text-muted transition group-hover:text-text">{point}</p>
                  <p className="mt-2 text-xs text-muted/70">{`0${index + 1}`}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

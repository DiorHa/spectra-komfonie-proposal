import { Reveal } from "@/components/reveal";
import { valueCards } from "@/lib/content";

export function ValueSection() {
  return (
    <section id="value" className="container-pad py-16 sm:py-20">
      <Reveal>
        <div className="accent-line" />
        <h2 className="section-title mt-6">Value proposition</h2>
      </Reveal>

      <div className="mt-10 space-y-3">
        {valueCards.map((card, index) => (
          <Reveal key={card.title} delay={index * 0.06}>
            <div className="group edge-glow interactive-lift grid gap-4 rounded-xl border border-line bg-panel/45 p-5 sm:grid-cols-[170px_1fr_auto] sm:items-center sm:p-6">
              <p className="text-sm font-medium text-white">{card.title}</p>
              <p className="text-sm leading-7 text-muted transition group-hover:text-text">{card.description}</p>
              <span className="text-xs tracking-[0.14em] text-accentSoft">{`0${index + 1}`}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

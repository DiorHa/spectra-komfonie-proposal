import { Reveal } from "@/components/reveal";

export function ClosingSection() {
  return (
    <section id="next-step" className="container-pad pb-20 pt-16 sm:pb-24 sm:pt-20">
      <Reveal className="edge-glow relative overflow-hidden rounded-2xl border border-line bg-panel/55 p-8 sm:p-11">
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
        <p className="relative text-sm leading-7 text-muted">
          Spectra believes that a focused 2-person team over a 12+ month period is the strongest way to begin
          building a reliable, scalable collaboration with Komfonie.
        </p>
        <h2 className="relative mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Let&apos;s define a 2 FTE setup tailored to your workflow.
        </h2>

        <div className="relative mt-8 flex flex-wrap gap-3">
          <a
            href="mailto:dior@thespectra.co?subject=Komfonie%20Intro%20Conversation"
            className="rounded-xl bg-accent px-5 py-3 text-sm font-medium text-bg transition duration-300 hover:-translate-y-0.5 hover:bg-accentSoft hover:shadow-[0_10px_28px_rgba(255,138,61,0.32)]"
          >
            Book an Intro Conversation
          </a>
          <a
            href="#summary"
            className="rounded-xl border border-line px-5 py-3 text-sm text-text transition duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent/10"
          >
            Download Summary
          </a>
        </div>
      </Reveal>

      <div id="summary" className="mt-8 rounded-xl border border-dashed border-line/70 p-5 text-sm text-muted">
        Summary placeholder: a downloadable PDF brief can be linked here when provided.
      </div>
    </section>
  );
}


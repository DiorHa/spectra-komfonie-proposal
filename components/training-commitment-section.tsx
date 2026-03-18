import { Reveal } from "@/components/reveal";

export function TrainingCommitmentSection() {
  return (
    <section id="training" className="container-pad py-16 sm:py-20">
      <Reveal className="relative overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-panel/80 to-bg/70 p-7 sm:p-10">
        <div className="absolute -right-20 top-0 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative grid gap-7 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accentSoft">Strategic Commitment</p>
            <h2 className="section-title mt-4">Long-term commitment, not just resource supply.</h2>
            <p className="section-copy mt-5 max-w-3xl">
              Subject to a long-term agreement, Spectra is prepared to cover the cost of in-house training,
              tool onboarding, and targeted upskilling needed for the agreed delivery scope.
            </p>
          </div>
          <div className="edge-glow interactive-lift rounded-xl border border-line bg-bg/40 p-5">
            <p className="text-sm font-medium text-white">Alignment areas covered by Spectra</p>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>- Trimble Nova and Trimble Snap support where needed</li>
              <li>- Trimble Connect coordination routines</li>
              <li>- Solibri preparation and review support workflows</li>
              <li>- Internal QA and documentation practice alignment</li>
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

import { DraftingCompass, Network } from "lucide-react";
import { Reveal } from "@/components/reveal";

const roles = [
  {
    label: "Profile 1",
    title: "HLKS / CAD Support Specialist",
    icon: DraftingCompass,
    intro: "Focused on drawing quality, structured documentation, and planning-output consistency.",
    points: [
      "Drawing preparation",
      "Plan updates based on markups",
      "Technical drafting support",
      "Documentation structuring",
      "File consistency and standards alignment",
    ],
  },
  {
    label: "Profile 2",
    title: "BIM / Coordination Support Specialist",
    icon: Network,
    intro: "Focused on model coordination routines, issue follow-up, and structured BIM support delivery.",
    points: [
      "Trimble Connect coordination support",
      "Issue tracking and follow-up",
      "Solibri-related support workflows",
      "Coordination documentation",
      "IFC and model organization support",
    ],
  },
];

export function TeamSetupSection() {
  return (
    <section id="team" className="container-pad py-16 sm:py-20">
      <Reveal>
        <div className="accent-line" />
        <h2 className="section-title mt-6">Suggested Initial Team Setup</h2>
      </Reveal>

      <Reveal delay={0.05} className="mt-6 edge-glow rounded-xl border border-line bg-bg/25 p-4 sm:p-5">
        <p className="text-sm leading-7 text-muted">
          Spectra, together with its parent company Modium, operates an in-house team of 25+ BIM engineers
          working across multiple tools and environments, including Revit and other industry-standard platforms.
          This existing capability enables a smooth and efficient onboarding of new resources.
        </p>
        <p className="mt-2 text-sm leading-7 text-muted">
          The proposed profiles are mid- to senior-level engineers, typically with 3-4+ years of relevant
          experience.
        </p>
      </Reveal>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {roles.map((role, index) => {
          const Icon = role.icon;
          return (
            <Reveal key={role.title} delay={index * 0.08}>
              <div className="edge-glow interactive-lift rounded-2xl border border-line bg-panel/55 p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  <div className="inline-flex rounded-lg border border-accent/35 bg-accent/10 p-3 text-accentSoft">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-xs uppercase tracking-[0.14em] text-accentSoft">{role.label}</p>
                </div>

                <h3 className="mt-5 text-2xl font-medium text-white">{role.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{role.intro}</p>

                <div className="mt-6 border-t border-line/70 pt-5">
                  <p className="text-xs uppercase tracking-[0.12em] text-muted">Responsibilities</p>
                  <ul className="mt-4 space-y-3">
                    {role.points.map((point, pointIndex) => (
                      <li
                        key={point}
                        className="group grid grid-cols-[36px_1fr] items-start gap-3 rounded-lg border border-line/75 bg-bg/30 px-3 py-3 transition duration-300 hover:border-accent/50 hover:bg-accent/5"
                      >
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-accent/35 bg-accent/10 text-[11px] font-medium text-accentSoft">
                          {`0${pointIndex + 1}`}
                        </span>
                        <span className="pt-0.5 text-sm text-muted transition group-hover:text-text">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

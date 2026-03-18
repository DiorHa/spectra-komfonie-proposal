import { Reveal } from "@/components/reveal";

const verticals = [
  {
    title: "HLKS Planning Support",
    points: [
      "Drafting support",
      "Planning package preparation",
      "Revision handling",
      "File structuring",
      "Standards consistency",
    ],
  },
  {
    title: "BIM & Coordination Support",
    points: [
      "Model coordination support",
      "Issue follow-up",
      "Solibri preparation support",
      "Trimble Connect organization",
      "Coordination documentation",
    ],
  },
];

export function ServiceVerticalsSection() {
  return (
    <section id="verticals" className="container-pad py-16 sm:py-20">
      <Reveal>
        <div className="accent-line" />
        <h2 className="section-title mt-6">Service Verticals</h2>
      </Reveal>

      <div className="mt-10 overflow-hidden rounded-2xl border border-line bg-panel/50">
        <div className="grid md:grid-cols-2">
          {verticals.map((vertical, index) => (
            <Reveal
              key={vertical.title}
              delay={0.06 * index}
              className={`group relative p-7 sm:p-8 ${index === 0 ? "border-b border-line md:border-b-0 md:border-r" : ""}`}
            >
              <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_left,rgba(255,138,61,0.14),transparent_55%)]" />
              <div className="relative">
                <h3 className="text-xl font-medium text-white">{vertical.title}</h3>
                <ul className="mt-6 space-y-3">
                  {vertical.points.map((point) => (
                    <li key={point} className="flex items-center justify-between gap-3 border-b border-line/50 pb-2 text-sm text-muted transition group-hover:text-text">
                      <span>{point}</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

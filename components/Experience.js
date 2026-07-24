import { experience } from "@/lib/data";
import { SectionHeading } from "./About";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-t border-border px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="git log --experience" title="Experience" />

        <div className="mt-8 space-y-8 border-l border-border pl-6">
          {experience.map((exp) => (
            <div key={exp.role} className="relative">
              <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-green shadow-[0_0_10px_2px_rgba(57,255,140,0.6)]" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-lg font-bold text-text">
                  {exp.role}
                </h3>
                <span className="font-mono text-xs text-green-dim">
                  {exp.period}
                </span>
              </div>
              <p className="mt-0.5 font-mono text-sm text-green-soft">
                {exp.place}
              </p>
              <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-muted">
                {exp.points.map((pt, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-green-dim" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

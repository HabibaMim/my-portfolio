import { education } from "@/lib/data";
import { SectionHeading } from "./About";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-20 border-t border-border px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="cat ./education.log" title="Educational Qualification" />

        <div className="mt-8 space-y-4">
          {education.map((ed) => (
            <div
              key={ed.degree}
              className="flex gap-4 rounded-lg border border-border bg-panel/60 p-6"
            >
              <GraduationCap className="mt-1 shrink-0 text-green" size={22} />
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-lg font-bold text-text">
                    {ed.degree}
                  </h3>
                  <span className="font-mono text-xs text-green-dim">
                    {ed.period}
                  </span>
                </div>
                <p className="mt-0.5 font-mono text-sm text-green-soft">
                  {ed.institution}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {ed.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

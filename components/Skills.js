import { skills } from "@/lib/data";
import { SectionHeading } from "./About";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-border px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="ls ./skills" title="Skills" />

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-lg border border-border bg-panel/60 p-6"
            >
              <h3 className="font-mono text-sm font-semibold text-green">
                {group.category}
              </h3>
              <ul className="mt-5 space-y-4">
                {group.items.map((skill) => (
                  <li key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between font-mono text-xs text-muted">
                      <span>{skill.name}</span>
                      <span className="text-green-dim">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-green-deep/50">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-green-dim to-green"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
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

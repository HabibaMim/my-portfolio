import { about } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="cat about.md" title="About Me" />
        <div className="mt-8 space-y-5 rounded-lg border border-border bg-panel/60 p-6 text-[15px] leading-relaxed text-muted sm:p-8 sm:text-base">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-green-dim">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-display text-2xl font-extrabold text-text sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}

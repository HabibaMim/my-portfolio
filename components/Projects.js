import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { SectionHeading } from "./About";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-t border-border px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="ls ./projects" title="Projects" />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.slug}
              className="group flex flex-col overflow-hidden rounded-lg border border-border bg-panel/60 transition-colors hover:border-green-dim"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border bg-panel-2">
                <Image
                  src={p.image}
                  alt={`${p.name} project preview`}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-bold text-text">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm text-muted">{p.tagline}</p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.stack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-sm border border-border px-2 py-0.5 font-mono text-[11px] text-green-dim"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/projects/${p.slug}`}
                  className="mt-5 inline-flex items-center gap-1 font-mono text-sm font-medium text-green hover:text-green-soft"
                >
                  View Details <ArrowUpRight size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

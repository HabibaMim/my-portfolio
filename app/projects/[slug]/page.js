import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Lightbulb, AlertTriangle, Wrench } from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — Project Details`,
    description: project.tagline,
  };
}

export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className="px-5 py-14 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 font-mono text-sm text-muted hover:text-green"
        >
          <ArrowLeft size={15} /> back to projects
        </Link>

        <div className="mt-6 relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-border bg-panel-2">
          <Image
            src={project.image}
            alt={`${project.name} preview`}
            fill
            sizes="(max-width: 768px) 90vw, 700px"
            className="object-cover"
            priority
          />
        </div>

        <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-green-dim">
          project / {project.slug}
        </p>
        <h1 className="mt-2 font-display text-3xl font-extrabold text-text sm:text-4xl">
          {project.name}
        </h1>
        <p className="mt-2 text-muted">{project.tagline}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-sm border border-border px-2.5 py-1 font-mono text-xs text-green-dim"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-sm bg-green px-4 py-2.5 text-sm font-bold text-[#04140c] hover:bg-green-soft"
          >
            Live Project <ExternalLink size={15} />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-sm border border-border px-4 py-2.5 text-sm font-medium text-text hover:border-green hover:text-green"
          >
            <GithubIcon className="h-4 w-4" /> Client Repository
          </a>
        </div>

        <Section icon={Lightbulb} title="Overview">
          <p>{project.description}</p>
        </Section>

        <Section icon={AlertTriangle} title="Challenges Faced">
          <p>{project.challenges}</p>
        </Section>

        <Section icon={Wrench} title="Potential Improvements & Future Plans">
          <p>{project.improvements}</p>
        </Section>
      </div>
    </article>
  );
}

function Section({ icon: Icon, title, children }) {
  return (
    <section className="mt-10 border-t border-border pt-8">
      <h2 className="flex items-center gap-2 font-display text-lg font-bold text-text">
        <Icon size={18} className="text-green" />
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-muted">
        {children}
      </div>
    </section>
  );
}

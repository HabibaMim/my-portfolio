"use client";

import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon, FacebookIcon } from "./BrandIcons";
import { profile } from "@/lib/data";

const iconMap = { github: GithubIcon, linkedin: LinkedinIcon, twitter: TwitterIcon, facebook: FacebookIcon };

function useTypewriterLoop(texts, { typeSpeed = 55, deleteSpeed = 30, pause = 1400 } = {}) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index % texts.length];

    const finishedTyping = !deleting && text === current;
    const finishedDeleting = deleting && text === "";
    const delay = finishedTyping ? pause : deleting ? deleteSpeed : typeSpeed;

    const timeout = setTimeout(() => {
      if (finishedTyping) {
        // fully typed - pause already elapsed, now start deleting
        setDeleting(true);
      } else if (finishedDeleting) {
        // fully deleted (decremented to 0) - move to the next phrase
        setDeleting(false);
        setIndex((i) => (i + 1) % texts.length);
      } else {
        setText((t) =>
          deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, deleting, index, texts, typeSpeed, deleteSpeed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriterLoop(profile.roles ?? [profile.designation]);

  return (
    <section id="top" className="relative overflow-hidden px-5 pb-20 pt-16 sm:px-8 sm:pt-24">
      <div className="mx-auto max-w-3xl">
        {/* Terminal window - the signature element */}
        <div className="relative rounded-lg border border-border bg-panel/80 shadow-[0_0_60px_-15px_rgba(57,255,140,0.25)] backdrop-blur-sm">
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
            <span className="ml-3 font-mono text-xs text-muted">
              dev@portfolio: ~
            </span>
          </div>

          <div className="p-6 font-mono text-sm leading-relaxed sm:p-8 sm:text-base">
            <p className="text-muted">
              <span className="text-green">dev@portfolio</span>
              <span className="text-muted">:</span>
              <span className="text-green-soft">~$</span> whoami
            </p>
            <h1 className="terminal-glow mt-3 font-display text-3xl font-extrabold text-text sm:text-4xl">
              {profile.name}
            </h1>
            <p className="mt-2 min-h-[1.6em] text-lg text-green sm:text-xl">
              {typed}
              <span className="blink-cursor" />
            </p>

            <p className="mt-6 max-w-md text-[15px] text-muted">
              {profile.tagline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={profile.resumeUrl}
                
                className="rounded-sm bg-green px-5 py-3 text-sm font-bold text-[#04140c] transition-transform hover:scale-[1.03] hover:bg-green-soft"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="rounded-sm border border-border px-5 py-3 text-sm font-medium text-text transition-colors hover:border-green hover:text-green"
              >
                Let's Connect
              </a>
            </div>

            <div className="mt-7 flex items-center sm:pb-0 pb-9 gap-4 border-t border-border pt-6">
              {profile.socials.map((s) => {
                const Icon = iconMap[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="rounded-sm border border-border p-2.5 text-muted transition-colors hover:border-green hover:text-green"
                  >
                    {Icon && <Icon className="h-[18px] w-[18px]" />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Status badge - bottom right of the terminal card */}
          <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full border border-green-deep bg-bg/80 px-3 py-1.5 font-mono text-xs text-green-soft backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-green shadow-[0_0_6px_2px_rgba(57,255,140,0.7)]" />
            status: <span className="text-green">available for work</span>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="mx-auto mt-16 flex w-fit items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-green"
      >
        scroll <ArrowDown size={14} className="animate-bounce" />
      </a>
    </section>
  );
}
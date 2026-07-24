import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 font-mono text-xs text-muted sm:flex-row">
        <p>
          <span className="text-green-dim">© {new Date().getFullYear()}</span>{" "}
          {profile.name}
        </p>
        <p className="text-green-deep">
          &lt;/&gt; designed &amp; coded with intent
        </p>
      </div>
    </footer>
  );
}

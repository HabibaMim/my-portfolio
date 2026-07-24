import { Mail, Phone, MessageCircle } from "lucide-react";
import { profile } from "@/lib/data";
import { SectionHeading } from "./About";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-border px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="./send-message.sh" title="Get In Touch" />
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
          Have a project in mind or just want to say hi? My inbox — and terminal — are always open.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <ContactCard
            icon={Mail}
            label="Email"
            value={profile.email}
            href={`mailto:${profile.email}`}
          />
          <ContactCard
            icon={Phone}
            label="Phone"
            value={profile.phone}
            href={`tel:${profile.phone.replace(/\s+/g, "")}`}
          />
          <ContactCard
            icon={MessageCircle}
            label="WhatsApp"
            value={profile.whatsapp}
            href={`https://wa.me/${profile.whatsapp.replace(/[^\d]/g, "")}`}
          />
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon: Icon, label, value, href }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="flex flex-col gap-3 rounded-lg border border-border bg-panel/60 p-5 transition-colors hover:border-green"
    >
      <Icon className="text-green" size={20} />
      <div>
        <p className="font-mono text-xs uppercase tracking-wide text-green-dim">
          {label}
        </p>
        <p className="mt-1 break-all text-sm text-text">{value}</p>
      </div>
    </a>
  );
}

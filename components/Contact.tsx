import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import FadeIn from "./FadeIn";
import { profile } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <FadeIn className="flex flex-col items-center rounded-2xl border border-surface-2 bg-surface px-6 py-16 text-center sm:px-12">
        <p className="font-mono text-sm text-accent">07 · What&apos;s next?</p>
        <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">Let&apos;s connect</h2>
        <p className="mt-4 max-w-xl text-sm text-muted sm:text-base">
          I&apos;m always open to new opportunities, collaborations, or just talking
          about data. My inbox is open — I&apos;ll get back to you.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="group mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-bg transition-transform hover:scale-[1.03] hover:bg-primary/90"
        >
          Say Hello
          <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-muted">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 transition-colors hover:text-ink"
          >
            <Mail size={16} />
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/[^\d+]/g, "")}`}
            className="flex items-center gap-2 transition-colors hover:text-ink"
          >
            <Phone size={16} />
            {profile.phone}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-ink"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-ink"
          >
            <LinkedinIcon className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </FadeIn>
    </section>
  );
}

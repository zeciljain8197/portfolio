import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import { about } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <SectionHeading index="01" title="About Me" />

      <FadeIn delay={0.1}>
        <p className="max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
          {about.summary}
        </p>
      </FadeIn>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {about.highlights.map((highlight, i) => (
          <FadeIn key={highlight.label} delay={0.15 + i * 0.08}>
            <div className="rounded-xl border border-surface-2 bg-surface px-6 py-6 transition-colors hover:border-primary/40">
              <p className="text-gradient font-mono text-3xl font-bold">
                {highlight.value}
              </p>
              <p className="mt-2 text-sm text-muted">{highlight.label}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

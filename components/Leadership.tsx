import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import { leadership } from "@/data/portfolio";

export default function Leadership() {
  return (
    <section id="leadership" className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <SectionHeading index="05" title="Leadership & Activities" />

      <div className="grid grid-cols-1 gap-5">
        {leadership.map((entry, i) => (
          <FadeIn key={entry.title} delay={i * 0.08}>
            <div className="rounded-xl border border-surface-2 bg-surface p-6 transition-colors hover:border-primary/40">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-ink">{entry.title}</h3>
                <span className="font-mono text-xs text-muted sm:text-sm">{entry.period}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                {entry.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

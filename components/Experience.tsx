import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <SectionHeading index="02" title="Experience" />

      <div className="relative border-l border-surface-2 pl-8 sm:pl-10">
        {experience.map((entry, i) => (
          <FadeIn key={entry.company} delay={i * 0.1} className="relative mb-14 last:mb-0">
            <span className="absolute -left-[2.32rem] top-1.5 h-3 w-3 rounded-full border-2 border-bg bg-accent sm:-left-[2.65rem]" />

            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-semibold text-ink sm:text-xl">
                {entry.role} <span className="text-accent">@ {entry.company}</span>
              </h3>
              <span className="font-mono text-xs text-muted sm:text-sm">{entry.period}</span>
            </div>

            <ul className="mt-4 space-y-2.5">
              {entry.achievements.map((achievement) => (
                <li key={achievement} className="flex gap-3 text-sm text-muted sm:text-base">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

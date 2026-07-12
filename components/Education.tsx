import { GraduationCap } from "lucide-react";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <SectionHeading index="06" title="Education" />

      <div className="grid grid-cols-1 gap-5">
        {education.map((entry, i) => (
          <FadeIn key={entry.school} delay={i * 0.08}>
            <div className="flex items-start gap-4 rounded-xl border border-surface-2 bg-surface p-6 transition-colors hover:border-accent/40">
              <div className="mt-1 shrink-0 rounded-lg bg-accent/10 p-2.5 text-accent">
                <GraduationCap size={22} />
              </div>
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold text-ink">{entry.school}</h3>
                  <span className="font-mono text-xs text-muted sm:text-sm">{entry.period}</span>
                </div>
                <p className="mt-1 text-sm text-muted sm:text-base">{entry.degree}</p>
                <p className="mt-2 font-mono text-sm text-accent">GPA: {entry.gpa}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <SectionHeading index="04" title="Skills" />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <FadeIn key={group.category} delay={i * 0.08}>
            <div className="h-full rounded-xl border border-surface-2 bg-surface p-6 transition-colors hover:border-accent/40">
              <h3 className="font-mono text-sm font-semibold text-accent">{group.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-surface-2 px-2.5 py-1 text-xs text-ink/90"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

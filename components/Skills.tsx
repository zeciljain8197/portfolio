import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import { skills, type SkillLevel } from "@/data/portfolio";

const LEVEL_DOTS: Record<SkillLevel, number> = {
  Advanced: 3,
  Proficient: 2,
  Familiar: 1,
};

const LEVEL_LABEL: Record<SkillLevel, string> = {
  Advanced: "Advanced — production experience",
  Proficient: "Proficient — comfortable day to day",
  Familiar: "Familiar — used in projects/coursework",
};

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <SectionHeading section="skills" />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {skills.map((group, i) => (
          <FadeIn key={group.category} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-surface-2 bg-surface p-6 transition-colors hover:border-accent/40">
              <div className="flex items-start gap-3">
                <span className="text-2xl leading-none">{group.icon}</span>
                <div>
                  <h3 className="font-semibold text-ink">{group.category}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{group.description}</p>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    title={LEVEL_LABEL[skill.level]}
                    className="flex items-center justify-between gap-3 rounded-lg px-2 py-1.5 transition-colors hover:bg-surface-2/60"
                  >
                    <span className="text-sm text-ink/90">{skill.name}</span>
                    <span className="flex shrink-0 items-center gap-1" aria-label={skill.level}>
                      {[1, 2, 3].map((dot) => (
                        <span
                          key={dot}
                          className={`h-1.5 w-1.5 rounded-full ${
                            dot <= LEVEL_DOTS[skill.level] ? "bg-accent" : "bg-surface-2"
                          }`}
                        />
                      ))}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

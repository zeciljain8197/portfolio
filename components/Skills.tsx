"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <SectionHeading section="skills" />

      <div className="mb-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-xs text-muted">
        {(["Advanced", "Proficient", "Familiar"] as const).map((level) => (
          <span key={level} className="flex items-center gap-1.5">
            <span className="flex items-center gap-0.5">
              {[1, 2, 3].map((dot) => (
                <span
                  key={dot}
                  className={`h-1.5 w-1.5 rounded-full ${dot <= LEVEL_DOTS[level] ? "bg-accent" : "bg-surface-2"}`}
                />
              ))}
            </span>
            {level}
          </span>
        ))}
        <span className="text-muted/70">— click a skill for detail</span>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {skills.map((group, i) => (
          <FadeIn key={group.category} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-surface-2 bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5">
              <div className="flex items-start gap-3">
                <motion.span
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-2xl leading-none"
                >
                  {group.icon}
                </motion.span>
                <div>
                  <h3 className="font-semibold text-ink">{group.category}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{group.description}</p>
                </div>
              </div>

              <div className="mt-5 space-y-1">
                {group.items.map((skill) => {
                  const key = `${group.category}-${skill.name}`;
                  const isOpen = expanded === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setExpanded(isOpen ? null : key)}
                      aria-expanded={isOpen}
                      className="w-full rounded-lg px-2 py-1.5 text-left transition-colors hover:bg-surface-2/60"
                    >
                      <span className="flex items-center justify-between gap-3">
                        <span className="text-sm text-ink/90">{skill.name}</span>
                        <span className="flex shrink-0 items-center gap-1" aria-label={skill.level}>
                          {[1, 2, 3].map((dot) => (
                            <motion.span
                              key={dot}
                              animate={isOpen && dot <= LEVEL_DOTS[skill.level] ? { scale: [1, 1.4, 1] } : {}}
                              transition={{ duration: 0.35, delay: dot * 0.05 }}
                              className={`h-1.5 w-1.5 rounded-full ${
                                dot <= LEVEL_DOTS[skill.level] ? "bg-accent" : "bg-surface-2"
                              }`}
                            />
                          ))}
                        </span>
                      </span>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.span
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="block overflow-hidden text-xs text-accent"
                          >
                            <span className="block pt-1">{LEVEL_LABEL[skill.level]}</span>
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </button>
                  );
                })}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

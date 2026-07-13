"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, GraduationCap, CalendarDays } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experience, education } from "@/data/portfolio";

interface TimelineItem {
  title: string;
  subtitle: string;
  period: string;
  points: string[];
}

const experienceItems: TimelineItem[] = experience.map((entry) => ({
  title: entry.role,
  subtitle: entry.company,
  period: entry.period,
  points: entry.achievements,
}));

const educationItems: TimelineItem[] = education.map((entry) => ({
  title: entry.degree,
  subtitle: entry.school,
  period: entry.period,
  points: [`GPA: ${entry.gpa}`],
}));

type Tab = "experience" | "education";

const tabs: { id: Tab; label: string; icon: typeof Briefcase; items: TimelineItem[] }[] = [
  { id: "experience", label: "Experience", icon: Briefcase, items: experienceItems },
  { id: "education", label: "Education", icon: GraduationCap, items: educationItems },
];

export default function Journey() {
  const [active, setActive] = useState<Tab>("experience");
  const activeTab = tabs.find((t) => t.id === active)!;

  return (
    <section id="journey" className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      <SectionHeading section="journey" />

      <div className="mb-12 flex items-center justify-center gap-3">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = tab.id === active;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all hover:scale-105 active:scale-95 ${
                isActive
                  ? "border-transparent bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/20"
                  : "border-surface-2 text-muted hover:border-primary/40 hover:text-ink"
              }`}
            >
              <Icon size={16} />
              {tab.label}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="border-l border-surface-2 pl-8 sm:pl-10"
        >
          {activeTab.items.map((item) => (
            <div key={item.title} className="relative mb-12 last:mb-0">
              <span className="absolute -left-[2.32rem] top-1.5 h-3 w-3 rounded-full border-2 border-bg bg-gradient-to-br from-primary to-accent shadow-[0_0_0_3px_rgba(14,165,233,0.15)] sm:-left-[2.65rem]" />

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-ink sm:text-xl">
                  {item.title} <span className="text-accent">@ {item.subtitle}</span>
                </h3>
              </div>
              <div className="mt-1 flex items-center gap-1.5 font-mono text-xs text-muted sm:text-sm">
                <CalendarDays size={13} />
                {item.period}
              </div>

              <ul className="mt-4 space-y-2.5">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-muted sm:text-base">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

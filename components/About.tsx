"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import { about, profile } from "@/data/portfolio";

export default function About() {
  const bentoPhoto = profile.bentoPhoto ?? profile.avatar;

  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <SectionHeading section="about" />

      <FadeIn>
        {/* Photo cell spans the full height of whatever the right column ends
            up being — the right column's own content (bio, stats, location)
            stacks in a plain flex-col, so it adapts to any number of
            highlights or any bio length without needing hand-placed grid
            coordinates. */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-[240px_1fr]">
          {/* Photo cell — "open to work" panel */}
          <div className="group relative overflow-hidden rounded-2xl border border-surface-2 bg-surface sm:row-span-3">
            <div className="relative h-64 w-full sm:h-full">
              <Image
                src={bentoPhoto}
                alt={`${profile.name} — open to work`}
                fill
                sizes="(min-width: 640px) 240px, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {profile.openToWork && (
              <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 bg-gradient-to-t from-black/80 to-transparent px-4 py-3">
                <span className="pulse-dot h-2 w-2" />
                <span className="text-xs font-medium text-white">Open to work</span>
              </div>
            )}
          </div>

          {/* Bio cell */}
          <div className="flex flex-col gap-1.5 rounded-2xl border border-surface-2 bg-surface p-6">
            <p className="font-mono text-xs text-accent/80">whoami</p>
            <h3 className="text-xl font-semibold text-ink sm:text-2xl">{profile.name}</h3>
            <p className="text-sm font-medium text-primary">{profile.role}</p>
            <p className="mt-1 flex-1 leading-relaxed text-muted">{about.summary}</p>
            <a
              href={profile.resumeUrl}
              download
              className="mt-3 inline-flex w-fit items-center gap-2 rounded-md border border-primary/40 px-4 py-2 text-sm text-primary transition-all hover:bg-primary/10 active:scale-95"
            >
              <Download size={14} />
              Download CV
            </a>
          </div>

          {/* Stat cells — flex-wrap so any number of highlights lays out cleanly */}
          <div className="flex flex-wrap gap-4">
            {about.highlights.map((highlight) => (
              <motion.div
                key={highlight.label}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.96 }}
                className="flex min-w-[7rem] flex-1 flex-col items-center justify-center gap-1 rounded-2xl border border-surface-2 bg-surface px-4 py-6 text-center shadow-none transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              >
                <motion.span whileHover={{ scale: 1.25, rotate: -8 }} className="text-2xl">
                  {highlight.icon}
                </motion.span>
                <p className="text-gradient font-mono text-2xl font-bold">{highlight.value}</p>
                <p className="text-xs text-muted">{highlight.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Location and current focus — separate cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-2 rounded-2xl border border-surface-2 bg-surface p-5 text-sm text-ink">
              <span className="text-base" aria-hidden>
                🧭
              </span>
              {profile.location}
            </div>
            <div className="rounded-2xl border border-surface-2 bg-surface p-5 text-sm text-muted">
              <span className="font-medium text-ink">Currently: </span>
              {about.currentFocus}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

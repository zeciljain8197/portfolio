"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "@/data/portfolio";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-12 px-6 pb-20 pt-36 sm:pt-44 md:flex-row md:justify-between md:pb-32"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-xl text-center md:text-left"
      >
        <motion.p variants={item} className="font-mono text-primary">
          Hi, my name is
        </motion.p>
        <motion.h1
          variants={item}
          className="mt-2 text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl"
        >
          {profile.name}
        </motion.h1>
        <motion.h2
          variants={item}
          className="text-gradient mt-1 text-2xl font-semibold sm:text-3xl lg:text-4xl"
        >
          {profile.role}
        </motion.h2>
        <motion.p variants={item} className="mt-5 text-base text-muted sm:text-lg">
          {profile.tagline}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-8 flex flex-col items-center gap-6 sm:flex-row sm:justify-center md:justify-start"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-bg transition-transform hover:scale-[1.03] hover:bg-primary/90"
          >
            View Projects
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>

          <div className="flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-muted transition-colors hover:text-accent"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted transition-colors hover:text-accent"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-muted transition-colors hover:text-accent"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative shrink-0"
      >
        <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-primary to-accent opacity-30 blur-2xl" />
        <div className="h-40 w-40 overflow-hidden rounded-full border-2 border-surface-2 sm:h-52 sm:w-52 md:h-64 md:w-64">
          <Image
            src={profile.avatar}
            alt={profile.name}
            width={256}
            height={256}
            priority
            className="h-full w-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}

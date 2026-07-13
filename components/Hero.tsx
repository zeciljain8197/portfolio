"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import RotatingText from "./RotatingText";
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

const socialLinks = [
  { href: (p: typeof profile) => p.github, label: "GitHub", Icon: GithubIcon },
  { href: (p: typeof profile) => p.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex min-h-screen max-w-5xl flex-col-reverse items-center justify-center gap-12 px-6 pt-20 md:flex-row md:justify-between"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-xl text-center md:text-left"
      >
        <motion.p variants={item} className="flex items-center justify-center gap-2 font-mono text-primary md:justify-start">
          <span className="wave-emoji text-xl">👋</span>
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
          className="mt-1 text-2xl font-semibold sm:text-3xl lg:text-4xl"
        >
          I&apos;m a{" "}
          <RotatingText words={profile.roles} className="text-gradient" />
        </motion.h2>
        <motion.p variants={item} className="mt-5 text-base text-muted sm:text-lg">
          {profile.tagline}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-8 flex flex-col items-center gap-6 sm:flex-row sm:justify-center md:justify-start"
        >
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.03] hover:bg-primary/90"
            >
              <span aria-hidden>🤝</span>
              Let&apos;s Connect
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-md border border-primary/40 px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
            >
              <span aria-hidden>📄</span>
              Download CV
            </a>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ href, label, Icon }) => (
              <motion.a
                key={label}
                href={href(profile)}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.2, rotate: -6 }}
                whileTap={{ scale: 0.95 }}
                className="text-muted transition-colors hover:text-accent"
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
            <motion.a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              whileHover={{ scale: 1.2, rotate: -6 }}
              whileTap={{ scale: 0.95 }}
              className="text-muted transition-colors hover:text-accent"
            >
              <Mail className="h-5 w-5" />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
        transition={{
          opacity: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
          scale: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.7 },
        }}
        className="relative shrink-0"
      >
        <div className="absolute inset-0 -z-10 animate-pulse rounded-full bg-gradient-to-br from-primary to-accent opacity-30 blur-2xl" />
        <div className="h-40 w-40 overflow-hidden rounded-full border-2 border-surface-2 shadow-xl shadow-primary/10 sm:h-52 sm:w-52 md:h-64 md:w-64">
          <Image
            src={profile.avatar}
            alt={profile.name}
            width={256}
            height={256}
            priority
            className="h-full w-full object-cover object-top"
          />
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";

const letterContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.035, delayChildren: 0.35 },
  },
};

const letter = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Loader() {
  const nameChars = profile.name.split("");

  return (
    <motion.div
      key="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-bg"
    >
      <div className="flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 font-mono text-sm text-accent"
        >
          <span className="wave-emoji text-lg">👋</span>
          Hey, I&apos;m
        </motion.p>

        <motion.h1
          variants={letterContainer}
          initial="hidden"
          animate="show"
          className="mt-2 flex flex-wrap justify-center font-mono text-3xl font-semibold text-ink sm:text-5xl"
        >
          {nameChars.map((char, i) => (
            <motion.span key={`${char}-${i}`} variants={letter}>
              {char === " " ? " " : char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.05 }}
          className="mt-4 text-sm text-muted sm:text-base"
        >
          {profile.role} · {profile.location}
        </motion.p>

        <motion.span
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
          className="mt-6 h-px w-40 origin-center bg-gradient-to-r from-primary via-accent to-primary sm:w-56"
        />
      </div>
    </motion.div>
  );
}

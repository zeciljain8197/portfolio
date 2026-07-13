"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

// The bar phase starts once the name has finished revealing, then fills with
// an ease-in curve (slow start, fast finish) while the role word beside it
// cycles on a matching schedule — gaps between word changes shrink the same
// way the bar's fill rate visually accelerates.
const BAR_PHASE_DELAY = 1050;
const BAR_DURATION = 1900;
const words = profile.roles;

function useAcceleratingWordCycle(active: boolean) {
  const [index, setIndex] = useState(0);
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    if (!active) return;
    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];

    for (let i = 1; i < words.length; i++) {
      const t = BAR_DURATION * Math.sqrt(i / words.length);
      timeouts.current.push(setTimeout(() => setIndex(i), t));
    }

    return () => {
      timeouts.current.forEach(clearTimeout);
    };
  }, [active]);

  return words[index];
}

export default function Loader() {
  const nameChars = profile.name.split("");
  const currentWord = useAcceleratingWordCycle(true);

  return (
    <motion.div
      key="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-bg"
    >
      <div className="flex w-full max-w-xs flex-col items-center text-center sm:max-w-sm">
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

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: BAR_PHASE_DELAY / 1000 }}
          className="mt-6 flex w-full flex-col items-center gap-3"
        >
          <div className="relative h-6 w-full overflow-hidden text-lg font-semibold text-ink sm:text-xl">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={currentWord}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="absolute inset-0"
              >
                {currentWord}
              </motion.span>
            </AnimatePresence>
          </div>

          <div className="h-1 w-full overflow-hidden rounded-full bg-surface-2">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: BAR_DURATION / 1000,
                delay: BAR_PHASE_DELAY / 1000,
                ease: "easeIn",
              }}
              className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

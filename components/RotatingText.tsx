"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface RotatingTextProps {
  words: string[];
  className?: string;
  intervalMs?: number;
}

export default function RotatingText({ words, className, intervalMs = 2200 }: RotatingTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (words.length < 2) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [words, intervalMs]);

  const longest = words.reduce((a, w) => (w.length > a.length ? w : a), "");

  return (
    <span className="relative inline-block align-bottom">
      {/* Reserves width/height in normal flow so layout never shifts between words. */}
      <span className="invisible" aria-hidden>
        {longest}
      </span>
      {/* Both entering and exiting words are always absolutely positioned in
          the same box — never a mix of flow and absolute — so the crossfade
          never jumps or shows one word stacked visibly under the other.
          `className` (e.g. text-gradient, which relies on background-clip:text
          + color:transparent) is applied directly on this span rather than the
          wrapper above — color is inherited, but a background-clip effect is
          not, so putting it on the wrapper left the actual text invisible. */}
      <AnimatePresence>
        <motion.span
          key={words[index]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className={`absolute inset-0 ${className ?? ""}`}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

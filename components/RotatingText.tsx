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

  return (
    <span className={`relative inline-grid ${className ?? ""}`}>
      <AnimatePresence>
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14, position: "absolute" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="col-start-1 row-start-1"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
      {/* Reserves width so layout doesn't jump between words. */}
      <span className="invisible col-start-1 row-start-1" aria-hidden>
        {words.reduce((longest, w) => (w.length > longest.length ? w : longest), "")}
      </span>
    </span>
  );
}

"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";

export default function Loader() {
  return (
    <motion.div
      key="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-bg"
    >
      <div className="flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="font-mono text-sm text-accent"
        >
          &lt;portfolio&gt;
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-2 font-mono text-3xl font-semibold text-ink sm:text-5xl"
        >
          &lt;{profile.name}&nbsp;/&gt;
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-4 text-sm text-muted sm:text-base"
        >
          {profile.role} · {profile.location}
        </motion.p>

        <motion.span
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.15, ease: "easeOut" }}
          className="mt-6 h-px w-40 origin-center bg-gradient-to-r from-primary via-accent to-primary sm:w-56"
        />
      </div>
    </motion.div>
  );
}

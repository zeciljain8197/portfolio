"use client";

import Image from "next/image";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile, navLinks } from "@/data/portfolio";
import { useTheme } from "@/contexts/ThemeContext";

export default function Footer() {
  const year = new Date().getFullYear();
  const { theme } = useTheme();

  return (
    <footer className="border-t border-surface-2">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-10">
        <Image
          src={theme === "dark" ? "/logo_dark.png" : "/logo_light.png"}
          alt={profile.name}
          width={28}
          height={28}
          className="h-7 w-7 opacity-90"
        />

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted transition-transform duration-200 hover:scale-125 hover:-rotate-6 hover:text-accent"
          >
            <GithubIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-transform duration-200 hover:scale-125 hover:-rotate-6 hover:text-accent"
          >
            <LinkedinIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-muted transition-transform duration-200 hover:scale-125 hover:-rotate-6 hover:text-accent"
          >
            <Mail size={18} />
          </a>
        </div>

        <div className="w-full border-t border-surface-2 pt-6 text-center text-sm text-muted">
          <p className="font-mono">
            &copy; {year} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

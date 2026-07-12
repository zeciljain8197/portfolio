import FadeIn from "./FadeIn";
import { sectionIntros } from "@/data/portfolio";

interface SectionHeadingProps {
  section: keyof typeof sectionIntros;
}

export default function SectionHeading({ section }: SectionHeadingProps) {
  const { kicker, title, subtitle } = sectionIntros[section];

  return (
    <FadeIn className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
      <p className="font-mono text-xs font-medium uppercase tracking-[0.3em] text-accent">
        {kicker}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</h2>
      <p className="mt-3 text-sm text-muted sm:text-base">{subtitle}</p>
      <span className="mx-auto mt-6 block h-1 w-16 rounded-full bg-gradient-to-r from-primary to-accent" />
    </FadeIn>
  );
}

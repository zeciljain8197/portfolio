import FadeIn from "./FadeIn";

interface SectionHeadingProps {
  index: string;
  title: string;
}

export default function SectionHeading({ index, title }: SectionHeadingProps) {
  return (
    <FadeIn className="mb-10 flex items-center gap-4 sm:mb-14">
      <span className="font-mono text-sm text-accent">{index}</span>
      <h2 className="text-2xl font-semibold text-ink sm:text-3xl">{title}</h2>
      <span className="h-px flex-1 bg-surface-2" />
    </FadeIn>
  );
}

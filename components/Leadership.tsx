import Image from "next/image";
import { ImageIcon } from "lucide-react";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import { leadership } from "@/data/portfolio";

export default function Leadership() {
  return (
    <section id="leadership" className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <SectionHeading section="leadership" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {leadership.map((entry, i) => (
          <FadeIn key={entry.title} delay={i * 0.08}>
            <article className="group overflow-hidden rounded-2xl border border-surface-2 bg-surface transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
              <div className="relative h-48 w-full overflow-hidden bg-surface-2">
                {entry.images[0] ? (
                  <Image
                    src={entry.images[0]}
                    alt={entry.title}
                    fill
                    sizes="(min-width: 768px) 480px, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted">
                    <ImageIcon size={28} />
                    <span className="text-xs">Add a photo</span>
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-5 py-3">
                  <span className="font-mono text-xs text-white/80">{entry.period}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-ink">{entry.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                  {entry.description}
                </p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

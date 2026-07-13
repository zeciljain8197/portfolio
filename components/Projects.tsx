import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import { projects } from "@/data/portfolio";

const COVER_GRADIENTS = [
  "from-primary to-accent",
  "from-accent to-primary",
  "from-primary via-accent to-primary",
  "from-accent via-primary to-accent",
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <SectionHeading section="projects" />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project, i) => (
          <FadeIn key={project.title} delay={i * 0.1}>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-surface-2 bg-surface transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 active:scale-[0.98]">
              {/* Placeholder cover art — swap for a real screenshot by adding an <Image> here */}
              <div
                className={`relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br ${
                  COVER_GRADIENTS[i % COVER_GRADIENTS.length]
                }`}
              >
                <span className="font-mono text-5xl font-bold text-white/25 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  {project.monogram}
                </span>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_55%)]" />
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/50 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    title={project.liveUrl === "#" ? "Add live demo link" : "Live demo"}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-4 py-2 text-xs font-medium text-slate-900 transition-transform hover:scale-105 active:scale-95"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    title={project.githubUrl === "#" ? "Add GitHub link" : "GitHub repository"}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/40 px-4 py-2 text-xs font-medium text-white transition-transform hover:scale-105 hover:bg-white/10 active:scale-95"
                  >
                    <GithubIcon className="h-[14px] w-[14px]" />
                    Code
                  </a>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-ink transition-colors group-hover:text-primary sm:text-xl">
                  {project.title}
                </h3>

                <p className="mt-1 font-mono text-xs text-muted">{project.period}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted sm:text-base">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-surface-2 bg-surface-2/60 px-3 py-1 text-xs text-muted transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:text-ink"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

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
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-surface-2 bg-surface transition-all hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10">
              {/* Placeholder cover art — swap for a real screenshot by adding an <Image> here */}
              <div
                className={`relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br ${
                  COVER_GRADIENTS[i % COVER_GRADIENTS.length]
                }`}
              >
                <span className="font-mono text-5xl font-bold text-white/25 transition-transform duration-500 group-hover:scale-110">
                  {project.monogram}
                </span>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_55%)]" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-ink transition-colors group-hover:text-primary sm:text-xl">
                    {project.title}
                  </h3>
                  <div className="flex shrink-0 items-center gap-3 text-muted">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Live demo"
                      title={project.liveUrl === "#" ? "Add live demo link" : "Live demo"}
                      className="transition-colors hover:text-accent"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub repository"
                      title={project.githubUrl === "#" ? "Add GitHub link" : "GitHub repository"}
                      className="transition-colors hover:text-accent"
                    >
                      <GithubIcon className="h-[18px] w-[18px]" />
                    </a>
                  </div>
                </div>

                <p className="mt-1 font-mono text-xs text-muted">{project.period}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted sm:text-base">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-surface-2 bg-surface-2/60 px-3 py-1 text-xs text-muted"
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

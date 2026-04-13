"use client";

import { profile } from "@/lib/portfolio-data";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem, ScaleOnHover } from "./animations";
import { FiArrowRight, FiGithub, FiExternalLink } from "react-icons/fi";

export function ProjectsPreview() {
  const featured = profile.projects.slice(0, 2);
  return (
    <FadeIn>
      <section>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-linear-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white text-lg font-bold">P</div>
            <h2 className="text-2xl font-bold text-(--text-primary)">Featured Projects</h2>
          </div>
          <Link href="/projects" className="inline-flex items-center gap-1 text-(--color-primary-light) hover:text-(--color-accent) font-medium text-sm transition-colors">
            View all <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <StaggerContainer className="grid md:grid-cols-2 gap-6">
          {featured.map((project) => (
            <StaggerItem key={project.slug}>
              <ScaleOnHover>
                <div className="glass-card rounded-2xl p-6 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-(--text-primary)">{project.title}</h3>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-(--text-muted) hover:text-(--color-primary-light) transition-colors" aria-label="GitHub">
                      <FiGithub className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-(--text-secondary) text-sm font-light mb-4 line-clamp-2 flex-1">{project.summary}</p>
                  <div className="flex gap-2 flex-wrap text-xs mb-4">
                    {project.tools.map((tool) => (
                      <span key={tool} className="px-2.5 py-0.5 rounded-full bg-(--bg-secondary) border border-(--border-color) text-(--text-secondary) font-medium">{tool}</span>
                    ))}
                  </div>
                  <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-1 text-(--color-primary-light) hover:text-(--color-accent) font-medium text-sm transition-colors">
                    View case study <FiExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </ScaleOnHover>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </FadeIn>
  );
}

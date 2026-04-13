"use client";

import { profile } from "@/lib/portfolio-data";
import Link from "next/link";
import { PageTransition, StaggerContainer, StaggerItem, ScaleOnHover } from "../components/animations";
import { SectionHeading } from "../components/SectionHeading";
import { FiGithub, FiExternalLink, FiFolder } from "react-icons/fi";

export default function ProjectsPage() {
  return (
    <PageTransition className="section-padding">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeading subtitle="Real-world AI and Machine Learning projects built to solve meaningful problems">
          Projects
        </SectionHeading>

        <StaggerContainer className="grid md:grid-cols-2 gap-8">
          {profile.projects.map((project, i) => (
            <StaggerItem key={project.slug}>
              <ScaleOnHover className="h-full">
                <div className="glass-card rounded-2xl p-6 md:p-8 h-full flex flex-col group">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-violet-600/20 to-cyan-500/20 flex items-center justify-center text-(--color-primary-light)">
                      <FiFolder className="w-6 h-6" />
                    </div>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-(--text-muted) hover:text-(--color-primary-light) hover:bg-(--bg-secondary) transition-all" aria-label="GitHub">
                      <FiGithub className="w-5 h-5" />
                    </a>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-(--text-primary) mb-2 group-hover:text-(--color-primary-light) transition-colors">{project.title}</h2>

                  {/* Summary */}
                  <p className="text-(--text-secondary) text-sm font-light mb-4 flex-1 leading-relaxed">{project.summary}</p>

                  {/* Tools */}
                  <div className="flex gap-2 flex-wrap mb-4">
                    {project.tools.map((tool) => (
                      <span key={tool} className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-(--bg-secondary) border border-(--border-color) text-(--text-secondary)">{tool}</span>
                    ))}
                  </div>

                  {/* Link */}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 text-(--color-primary-light) hover:text-(--color-accent) font-medium text-sm transition-colors mt-auto"
                  >
                    View case study <FiExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </ScaleOnHover>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </PageTransition>
  );
}

"use client";

import Link from "next/link";
import { PageTransition, FadeIn, FadeInLeft, FadeInRight, AnimatedBadge } from "./animations";
import { FiGithub, FiArrowLeft, FiTarget, FiLayers, FiCheckCircle, FiBookOpen, FiTool } from "react-icons/fi";

interface ProjectDetailProps {
  project: {
    title: string;
    summary: string;
    problem: string;
    solution: string;
    features: string[];
    tools: string[];
    github: string;
    learnings: string;
  };
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <PageTransition className="section-padding">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back link */}
        <FadeIn>
          <Link href="/projects" className="inline-flex items-center gap-2 text-(--text-muted) hover:text-(--color-primary-light) text-sm mb-8 transition-colors">
            <FiArrowLeft className="w-4 h-4" /> Back to projects
          </Link>
        </FadeIn>

        {/* Title */}
        <FadeIn>
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold gradient-text mb-4">{project.title}</h1>
            <p className="text-(--text-secondary) text-lg font-light max-w-2xl">{project.summary}</p>
            <div className="mt-4 w-24 h-1 rounded-full bg-linear-to-r from-(--color-primary) via-(--color-accent) to-(--color-emerald)" />
          </div>
        </FadeIn>

        <div className="grid gap-8">
          {/* Problem */}
          <FadeInLeft>
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-linear-to-br from-rose-500 to-orange-400 flex items-center justify-center text-white">
                  <FiTarget className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-(--text-primary)">The Problem</h2>
              </div>
              <p className="text-(--text-secondary) font-light leading-relaxed">{project.problem}</p>
            </div>
          </FadeInLeft>

          {/* Solution */}
          <FadeInRight>
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-linear-to-br from-violet-600 to-purple-500 flex items-center justify-center text-white">
                  <FiLayers className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-(--text-primary)">The Solution</h2>
              </div>
              <p className="text-(--text-secondary) font-light leading-relaxed">{project.solution}</p>
            </div>
          </FadeInRight>

          {/* Features */}
          <FadeIn>
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-linear-to-br from-emerald-500 to-teal-400 flex items-center justify-center text-white">
                  <FiCheckCircle className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-(--text-primary)">Key Features</h2>
              </div>
              <ul className="space-y-3">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-linear-to-r from-violet-500 to-cyan-500 shrink-0" />
                    <span className="text-(--text-secondary) font-light">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Technologies */}
          <FadeIn>
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-linear-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white">
                  <FiTool className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-(--text-primary)">Technologies Used</h2>
              </div>
              <div className="flex gap-3 flex-wrap">
                {project.tools.map((tool) => (
                  <AnimatedBadge key={tool} className="px-4 py-1.5 rounded-full text-sm font-medium border border-(--border-color) bg-(--bg-secondary) text-(--text-primary)">
                    {tool}
                  </AnimatedBadge>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Learnings */}
          <FadeIn>
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-linear-to-br from-amber-500 to-orange-400 flex items-center justify-center text-white">
                  <FiBookOpen className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-(--text-primary)">What I Learned</h2>
              </div>
              <p className="text-(--text-secondary) font-light leading-relaxed">{project.learnings}</p>
            </div>
          </FadeIn>

          {/* GitHub CTA */}
          <FadeIn>
            <div className="text-center pt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-linear-to-r from-violet-600 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <FiGithub className="w-5 h-5" /> View on GitHub
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </PageTransition>
  );
}

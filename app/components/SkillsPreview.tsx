"use client";

import { profile } from "@/lib/portfolio-data";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "./animations";
import { FiArrowRight, FiCode, FiDatabase, FiBarChart2, FiCpu } from "react-icons/fi";

const categoryIcons: Record<string, React.ReactNode> = {
  Programming: <FiCode className="w-5 h-5" />,
  "Data Analysis": <FiDatabase className="w-5 h-5" />,
  Visualization: <FiBarChart2 className="w-5 h-5" />,
  "Machine Learning": <FiCpu className="w-5 h-5" />,
};

export function SkillsPreview() {
  return (
    <FadeIn>
      <section>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-linear-to-br from-emerald-500 to-teal-400 flex items-center justify-center text-white text-lg font-bold">S</div>
            <h2 className="text-2xl font-bold text-(--text-primary)">Skills</h2>
          </div>
          <Link href="/skills" className="inline-flex items-center gap-1 text-(--color-primary-light) hover:text-(--color-accent) font-medium text-sm transition-colors">
            See all <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {profile.skills.map((group) => (
            <StaggerItem key={group.category}>
              <div className="glass-card rounded-xl p-5 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-linear-to-br from-violet-600/20 to-cyan-500/20 text-(--color-primary-light) mb-3">
                  {categoryIcons[group.category] || <FiCode className="w-5 h-5" />}
                </div>
                <h3 className="font-semibold text-(--text-primary) text-sm mb-2">{group.category}</h3>
                <div className="flex gap-1.5 flex-wrap justify-center">
                  {group.items.map((item) => (
                    <span key={item} className="px-2 py-0.5 rounded-full text-xs font-medium bg-(--bg-secondary) border border-(--border-color) text-(--text-secondary)">{item}</span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </FadeIn>
  );
}

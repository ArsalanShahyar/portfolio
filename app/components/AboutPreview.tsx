"use client";

import { profile } from "@/lib/portfolio-data";
import Link from "next/link";
import { FadeIn } from "./animations";
import { FiArrowRight } from "react-icons/fi";

export function AboutPreview() {
  return (
    <FadeIn>
      <section className="glass-card rounded-2xl p-8 md:p-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-linear-to-br from-violet-600 to-violet-400 flex items-center justify-center text-white text-lg font-bold">A</div>
          <h2 className="text-2xl font-bold text-(--text-primary)">About Me</h2>
        </div>
        <p className="text-(--text-secondary) text-base font-light leading-relaxed mb-6 line-clamp-4">
          {profile.about.bio}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {profile.about.strengths.slice(0, 3).map((s) => (
            <span key={s} className="px-3 py-1 rounded-full text-xs font-medium border border-(--border-color) text-(--text-secondary) bg-(--bg-secondary)">
              {s}
            </span>
          ))}
        </div>
        <Link href="/about" className="inline-flex items-center gap-2 text-(--color-primary-light) hover:text-(--color-accent) font-medium text-sm transition-colors">
          Read my full story <FiArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </FadeIn>
  );
}

"use client";

import { profile } from "@/lib/portfolio-data";
import Link from "next/link";
import { FadeIn } from "./animations";
import { FiArrowRight, FiBookOpen } from "react-icons/fi";

export function EducationPreview() {
  return (
    <FadeIn>
      <section className="glass-card rounded-2xl p-8 md:p-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-linear-to-br from-amber-500 to-orange-400 flex items-center justify-center text-white">
            <FiBookOpen className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-bold text-(--text-primary)">Education</h2>
        </div>
        <div className="mb-2">
          <h3 className="text-lg font-semibold text-(--text-primary)">{profile.education.degree}</h3>
          <p className="text-(--text-secondary) text-sm">{profile.education.institution}</p>
        </div>
        <p className="text-(--text-muted) text-sm font-light mb-4">{profile.education.details}</p>
        <Link href="/education" className="inline-flex items-center gap-2 text-(--color-primary-light) hover:text-(--color-accent) font-medium text-sm transition-colors">
          Learn more <FiArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </FadeIn>
  );
}

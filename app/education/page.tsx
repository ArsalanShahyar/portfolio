"use client";

import { profile } from "@/lib/portfolio-data";
import { PageTransition, FadeIn, FadeInLeft, FadeInRight } from "../components/animations";
import { SectionHeading } from "../components/SectionHeading";
import { FiBookOpen, FiAward, FiTrendingUp, FiTarget } from "react-icons/fi";

export default function EducationPage() {
  return (
    <PageTransition className="section-padding">
      <div className="max-w-4xl mx-auto px-4">
        <SectionHeading subtitle="My academic foundation and commitment to continuous growth">
          Education
        </SectionHeading>

        {/* Degree */}
        <FadeIn>
          <div className="glass-card rounded-2xl p-8 md:p-10 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-linear-to-br from-amber-500 to-orange-400 flex items-center justify-center text-white shrink-0">
                <FiAward className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-(--text-primary) mb-1">{profile.education.degree}</h2>
                <p className="text-(--text-secondary) text-lg mb-3">{profile.education.institution}</p>
                <p className="text-(--text-muted) text-base font-light leading-relaxed">{profile.education.details}</p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Approach to Learning */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <FadeInLeft>
            <div className="glass-card rounded-2xl p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-linear-to-br from-violet-600 to-purple-500 flex items-center justify-center text-white">
                  <FiBookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-(--text-primary)">Continuous Learning</h3>
              </div>
              <p className="text-(--text-secondary) text-sm font-light leading-relaxed">
                I dedicate time every day to learning new concepts, reading research papers, and keeping up with the latest developments in AI and Machine Learning.
              </p>
            </div>
          </FadeInLeft>

          <FadeInRight>
            <div className="glass-card rounded-2xl p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-linear-to-br from-emerald-500 to-teal-400 flex items-center justify-center text-white">
                  <FiTrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-(--text-primary)">Hands-On Practice</h3>
              </div>
              <p className="text-(--text-secondary) text-sm font-light leading-relaxed">
                Theory alone is not enough. I believe in building real projects, experimenting with data, and solving practical problems to deepen understanding and build portfolio-worthy work.
              </p>
            </div>
          </FadeInRight>
        </div>

        {/* Self-improvement */}
        <FadeIn>
          <div className="glass-card rounded-2xl p-8 md:p-10 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-linear-to-br from-cyan-500/20 to-violet-500/20 text-(--color-primary-light) mb-4">
              <FiTarget className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold text-(--text-primary) mb-3">Self-Improvement Philosophy</h2>
            <p className="text-(--text-secondary) text-base font-light max-w-2xl mx-auto">
              I approach my career with a growth mindset. Every project, every challenge, and every setback is an opportunity to learn, adapt, and become a better developer.
            </p>
          </div>
        </FadeIn>
      </div>
    </PageTransition>
  );
}

"use client";

import { profile } from "@/lib/portfolio-data";
import { PageTransition, FadeIn, FadeInLeft, FadeInRight, AnimatedBadge } from "../components/animations";
import { SectionHeading } from "../components/SectionHeading";
import { FiTarget, FiUsers, FiTrendingUp, FiHeart, FiGlobe, FiZap } from "react-icons/fi";

const strengthIcons: Record<string, React.ReactNode> = {
  Adaptability: <FiZap className="w-5 h-5" />,
  "Remote collaboration": <FiGlobe className="w-5 h-5" />,
  "Problem-solving": <FiTarget className="w-5 h-5" />,
  "Growth mindset": <FiTrendingUp className="w-5 h-5" />,
  "Cross-cultural communication": <FiUsers className="w-5 h-5" />,
};

export default function AboutPage() {
  return (
    <PageTransition className="section-padding">
      <div className="max-w-4xl mx-auto px-4">
        <SectionHeading subtitle="A deeper look at who I am and what drives me">
          About Me
        </SectionHeading>

        {/* Bio */}
        <FadeIn>
          <div className="glass-card rounded-2xl p-8 md:p-10 mb-10">
            <p className="text-(--text-secondary) text-lg leading-relaxed font-light">
              {profile.about.bio}
            </p>
          </div>
        </FadeIn>

        {/* Mission */}
        <FadeInLeft>
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-violet-600 to-purple-500 flex items-center justify-center text-white">
                <FiHeart className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-(--text-primary)">My Mission</h2>
            </div>
            <p className="text-(--text-secondary) text-base font-light leading-relaxed pl-13">
              {profile.about.mission}
            </p>
          </div>
        </FadeInLeft>

        {/* Strengths */}
        <FadeInRight>
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-emerald-500 to-teal-400 flex items-center justify-center text-white">
                <FiTrendingUp className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-(--text-primary)">Core Strengths</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {profile.about.strengths.map((s) => (
                <div key={s} className="glass-card rounded-xl p-5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-linear-to-br from-violet-600/20 to-cyan-500/20 flex items-center justify-center text-(--color-primary-light) shrink-0">
                    {strengthIcons[s] || <FiZap className="w-5 h-5" />}
                  </div>
                  <span className="font-medium text-(--text-primary) text-sm">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeInRight>

        {/* Growth mindset */}
        <FadeIn>
          <div className="glass-card rounded-2xl p-8 md:p-10 text-center">
            <h2 className="text-2xl font-bold text-(--text-primary) mb-3">Growth Mindset</h2>
            <p className="text-(--text-secondary) text-base font-light max-w-2xl mx-auto">
              Driven by curiosity and a commitment to continuous learning, I strive to improve my skills and contribute to impactful projects in AI and Machine Learning. Every challenge is an opportunity to grow.
            </p>
          </div>
        </FadeIn>

        {/* Focus Areas */}
        <FadeIn>
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-(--text-primary) mb-6 text-center">What I Focus On</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {profile.about.focusAreas.map((area) => (
                <AnimatedBadge
                  key={area}
                  className="inline-block px-5 py-2 rounded-full text-sm font-semibold border border-(--border-color) bg-(--bg-card) text-(--text-primary) cursor-default"
                >
                  {area}
                </AnimatedBadge>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </PageTransition>
  );
}

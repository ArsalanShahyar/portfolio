"use client";

import { profile } from "@/lib/portfolio-data";
import { PageTransition, StaggerContainer, StaggerItem, FadeIn } from "../components/animations";
import { SectionHeading } from "../components/SectionHeading";
import { FiCode, FiDatabase, FiBarChart2, FiCpu } from "react-icons/fi";
import { SiPython, SiPandas, SiNumpy, SiScikitlearn, SiPytorch } from "react-icons/si";
import { TbChartBar } from "react-icons/tb";

const categoryIcons: Record<string, React.ReactNode> = {
  Programming: <FiCode className="w-6 h-6" />,
  "Data Analysis": <FiDatabase className="w-6 h-6" />,
  Visualization: <FiBarChart2 className="w-6 h-6" />,
  "Machine Learning": <FiCpu className="w-6 h-6" />,
};

const categoryColors: Record<string, string> = {
  Programming: "from-violet-600 to-purple-500",
  "Data Analysis": "from-cyan-500 to-blue-500",
  Visualization: "from-emerald-500 to-teal-400",
  "Machine Learning": "from-amber-500 to-orange-400",
};

const skillIcons: Record<string, React.ReactNode> = {
  Python: <SiPython className="w-8 h-8" />,
  Pandas: <SiPandas className="w-8 h-8" />,
  NumPy: <SiNumpy className="w-8 h-8" />,
  Matplotlib: <TbChartBar className="w-8 h-8" />,
  "Scikit-learn": <SiScikitlearn className="w-8 h-8" />,
  PyTorch: <SiPytorch className="w-8 h-8" />,
};

export default function SkillsPage() {
  return (
    <PageTransition className="section-padding">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeading subtitle="The tools and technologies I use to build intelligent solutions">
          Skills &amp; Technologies
        </SectionHeading>

        <StaggerContainer className="grid md:grid-cols-2 gap-8">
          {profile.skills.map((group) => (
            <StaggerItem key={group.category}>
              <div className="glass-card rounded-2xl p-6 md:p-8 h-full">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${categoryColors[group.category] || "from-gray-500 to-gray-400"} flex items-center justify-center text-white`}>
                    {categoryIcons[group.category]}
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-(--text-primary)">{group.category}</h2>
                    <p className="text-xs text-(--text-muted)">{group.description}</p>
                  </div>
                </div>

                {/* Individual skills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {group.items.map((item) => (
                    <div key={item} className="flex items-center gap-3 p-3 rounded-xl bg-(--bg-secondary) border border-(--border-color) hover:border-(--color-primary) transition-all duration-300 group">
                      <div className="w-12 h-12 rounded-lg bg-linear-to-br from-violet-600/10 to-cyan-500/10 flex items-center justify-center text-(--color-primary-light) group-hover:scale-110 transition-transform duration-300">
                        {skillIcons[item] || <FiCode className="w-6 h-6" />}
                      </div>
                      <span className="font-medium text-(--text-primary) text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Why these skills */}
        <FadeIn>
          <div className="mt-12 glass-card rounded-2xl p-8 md:p-10 text-center">
            <h2 className="text-2xl font-bold text-(--text-primary) mb-3">Why These Technologies?</h2>
            <p className="text-(--text-secondary) text-base font-light max-w-2xl mx-auto">
              Each tool in my stack is chosen with purpose. From Python&apos;s versatility to PyTorch&apos;s deep learning capabilities, I focus on technologies that enable me to build robust, scalable AI solutions.
            </p>
          </div>
        </FadeIn>
      </div>
    </PageTransition>
  );
}

"use client";

import { profile } from "@/lib/portfolio-data";
import { FadeIn, AnimatedBadge } from "./animations";
import { FiTarget } from "react-icons/fi";

const areaColors = [
  "from-violet-600 to-purple-500",
  "from-cyan-500 to-blue-500",
  "from-emerald-500 to-teal-400",
  "from-amber-500 to-orange-400",
  "from-rose-500 to-pink-500",
  "from-indigo-500 to-violet-400",
];

export function FocusAreasPreview() {
  return (
    <FadeIn>
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-linear-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white">
            <FiTarget className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-bold text-(--text-primary)">Focus Areas</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {profile.about.focusAreas.map((area, i) => (
            <AnimatedBadge
              key={area}
              className={`inline-block px-5 py-2 rounded-full text-sm font-semibold text-white bg-linear-to-r ${areaColors[i % areaColors.length]} shadow-lg cursor-default`}
            >
              {area}
            </AnimatedBadge>
          ))}
        </div>
      </section>
    </FadeIn>
  );
}

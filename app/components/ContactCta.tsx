"use client";

import { profile } from "@/lib/portfolio-data";
import Link from "next/link";
import { FadeIn } from "./animations";
import { FiArrowRight, FiGithub, FiMail } from "react-icons/fi";

export function ContactCta() {
  return (
    <FadeIn>
      <section className="relative rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-violet-600/10 via-cyan-500/10 to-emerald-500/10" />
        <div className="absolute inset-0 border border-(--border-color) rounded-2xl" />
        <div className="relative p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-(--text-primary) mb-3">Ready to Collaborate?</h2>
          <p className="text-(--text-secondary) text-base font-light mb-8 max-w-xl mx-auto">
            {profile.contact.message}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-linear-to-r from-violet-600 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <FiMail className="w-4 h-4" /> Get in Touch <FiArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-(--border-color) text-(--text-primary) font-semibold hover:border-(--color-primary) hover:bg-(--bg-card) transition-all duration-300"
            >
              <FiGithub className="w-4 h-4" /> View GitHub
            </a>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}

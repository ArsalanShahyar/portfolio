"use client";

import { profile } from "@/lib/portfolio-data";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiGithub } from "react-icons/fi";

export function HeroSection() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-violet-600/10 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-emerald-500/5 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-(--border-color) bg-(--bg-card) text-sm text-(--text-secondary) mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to opportunities
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            <span className="block text-(--text-primary)">Hi, I&apos;m</span>
            <span className="gradient-text">{profile.name}</span>
          </h1>

          <p className="text-xl md:text-2xl font-medium text-(--color-primary-light) mb-4">
            {profile.title}
          </p>

          <p className="text-base md:text-lg text-(--text-secondary) font-light max-w-xl mb-8 mx-auto lg:mx-0">
            {profile.shortIntro}
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-linear-to-r from-violet-600 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-violet-400"
            >
              View My Work <FiArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-(--border-color) text-(--text-primary) font-semibold hover:border-(--color-primary) hover:bg-(--bg-card) transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-violet-400"
            >
              Let&apos;s Connect
            </Link>
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-(--border-color) text-(--text-secondary) hover:text-(--text-primary) hover:border-(--color-primary) transition-all duration-300"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="relative shrink-0"
        >
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-linear-to-br from-violet-600 via-cyan-500 to-emerald-400 p-1 animate-pulse-glow">
              <div className="w-full h-full rounded-full bg-(--bg-primary) p-1">
                {imgError ? (
                  <div className="w-full h-full rounded-full bg-linear-to-br from-violet-600/20 to-cyan-500/20 flex items-center justify-center">
                    <span className="text-5xl sm:text-6xl lg:text-7xl font-bold gradient-text select-none">AS</span>
                  </div>
                ) : (
                  <Image
                    src="/arsalan.jpg"
                    alt="Arsalan Shahyar"
                    width={320}
                    height={320}
                    className="w-full h-full rounded-full object-cover"
                    priority
                    onError={() => setImgError(true)}
                  />
                )}
              </div>
            </div>
            {/* Decorative floating dots */}
            <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-violet-500/20 animate-float" />
            <div className="absolute -bottom-2 -left-6 w-6 h-6 rounded-full bg-cyan-500/20 animate-float" style={{ animationDelay: "1s" }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

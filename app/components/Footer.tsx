import Link from "next/link";
import { profile } from "@/lib/portfolio-data";
import { Logo } from "./Logo";
import { FiGithub, FiMail, FiHeart } from "react-icons/fi";

export function Footer() {
  return (
    <footer className="w-full border-t border-(--border-color) bg-(--bg-secondary) py-10 mt-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Logo className="w-8 h-8" />
            <div>
              <div className="font-bold gradient-text text-sm">{profile.name}</div>
              <div className="text-xs text-(--text-muted)">{profile.title}</div>
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm text-(--text-secondary)">
            <Link href="/about" className="hover:text-(--color-primary-light) transition-colors">About</Link>
            <Link href="/projects" className="hover:text-(--color-primary-light) transition-colors">Projects</Link>
            <Link href="/skills" className="hover:text-(--color-primary-light) transition-colors">Skills</Link>
            <Link href="/contact" className="hover:text-(--color-primary-light) transition-colors">Contact</Link>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a href={profile.contact.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg border border-(--border-color) text-(--text-secondary) hover:text-(--color-primary-light) hover:border-(--color-primary) transition-all" aria-label="GitHub">
              <FiGithub className="w-4 h-4" />
            </a>
            <a href={`mailto:${profile.contact.email}`} className="p-2 rounded-lg border border-(--border-color) text-(--text-secondary) hover:text-(--color-primary-light) hover:border-(--color-primary) transition-all" aria-label="Email">
              <FiMail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-(--border-color) flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-(--text-muted)">
          <span>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          <span className="flex items-center gap-1">Built with <FiHeart className="w-3 h-3 text-red-400" /> using Next.js &amp; Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}

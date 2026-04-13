"use client";

import { useState } from "react";
import { profile } from "@/lib/portfolio-data";
import { PageTransition, FadeIn, FadeInLeft, FadeInRight } from "../components/animations";
import { SectionHeading } from "../components/SectionHeading";
import { FiSend, FiGithub, FiMail, FiMapPin, FiCheckCircle, FiAlertCircle, FiLoader } from "react-icons/fi";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        const data = await res.json();
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  return (
    <PageTransition className="section-padding">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeading subtitle="Have a project idea, opportunity, or just want to say hello? Let's talk.">
          Get in Touch
        </SectionHeading>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Info column */}
          <FadeInLeft className="lg:col-span-2">
            <div className="space-y-6">
              {/* Card 1 */}
              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-linear-to-br from-violet-600 to-purple-500 flex items-center justify-center text-white">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-(--text-primary)">Email</h3>
                </div>
                <a href={`mailto:${profile.contact.email}`} className="text-(--color-primary-light) hover:text-(--color-accent) transition-colors text-sm break-all">
                  {profile.contact.email}
                </a>
              </div>

              {/* Card 2 */}
              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-linear-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white">
                    <FiGithub className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-(--text-primary)">GitHub</h3>
                </div>
                <a href={profile.contact.github} target="_blank" rel="noopener noreferrer" className="text-(--color-primary-light) hover:text-(--color-accent) transition-colors text-sm break-all">
                  {profile.contact.github.replace("https://", "")}
                </a>
              </div>

              {/* Card 3 */}
              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-linear-to-br from-emerald-500 to-teal-400 flex items-center justify-center text-white">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-(--text-primary)">Location</h3>
                </div>
                <p className="text-(--text-secondary) text-sm">Available for remote collaboration worldwide</p>
              </div>

              {/* Message */}
              <div className="p-4 rounded-xl bg-linear-to-r from-violet-600/5 to-cyan-500/5 border border-(--border-color)">
                <p className="text-(--text-muted) text-xs font-light italic">
                  &ldquo;{profile.contact.message}&rdquo;
                </p>
              </div>
            </div>
          </FadeInLeft>

          {/* Form column */}
          <FadeInRight className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 md:p-8 space-y-5">
              <h2 className="text-xl font-bold text-(--text-primary) mb-2">Send a Message</h2>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-(--text-secondary) mb-1.5">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-(--bg-secondary) border border-(--border-color) text-(--text-primary) placeholder:text-(--text-muted) focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-(--text-secondary) mb-1.5">Your Email</label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-(--bg-secondary) border border-(--border-color) text-(--text-primary) placeholder:text-(--text-muted) focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-(--text-secondary) mb-1.5">Subject</label>
                <input
                  id="subject"
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="Project Inquiry"
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-(--bg-secondary) border border-(--border-color) text-(--text-primary) placeholder:text-(--text-muted) focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-(--text-secondary) mb-1.5">Message</label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-(--bg-secondary) border border-(--border-color) text-(--text-primary) placeholder:text-(--text-muted) focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r from-violet-600 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer"
              >
                {status === "loading" ? (
                  <><FiLoader className="w-4 h-4 animate-spin" /> Sending...</>
                ) : (
                  <><FiSend className="w-4 h-4" /> Send Message</>
                )}
              </button>

              {status === "success" && (
                <div className="flex items-center gap-2 text-emerald-400 text-sm p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <FiCheckCircle className="w-4 h-4 shrink-0" />
                  Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2 text-red-400 text-sm p-3 rounded-xl bg-red-500/10 border border-red-500/20">
                  <FiAlertCircle className="w-4 h-4 shrink-0" />
                  {errorMsg}
                </div>
              )}
            </form>
          </FadeInRight>
        </div>
      </div>
    </PageTransition>
  );
}

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import hero from "../Assets/MinimalistLaptopLogoDesign.png";

const projects = [
   
  {
    id: 1,
    title: "AutoPostr — Social Scheduler",
    subtitle: "Full-stack scheduler for LinkedIn & Instagram",
    desc: "A focused tool to schedule, preview and auto-post content. Built with React, Node, TypeScript, and a lightweight CMS.",
    tech: ["React", "TypeScript", "Node.js", "Tailwind"],
    link: "#",
  },
  {
    id: 2,
    title: "MicroCMS Integration Demo",
    subtitle: "Headless CMS driven landing pages",
    desc: "Server-side rendering with pre-built templates and CMS hooks to edit content without redeploys.",
    tech: ["Next.js", "CMS", "REST API"],
    link: "#",
  },
  {
    id: 3,
    title: "Interactive UI Kit",
    subtitle: "Design system & component playground",
    desc: "A compact, accessible UI kit built with Tailwind and Storybook patterns.",
    tech: ["Tailwind", "React", "Storybook"],
    link: "#",
  },
];

export default function PortfolioApp() {


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-white text-slate-900 antialiased"
    >
      {/* HEADER */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto p-4 flex flex-col md:flex-row items-center justify-between gap-4"
      >
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-medium"
          >
            SP
          </motion.div>
          <div className="text-center md:text-left">
            <h1 className="text-base md:text-lg font-semibold">
              Shankara Perumal Arunachalam
            </h1>
            <p className="text-xs text-slate-500">
              Frontend Engineer — Minimalist UI · React · TypeScript
            </p>
          </div>
        </motion.div>

        <nav className="flex gap-4 text-sm text-slate-600">
          <motion.a whileHover={{ scale: 1.1 }} href="#projects" className="hover:text-slate-900">
            Projects
          </motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href="#about" className="hover:text-slate-900">
            About
          </motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href="#contact" className="hover:text-slate-900">
            Contact
          </motion.a>
        </nav>
      </motion.header>

      {/* HERO SECTION */}
      <main className="max-w-6xl mx-auto px-4 pb-24">
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 grid gap-8 md:grid-cols-2 md:items-center"
        >
          {/* Text */}
          <motion.div initial={{ x: -40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}>
            <h2 className="text-2xl md:text-4xl font-extrabold leading-tight">
              Minimal interfaces, meaningful experiences.
            </h2>
            <p className="mt-3 text-slate-600 text-sm md:text-base">
              I build polished, high-performance frontend experiences focusing on
              clarity, accessibility and measurable impact.
            </p>

            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="/resume.pdf"
                className="inline-flex items-center gap-2 border border-slate-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-slate-50"
              >
                Download Resume
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#projects"
                className="text-sm text-slate-600 hover:underline"
              >
                See work →
              </motion.a>
            </div>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-500">
              <li>📍 Chennai, India</li>
              <li>🌍 Remote · Hybrid</li>
              <li>💻 5 yrs — Frontend</li>
              <li>💰 ₹36L · Dec 2025</li>
            </ul>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="order-first md:order-last flex justify-center"
          >
            <div className="border border-slate-100 rounded-2xl p-4 sm:p-6">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 6 }}
                className="h-40 sm:h-44 w-full rounded-lg bg-gradient-to-r from-slate-50 to-white flex items-center justify-center text-slate-300"
              >
                <img
                  className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 drop-shadow-lg"
                  src={hero}
                  alt="Hero logo"
                />
              </motion.div>
              <p className="mt-3 text-xs text-slate-500 text-center sm:text-left">
                A clean hero illustration or photo keeps attention on your message.
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* PROJECTS */}
        <motion.section id="projects" className="mt-16">
          <h3 className="text-lg md:text-xl font-semibold">Selected projects</h3>
          <p className="mt-2 text-sm text-slate-500">
            Case studies that show design thinking & technical execution.
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {projects.map((p, i) => (
              <motion.article
                key={p.id}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="p-4 sm:p-5 border rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4">
                  <div>
                    <h4 className="text-base md:text-lg font-medium">{p.title}</h4>
                    <p className="text-xs md:text-sm text-slate-500 mt-1">{p.subtitle}</p>
                  </div>
                  <div className="text-xs text-slate-400">2024</div>
                </div>
                <p className="mt-3 text-sm text-slate-600">{p.desc}</p>
                <div className="mt-4 flex items-center justify-between flex-wrap gap-2">
                  <ul className="flex items-center gap-2 text-xs text-slate-500 flex-wrap">
                    {p.tech.map((t) => (
                      <motion.li
                        whileHover={{ scale: 1.1 }}
                        key={t}
                        className="px-2 py-1 border rounded text-xs"
                      >
                        {t}
                      </motion.li>
                    ))}
                  </ul>
                  <motion.a whileHover={{ scale: 1.1 }} href={p.link} className="text-sm underline">
                    Live / Demo
                  </motion.a>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* ABOUT */}
        <motion.section id="about" className="mt-16">
          <h3 className="text-lg md:text-xl font-semibold">About</h3>
          <motion.div className="mt-3 text-sm text-slate-600 space-y-3">
            <p>
              Hi — I'm Shankara, a frontend developer who loves turning complex
              ideas into simple, usable interfaces.
            </p>
            <p>
              Tech highlights: React, TypeScript, Tailwind, accessible markup,
              component driven design, backend integrations.
            </p>
          </motion.div>
        </motion.section>

        {/* CONTACT */}
        <motion.section id="contact" className="mt-16">
          <h3 className="text-lg md:text-xl font-semibold">Get in touch</h3>
          <motion.form className="mt-4 grid gap-3 max-w-md">
            <label className="text-xs text-slate-600">Name</label>
            <motion.input className="border rounded px-3 py-2 text-sm" placeholder="Your name" />

            <label className="text-xs text-slate-600">Email</label>
            <motion.input className="border rounded px-3 py-2 text-sm" placeholder="you@domain.com" />

            <label className="text-xs text-slate-600">Message</label>
            <motion.textarea className="border rounded px-3 py-2 text-sm" rows={4} placeholder="Short message" />

            <div className="mt-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                className="inline-flex items-center gap-2 border px-4 py-2 rounded text-sm"
              >
                Send
              </motion.button>
            </div>
          </motion.form>
        </motion.section>
      </main>

      {/* FOOTER */}
      <motion.footer className="border-t py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-xs sm:text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} Shankara Perumal Arunachalam</div>
          <div className="flex gap-4">
            <motion.a whileHover={{ scale: 1.1 }} href="#">
              GitHub
            </motion.a>
            <motion.a whileHover={{ scale: 1.1 }} href="#">
              LinkedIn
            </motion.a>
            <motion.a whileHover={{ scale: 1.1 }} href="#">
              Twitter
            </motion.a>
          </div>
        </div>
      </motion.footer>
    </motion.div>
  );
}

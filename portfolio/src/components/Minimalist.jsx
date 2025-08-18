import React, { useEffect } from "react";
import { motion } from "framer-motion";

// Minimalist + Animated React portfolio component
// Tailwind CSS + Framer Motion assumed

const projects = [
{
id: 1,
title: "AutoPostr — Social Scheduler",
subtitle: "Full‑stack scheduler for LinkedIn & Instagram (clone + customise)",
desc: "A focused tool to schedule, preview and auto-post content. Built with React, Node, TypeScript, and a lightweight CMS for templating.",
tech: ["React", "TypeScript", "Node.js", "Tailwind"],
link: "#",
},
{
id: 2,
title: "MicroCMS Integration Demo",
subtitle: "Headless CMS driven landing pages",
desc: "Small demo showing server-side rendering with pre-built templates and a CMS hook to edit content without redeploys.",
tech: ["Next.js", "CMS", "REST API"],
link: "#",
},
{
id: 3,
title: "Interactive UI Kit",
subtitle: "Design system & component playground",
desc: "A compact, accessible UI kit built with Tailwind and Storybook-compatible patterns for faster prototyping.",
tech: ["Tailwind", "React", "Storybook"],
link: "#",
},
];

export default function PortfolioApp() {
     useEffect(() => {
    // inject Tailwind CDN only when this page mounts
    const script = document.createElement("script");
    script.src = "https://cdn.tailwindcss.com";
    script.async = false;
    document.head.appendChild(script);

    return () => {
      // cleanup: remove Tailwind when leaving the page
      document.head.removeChild(script);
    };
  }, []);
return (
<motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 1 }}
className="min-h-screen bg-white text-slate-900 antialiased"
>
<motion.header
initial={{ y: -60, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{ duration: 0.8 }}
className="max-w-4xl mx-auto p-6 flex items-center justify-between"
>
<motion.div
whileHover={{ scale: 1.05 }}
className="flex items-center gap-3"
>
<motion.div
animate={{ rotate: [0, 360] }}
transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-medium"
>
SP
</motion.div>
<div>
<h1 className="text-lg font-semibold">Shankara Perumal Arunachalam</h1>
<p className="text-xs text-slate-500">Frontend Engineer — Minimalist UI · React · TypeScript</p>
</div>
</motion.div>
<nav className="text-sm text-slate-600">
<motion.a whileHover={{ scale: 1.1 }} href="#projects" className="mr-6 hover:text-slate-900">Projects</motion.a>
<motion.a whileHover={{ scale: 1.1 }} href="#about" className="mr-6 hover:text-slate-900">About</motion.a>
<motion.a whileHover={{ scale: 1.1 }} href="#contact" className="hover:text-slate-900">Contact</motion.a>
</nav>
</motion.header>

```
  <main className="max-w-4xl mx-auto px-6 pb-24">
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mt-12 grid gap-8 md:grid-cols-2 md:items-center"
    >
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
          Minimal interfaces, meaningful experiences.
        </h2>
        <p className="mt-4 text-slate-600">I build polished, high-performance frontend experiences focusing on clarity, accessibility and measurable impact. Currently focused on React, TypeScript and scalable component systems.</p>

        <div className="mt-6 flex items-center gap-3">
          <motion.a whileHover={{ scale: 1.05 }} href="/resume.pdf" className="inline-flex items-center gap-2 border border-slate-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-slate-50">Download Resume</motion.a>
          <motion.a whileHover={{ scale: 1.05 }} href="#projects" className="text-sm text-slate-600 hover:underline">See work →</motion.a>
        </div>

        <ul className="mt-6 grid grid-cols-2 gap-2 text-xs text-slate-500">
          <motion.li whileHover={{ scale: 1.05 }}>Location: Chennai, India</motion.li>
          <motion.li whileHover={{ scale: 1.05 }}>Open to: Remote · Hybrid roles</motion.li>
          <motion.li whileHover={{ scale: 1.05 }}>Experience: 5 yrs — Frontend</motion.li>
          <motion.li whileHover={{ scale: 1.05 }}>Salary target: ₹36L · Dec 2025</motion.li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="order-first md:order-last"
      >
        <div className="border border-slate-100 rounded-2xl p-6">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="h-44 w-full rounded-lg bg-gradient-to-r from-slate-50 to-white flex items-center justify-center text-slate-300"
          >
            <img src=""/>
          </motion.div>
          <p className="mt-3 text-xs text-slate-500">A clean hero illustration or photo keeps attention on your message. Use an abstract scene or subtle geometric art.</p>
        </div>
      </motion.div>
    </motion.section>

    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mt-16"
    >
      <h3 className="text-xl font-semibold">Selected projects</h3>
      <p className="mt-2 text-sm text-slate-500">Three case studies that show design thinking and technical execution.</p>

      <div className="mt-6 grid gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.id}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="p-5 border rounded-lg hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h4 className="text-lg font-medium">{p.title}</h4>
                <p className="text-sm text-slate-500 mt-1">{p.subtitle}</p>
              </div>
              <div className="text-xs text-slate-400">2024</div>
            </div>

            <p className="mt-3 text-sm text-slate-600">{p.desc}</p>

            <div className="mt-4 flex items-center justify-between">
              <ul className="flex items-center gap-2 text-xs text-slate-500">
                {p.tech.map((t) => (
                  <motion.li whileHover={{ scale: 1.1 }} key={t} className="px-2 py-1 border rounded text-xs">{t}</motion.li>
                ))}
              </ul>
              <motion.a whileHover={{ scale: 1.1 }} href={p.link} className="text-sm underline text-slate-700">Live / Demo</motion.a>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>

    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mt-16"
    >
      <h3 className="text-xl font-semibold">About</h3>
      <motion.div className="mt-4 text-sm text-slate-600" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
        <p>Hi — I'm Shankara, a frontend developer who loves turning complex ideas into simple, usable interfaces. I enjoy building component systems, optimizing performance, and mentoring juniors into better engineers.</p>
        <p className="mt-3">Tech highlights: React, TypeScript, Tailwind, accessible markup, component driven design, small backend integrations.</p>
      </motion.div>
    </motion.section>

    <motion.section
      id="contact"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mt-16"
    >
      <h3 className="text-xl font-semibold">Get in touch</h3>
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-4 grid gap-3 max-w-lg"
      >
        <label className="text-xs text-slate-600">Name</label>
        <motion.input whileFocus={{ scale: 1.02 }} className="border rounded px-3 py-2 text-sm" placeholder="Your name" />

        <label className="text-xs text-slate-600">Email</label>
        <motion.input whileFocus={{ scale: 1.02 }} className="border rounded px-3 py-2 text-sm" placeholder="you@domain.com" />

        <label className="text-xs text-slate-600">Message</label>
        <motion.textarea whileFocus={{ scale: 1.02 }} className="border rounded px-3 py-2 text-sm" rows={4} placeholder="Short message" />

        <div className="mt-2">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} type="button" className="inline-flex items-center gap-2 border px-4 py-2 rounded text-sm">Send</motion.button>
        </div>
      </motion.form>
    </motion.section>
  </main>

  <motion.footer
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="border-t py-6 mt-12"
  >
    <div className="max-w-4xl mx-auto px-6 text-sm text-slate-500 flex items-center justify-between">
      <div>© {new Date().getFullYear()} Shankara Perumal Arunachalam</div>
      <div>
        <motion.a whileHover={{ scale: 1.1 }} href="#" className="mr-4">GitHub</motion.a>
        <motion.a whileHover={{ scale: 1.1 }} href="#" className="mr-4">LinkedIn</motion.a>
        <motion.a whileHover={{ scale: 1.1 }} href="#">Twitter</motion.a>
      </div>
    </div>
  </motion.footer>
</motion.div>



);
}
"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Awards } from "@/components/awards"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-background text-foreground dark w-full"
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent text-accent-foreground px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>
      <div className="fixed inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
      <Navbar />
      <main id="main-content" className="w-full">
        <Hero />
        <About />
        <Experience />
        <Projects />

        <Skills />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  )
}

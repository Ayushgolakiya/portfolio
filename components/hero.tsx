"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

export function Hero() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Ayushgolakiya", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ayush-golakiya-a03407255/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:golakiyaayush29@gmail.com", label: "Email" },
  ]

  const heroTexts = [
    "Building Intelligent Systems That Matter",
    "Crafting AI Solutions for Tomorrow",
    "Engineering the Future with ML",
    "Transforming Ideas into AI Reality",
  ]

  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const currentText = heroTexts[currentTextIndex]
    let timeout: NodeJS.Timeout

    if (isTyping) {
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1))
        }, 100)
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 50)
      } else {
        setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length)
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, isTyping, currentTextIndex, heroTexts])

  return (
    <section className="section-fluid flex items-center justify-center relative w-full" style={{ minHeight: '100vh' }}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent-secondary/10" />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-r from-accent/20 to-accent-secondary/20 rounded-full blur-3xl"
      />

      <div className="container-fluid text-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="py-fluid-8 sm:py-fluid-12"
        >
          <motion.h1
            className="text-fluid-4xl sm:text-fluid-5xl lg:text-fluid-6xl font-bold mb-fluid-6 sm:mb-fluid-8 leading-tight text-primary flex items-center justify-center"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
          >
            <span className="text-gradient-purple">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-fluid-lg sm:text-fluid-xl text-secondary mb-fluid-8 sm:mb-fluid-12 max-w-4xl mx-auto leading-relaxed px-fluid-4"
          >
            AI/ML Engineer & Tech Lead at Protonix AI • Full-Stack Developer • MLOps Specialist
            <br />
            <span className="text-accent hover-glow-purple">Transforming ideas into production-ready AI solutions</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row space-fluid-3 sm:space-fluid-4 justify-center items-center mb-fluid-12 sm:mb-fluid-16"
          >
            <Button
              className="button-fluid bg-accent hover:bg-accent-secondary text-black font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Projects
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            <Button
              variant="outline"
              className="button-fluid border-accent text-accent hover:bg-accent hover:text-black rounded-full transition-all duration-300 hover:scale-105 bg-transparent hover:shadow-lg hover:shadow-accent/25"
            >
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center space-fluid-4 sm:space-fluid-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-fluid-2 sm:p-fluid-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background group"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 sm:w-6 sm:h-6 text-muted-light group-hover:text-accent transition-colors duration-200" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-accent rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-2 sm:h-3 bg-accent rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

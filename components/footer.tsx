"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:golakiyaayush29@gmail.com", label: "Email" },
  ]

  return (
    <footer className="py-fluid-12 border-t border-border relative w-full">
      <div className="container-fluid w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          <div className="flex space-fluid-6 mb-fluid-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-fluid-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background group"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-muted-light group-hover:text-accent transition-colors duration-200" />
              </motion.a>
            ))}
          </div>

          <div className="flex items-center space-fluid-2 text-muted-light mb-fluid-4 text-fluid-base">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-accent" />
            <span>using Next.js, Tailwind CSS, and Framer Motion</span>
          </div>

          <p className="text-fluid-sm text-muted-light">© {new Date().getFullYear()} Ayush Golakiya. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

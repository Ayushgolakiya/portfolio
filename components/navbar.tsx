"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Menu, X } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    document.addEventListener("keydown", handleKeyDown)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#research", label: "Research" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container-fluid">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-gradient-purple hover-glow-purple cursor-pointer"
          >
            Ayush Golakiya
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                className="text-secondary-light hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded-md px-2 py-1 hover-glow-purple"
              >
                {item.label}
              </motion.a>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="border-accent text-accent hover:bg-accent hover:text-black transition-all duration-200 bg-transparent hover:shadow-lg hover:shadow-accent/25"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-primary-light hover:text-accent"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-card/95 backdrop-blur-xl border border-border rounded-lg mt-2 p-4"
            role="navigation"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-3 px-2 text-secondary hover:text-accent transition-colors duration-200 rounded-md hover:bg-accent/10 min-h-[44px] flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="w-full mt-4 border-accent text-accent hover:bg-accent hover:text-black bg-transparent"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

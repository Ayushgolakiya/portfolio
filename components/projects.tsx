"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowRight, ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

export function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])
  
  const initialProjectCount = isMobile ? 3 : 6
  
  const handleToggleProjects = () => {
    setShowAllProjects(!showAllProjects)
    
    // Smooth scroll to the section when collapsing
    if (showAllProjects) {
      setTimeout(() => {
        const projectsSection = document.getElementById('projects')
        if (projectsSection) {
          projectsSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          })
        }
      }, 300) // Wait for animation to start
    }
  }
  
  const featuredProjects = [
    {
      title: "Coffee Machine HMI (PLC)",
      description: "PLC-integrated HMI for automated beverage control",
      longDescription:
        "Built an HMI integrated with a PLC to automate brewing with options for beverage type, size, and strength. Added real‑time temperature/status feedback, error states, and interlocks for safe operation.",
      image: "/placeholder.jpg",
      technologies: ["PLC", "HMI", "Ladder Logic", "SCADA"],
      status: "Prototype",
      type: "Featured",
      demo: "#",
      bullets: [
        "Problem: Manual brewing leads to inconsistency and limited control",
        "Approach: PLC‑driven control logic with an intuitive HMI",
        "Outcome: Consistent, configurable operation with safety interlocks",
      ],
    },
    {
      title: "Elevator Control System (PLC Kit)",
      description: "Multi‑floor elevator logic with safety and optimized travel",
      longDescription:
        "Designed PLC logic for call handling, door interlocks, and emergency stop. Implemented optimized travel paths and state handling for robust, safe operation on a training kit.",
      image: "/placeholder.jpg",
      technologies: ["PLC", "Control Systems", "Safety"],
      status: "Prototype",
      type: "Featured",
      demo: "#",
      bullets: [
        "Problem: Need reliable, safe multi‑floor control",
        "Approach: Deterministic state machine with interlocks and E‑stop",
        "Outcome: Smooth travel with priority handling and safety features",
      ],
    },
    {
      title: "VR Accessibility Assistance",
      description: "VR workflow with voice prompts and 3D navigation for campuses",
      longDescription:
        "Developed an immersive VR experience with interactive 3D maps, building layouts, and room‑level info to aid navigation for individuals with physical disabilities.",
      image: "/placeholder.jpg",
      technologies: ["Unity/VR", "3D UI", "Accessibility"],
      status: "Concept",
      type: "Featured",
      demo: "#",
      bullets: [
        "Problem: Large campuses are hard to navigate independently",
        "Approach: Contextual voice prompts, visual cues, and hotspots",
        "Outcome: Intuitive, accessible navigation experience",
      ],
    },
  ]

  const projects = [
    {
      title: "Motion‑Sensing Lighting (PCB + Sensor)",
      description: "Automated lighting with occupancy detection (~28% energy savings)",
      technologies: ["PCB", "Sensor", "Embedded"],
      github: "#",
      demo: "#",
      bullets: [
        "Problem: Wasted energy from manual lighting",
        "Approach: Motion sensor + timing logic on compact PCB",
        "Outcome: Measured ~28% reduction in energy use",
      ],
    },
    {
      title: "Vibration‑Sensor Kill‑Switch (PCB + Firmware)",
      description: "Safety shutdown on abnormal vibration",
      technologies: ["PCB", "Firmware", "Safety"],
      github: "#",
      demo: "#",
      bullets: [
        "Problem: Equipment damage from undetected vibration",
        "Approach: Tunable threshold + fail‑safe logic",
        "Outcome: Extended equipment lifespan and safety",
      ],
    },
    {
      title: "VR Accessibility Assistance",
      description: "Campus navigation with 3D maps and voice cues",
      technologies: ["VR", "3D UI", "Accessibility"],
      github: "#",
      demo: "#",
      bullets: [
        "Problem: Accessibility challenges in large campuses",
        "Approach: Interactive maps, room‑level info, voice prompts",
        "Outcome: Intuitive independent navigation",
      ],
    },
  ]

  return (
    <section id="projects" className="section-fluid relative w-full">
      <div className="container-fluid w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-fluid-4xl sm:text-fluid-5xl font-bold mb-fluid-12 sm:mb-fluid-16 text-center bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
            Selected Projects
          </h2>

          {/* Featured Projects */}
          <div className="mb-fluid-16 sm:mb-fluid-20">
            <h3 className="text-fluid-2xl sm:text-fluid-3xl font-bold mb-fluid-8 sm:mb-fluid-12 text-accent">Featured Projects</h3>
            <div className="grid-fluid-2">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 hover:scale-[1.02] h-full">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="img-fluid"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-accent text-background text-fluid-xs sm:text-fluid-sm">{project.status}</Badge>
                      </div>
                    </div>

                    <div className="card-fluid">
                      <div className="flex items-start justify-between mb-fluid-3 sm:mb-fluid-4">
                        <div>
                          <h4 className="text-fluid-xl sm:text-fluid-2xl font-bold mb-fluid-2 sm:mb-fluid-3 text-light">{project.title}</h4>
                          <p className="text-accent-purple font-medium mb-fluid-3 sm:mb-fluid-4 text-fluid-base sm:text-fluid-lg">{project.description}</p>
                        </div>
                      </div>

                      <p className="text-muted-light mb-fluid-4 sm:mb-fluid-6 text-fluid-sm sm:text-fluid-base leading-relaxed">{project.longDescription}</p>

                      <div className="space-fluid-2 sm:space-fluid-3 mb-fluid-4 sm:mb-fluid-6">
                        {project.bullets.map((bullet, i) => (
                          <p key={i} className="text-fluid-sm sm:text-fluid-base text-muted-light flex items-start space-fluid-2">
                            <span className="text-accent-purple mt-1.5 text-xs">▸</span>
                            {bullet}
                          </p>
                        ))}
                      </div>

                      <div className="flex flex-wrap space-fluid-1 sm:space-fluid-2 mb-fluid-4 sm:mb-fluid-6">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="border-accent/30 text-accent hover:bg-accent/10 transition-colors duration-200 text-fluid-xs sm:text-fluid-sm"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex space-fluid-2">
                        {/* GitHub button commented out for private projects */}
                        {/* <Button
                          variant="outline"
                          size="sm"
                          className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black bg-transparent transition-all duration-300 text-fluid-xs sm:text-fluid-sm"
                          asChild
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                            Code
                          </a>
                        </Button> */}
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black bg-transparent transition-all duration-300 text-fluid-xs sm:text-fluid-sm"
                          asChild
                        >
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                            Demo
                          </a>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-fluid-2xl sm:text-fluid-3xl font-bold mb-fluid-8 sm:mb-fluid-12 text-accent">Other Projects</h3>
            <div className="grid-fluid-4">
              <AnimatePresence mode="wait">
                {projects.slice(0, showAllProjects ? projects.length : initialProjectCount).map((project, index) => (
                  <motion.div
                    key={`${project.title}-${index}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.03 }}
                    exit={{ opacity: 0, y: -20 }}
                    layout
                  >
                    <Card className="card-fluid card-glass hover-lift h-full">
                      <div className="flex-1">
                        <h4 className="text-fluid-lg sm:text-fluid-xl font-bold mb-fluid-2 sm:mb-fluid-3">{project.title}</h4>
                        <p className="text-accent font-medium mb-fluid-3 sm:mb-fluid-4 text-fluid-sm sm:text-fluid-base">{project.description}</p>

                        <div className="space-fluid-2 sm:space-fluid-3 mb-fluid-4 sm:mb-fluid-6">
                          {project.bullets.map((bullet, i) => (
                            <p key={i} className="text-fluid-xs sm:text-fluid-sm text-muted flex items-start space-fluid-2">
                              <span className="text-accent mt-1.5 text-xs">▸</span>
                              {bullet}
                            </p>
                          ))}
                        </div>

                        <div className="flex flex-wrap space-fluid-1 mb-fluid-4 sm:mb-fluid-6">
                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="border-accent/30 text-accent hover:bg-accent/10 transition-colors duration-200 text-fluid-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        {/* Project Links */}
                        <div className="flex space-fluid-2">
                          {project.github && project.github !== "#" && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black bg-transparent transition-all duration-300 text-fluid-xs"
                              asChild
                            >
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="w-3 h-3 mr-1" />
                                Code
                              </a>
                            </Button>
                          )}
                          {project.demo && project.demo !== "#" && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black bg-transparent transition-all duration-300 text-fluid-xs"
                              asChild
                            >
                              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-3 h-3 mr-1" />
                                Demo
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            
            {/* Show More/Less Button */}
            {projects.length > initialProjectCount && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-center mt-8 sm:mt-12"
              >
                <Button
                  variant="outline"
                  onClick={handleToggleProjects}
                  className="px-6 py-3 border-accent text-accent hover:bg-accent hover:text-background rounded-full transition-all duration-300 hover:scale-105 bg-transparent text-sm font-medium"
                >
                  {showAllProjects ? (
                    <>
                      Show Less
                      <ChevronUp className="ml-2 w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Show More
                      <ChevronDown className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </motion.div>
            )}
          </div>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-fluid-12 sm:mt-fluid-16"
          >
            <Button
              variant="outline"
              className="button-fluid border-accent text-accent hover:bg-accent hover:text-background rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
            >
              View All Projects
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  )
}

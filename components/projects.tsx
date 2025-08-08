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
      title: "News Aggregator Platform",
      description: "AI-powered bias detection and de-duplication for unbiased news",
      longDescription:
        "A comprehensive news aggregation platform that uses AI to detect bias, eliminate duplicates, and provide users with balanced, credible news from multiple sources. Features sentiment analysis, credibility scoring, and real-time updates.",
      image: "/news-aggregator-platform.png",
      technologies: ["NLP", "Sentiment Analysis", "React", "Python", "News APIs", "AI/ML"],
      status: "Live",
      type: "Featured",
      // github: "#", // Private project - GitHub link removed
      demo: "https://indiaunbiased.news/",
      bullets: [
        "Problem: News bias and information fragmentation across sources",
        "Approach: AI-powered aggregation with sentiment analysis and bias detection",
        "Outcome: Deployed platform serving unbiased news with credibility scoring",
      ],
    },
    {
      title: "Link & Date - AI Dating Platform",
      description: "Agentic, LLM-powered swipe-free dating app for professionals",
      longDescription:
        "Designing and developing an MVP leveraging agentic AI and large language models (LLMs) to deliver deep, swipe-free interactions through long-form prompts, context-aware matchmaking, secure authentication, and calendar-integrated scheduling.",
      image: "/ai-dating-app-interface.png",
      technologies: ["LLM", "Agentic AI", "React", "Node.js", "Calendar API"],
      status: "In Progress",
      type: "Featured",
      // github: "#", // Private project - GitHub link removed
      demo: "#",
      bullets: [
        "Problem: Traditional dating apps rely on superficial swiping mechanisms",
        "Approach: Implemented agentic AI for deep personality matching and conversation",
        "Outcome: MVP with context-aware matchmaking and professional scheduling integration",
      ],
    },
    {
      title: "Multi-Agent AI Developer Assistant",
      description: "LangGraph-supervised agentic coding copilot with multi-agent orchestration",
      longDescription:
        "Designing and developing a multi-agent orchestration layer coordinating FE/BE/QA/DevOps/Review agents using agent-to-agent (A2A) protocols and MCP tool servers, supported by PGVector memory, OTEL tracing, and LangSmith evaluation.",
      image: "/ai-coding-assistant.png",
      technologies: ["LangGraph", "PGVector", "OTEL", "LangSmith", "Multi-Agent Systems"],
      status: "In Progress",
      type: "Featured",
      // github: "#", // Private project - GitHub link removed
      demo: "#",
      bullets: [
        "Problem: Fragmented development workflows across different specializations",
        "Approach: Multi-agent system with specialized FE/BE/QA/DevOps agents",
        "Outcome: Unified development copilot with automated testing and PR suggestions",
      ],
    },
  ]

  const projects = [
    {
      title: "Python Website Blocker",
      description: "Tkinter-based GUI for blocking websites using firewall rules",
      technologies: ["Python", "Tkinter", "Firewall Rules", "Desktop Notifications"],
      github: "#",
      demo: "#",
      bullets: [
        "Problem: Need for parental control and productivity focus tools",
        "Approach: Built Tkinter GUI with keyword filtering and firewall integration",
        "Outcome: Desktop notifications and educational content filtering system",
      ],
    },
    {
      title: "Image Classification",
      description: "Classified cat/dog images using Random Forest",
      technologies: ["Random Forest", "Feature Extraction", "Machine Learning", "GitHub"],
      github: "#",
      demo: "#",
      bullets: [
        "Problem: Manual image classification is time-consuming and subjective",
        "Approach: Applied feature extraction and scaling before classification",
        "Outcome: High validation accuracy with minimal overfitting",
      ],
    },
    {
      title: "Search Engine",
      description: "Developed tool to detect fake sites and link to genuine ones",
      technologies: ["Domain Ranking APIs", "Keyword Filters", "Web Scraping", "GitHub"],
      github: "#",
      demo: "#",
      bullets: [
        "Problem: Proliferation of fake websites and phishing attempts",
        "Approach: Used domain ranking APIs and keyword filters to validate authenticity",
        "Outcome: Custom interface for quick navigation to verified domains",
      ],
    },
    {
      title: "Student Success Predictor",
      description: "ML-based socioeconomic and academic performance model",
      technologies: ["Logistic Regression", "Random Forest", "Reinforcement Learning", "Interactive Dashboards"],
      github: "#",
      demo: "#",
      bullets: [
        "Problem: Difficulty in predicting student success based on multiple factors",
        "Approach: Utilized logistic regression and random forest with reinforcement learning",
        "Outcome: National Hackathon project with interactive prediction dashboards",
      ],
    },
    {
      title: "Kidney Tumor Detection",
      description: "TensorFlow-based classifier for MRI images",
      technologies: ["TensorFlow", "Computer Vision", "Medical AI", "ROC-AUC"],
      github: "https://github.com/Ayushgolakiya/Kidney-Disease-Dl-Project",
      demo: "#",
      bullets: [
        "Problem: Manual MRI analysis is time-consuming and error-prone",
        "Approach: Deep learning classifier with early-stopping and dropout",
        "Outcome: High-accuracy tumor detection with precision-recall optimization",
      ],
    },
    {
      title: "Discord Authentication Bot",
      description: "Role-based access control bot in Python/JS",
      technologies: ["Python", "JavaScript", "Discord API", "Role Management"],
      github: "#",
      demo: "#",
      bullets: [
        "Problem: Manual role assignment in Discord servers is inefficient",
        "Approach: Built dynamic authentication via password commands",
        "Outcome: Automated role assignment based on access privileges",
      ],
    },
    {
      title: "Car Logo Detection with YOLOv9",
      description: "PyTorch model for real-time logo detection",
      technologies: ["PyTorch", "YOLOv9", "Computer Vision", "Real-time Detection"],
      github: "#",
      demo: "#",
      bullets: [
        "Problem: Automated vehicle identification in traffic systems",
        "Approach: Custom-trained YOLOv9 with image augmentation",
        "Outcome: Real-time detection with robust recognition across conditions",
      ],
    },
    {
      title: "Real-Time Android Chat App",
      description: "Java/Firebase-based chat app with login/auth",
      technologies: ["Java", "Firebase", "Android", "Real-time Database"],
      github: "#",
      demo: "#",
      bullets: [
        "Problem: Need for secure, real-time communication platform",
        "Approach: Integrated Firebase Realtime Database for seamless data sync",
        "Outcome: User authentication and online presence indicator",
      ],
    },
    {
      title: "University Chatbot",
      description: "Small LLM bot for university websites",
      technologies: ["LLM", "Intent Classification", "Multilingual Support", "IBM"],
      github: "#",
      demo: "#",
      bullets: [
        "Problem: Manual handling of repetitive university queries",
        "Approach: Trained small LLM from scratch for university-specific responses",
        "Outcome: Multilingual support for programs, admissions, and campus life queries",
      ],
    },
    {
      title: "DeepQuant Trading Bot",
      description: "RL + deep learning trading engine with React UI",
      technologies: ["Reinforcement Learning", "React", "Spring Boot", "Binance API"],
      github: "#",
      demo: "#",
      bullets: [
        "Problem: Manual crypto trading lacks speed and emotion-free decision making",
        "Approach: Built RL-powered engine with real-time market data processing",
        "Outcome: Automated trading with dynamic strategy switching and low-latency execution",
      ],
    },
    {
      title: "Real Estate Analytics",
      description: "ROI computation + Google Sheets sync",
      technologies: ["Data Scraping", "ROI Calculation", "Google Sheets API", "Analytics"],
      github: "#",
      demo: "#",
      bullets: [
        "Problem: Manual real estate investment analysis is time-consuming",
        "Approach: Automated data scraping from rental portals",
        "Outcome: Dynamic ROI, median prices, and trend visualizations",
      ],
    },
    {
      title: "Jewellery Virtual Try-On",
      description: "AI/AR-based e-commerce platform",
      technologies: ["AI/AR", "Computer Vision", "Shopify Integration", "E-commerce"],
      github: "#",
      demo: "#",
      bullets: [
        "Problem: Online jewellery shopping lacks visualization capabilities",
        "Approach: Incorporated virtual try-on with real-time camera overlays",
        "Outcome: Shopify integration for automated inventory upload",
      ],
    },
    {
      title: "AI Attendance System",
      description: "Liveness-detection and dashboard tracking",
      technologies: ["OpenCV", "Computer Vision", "Anti-spoofing", "Dashboard"],
      github: "#",
      demo: "#",
      bullets: [
        "Problem: Traditional attendance systems vulnerable to spoofing",
        "Approach: Used OpenCV with anti-spoofing to ensure secure attendance",
        "Outcome: Real-time tracking and report generation",
      ],
    },
    {
      title: "Voice Assistant for Real Estate",
      description: "On-device real-estate voice agent",
      technologies: ["Whisper ASR", "Llama3", "CRM Integration", "Voice AI"],
      github: "#",
      demo: "#",
      bullets: [
        "Problem: Manual property inquiries require human intervention",
        "Approach: Built voice agent with Whisper ASR and Llama3 integration",
        "Outcome: Multilingual voice assistant with CRM sync and dynamic scripting",
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

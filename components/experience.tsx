
"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Tech Lead",
      company: "Protonix AI Pvt. Ltd.",
      location: "Remote",
      period: "May 2025 – Present",
      type: "Full-time",
      achievements: [
        "Leading AI/full-stack team, enforcing coding and architectural best practices",
        "Designed secure, scalable MLOps pipelines and containerized CI/CD workflows",
        "Architected back-end systems for real-time, low-latency data processing",
        "Drove front-end UX/API integration and performance tuning",
        "Conducted code/design reviews, tracked reliability metrics, and organized workshops",
      ],
      technologies: ["Python", "React", "MLOps", "Docker", "Kubernetes", "CI/CD"],
    },
    {
      title: "AI Full Stack Developer Intern",
      company: "Protonix AI Pvt. Ltd.",
      location: "Remote",
      period: "Jan 2025 – Apr 2025",
      type: "Internship",
      achievements: [
        "Built hybrid AI-based crypto trading engine with RL models and React/Spring Boot stack",
        "Automated real-estate analytics: scraping, trend analysis, and reporting",
        "Developed Flask/Node.js APIs for high-frequency ingestion and dashboarding",
        "Adopted MLOps best practices: CI/CD, unit tests, documentation",
      ],
      technologies: ["React", "Spring Boot", "Flask", "Node.js", "RL", "MLOps"],
    },
    {
      title: "Research Intern",
      company: "Auro University",
      location: "Surat, Gujarat",
      period: "Jun 2024 – Jul 2024",
      type: "Internship",
      achievements: [
        "Built car-logo detection model with YOLOv9 in PyTorch",
        "Created annotated dataset, implemented augmentation, and optimized inference",
        "Deployed real-time Flask app for demo",
        "Documented results and presented to faculty",
      ],
      technologies: ["PyTorch", "YOLOv9", "Flask", "OpenCV", "Computer Vision"],
    },
    {
      title: "Summer Research Intern",
      company: "Auro University",
      location: "Surat, Gujarat",
      period: "May 2023",
      type: "Research",
      achievements: [
        "Researched smart-home market, analyzed trends and integration tech",
        "Delivered insight report on automation gaps and IoT curriculum initiatives",
      ],
      technologies: ["IoT", "Market Research", "Technical Writing"],
    },
  ]

  return (
    <section id="experience" className="w-full py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Experience
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line - Hidden on mobile, visible on desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-cyan-400 to-purple-400 transform -translate-x-1/2" />
          
          {/* Mobile Timeline Line */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-cyan-400 to-purple-400" />

          {/* Experience Items */}
          <div className="space-y-6 sm:space-y-8 md:space-y-12 lg:space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 sm:left-6 md:left-1/2 top-6 md:top-8 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-purple-400 rounded-full border-2 sm:border-4 border-gray-900 z-10 transform md:-translate-x-1/2" />

                {/* Card Container */}
                <div className={`ml-12 sm:ml-16 md:ml-0 ${
                  index % 2 === 0 
                    ? "md:w-[calc(50%-2rem)] md:pr-8" 
                    : "md:w-[calc(50%-2rem)] md:pl-8 md:ml-auto"
                }`}>
                  <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/10 p-4 sm:p-6 lg:p-8">
                    
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2 leading-tight">
                          {exp.title}
                        </h3>
                        <p className="text-purple-300 font-semibold text-base sm:text-lg md:text-xl">
                          {exp.company}
                        </p>
                      </div>
                      <Badge 
                        variant="secondary" 
                        className="bg-purple-400/10 text-purple-300 border-purple-400/20 text-xs sm:text-sm whitespace-nowrap self-start sm:self-auto px-2 py-1"
                      >
                        {exp.type}
                      </Badge>
                    </div>

                    {/* Meta Information */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 sm:mb-6 text-xs sm:text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      {exp.achievements.map((achievement, i) => (
                        <li 
                          key={i} 
                          className="text-gray-300 flex items-start gap-2 sm:gap-3 text-sm sm:text-base leading-relaxed"
                        >
                          <span className="text-purple-400 mt-1.5 sm:mt-2 text-xs sm:text-sm flex-shrink-0">▸</span>
                          <span className="flex-1">{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-purple-400/30 text-purple-300 hover:bg-purple-400/10 transition-colors duration-200 text-xs sm:text-sm px-2 py-1"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

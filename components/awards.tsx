"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Users, Presentation } from "lucide-react"

export function Awards() {
  const achievements = [
    {
      category: "Academic Excellence",
      icon: Trophy,
      items: [
        {
          title: "Bachelor of Science in IT (AI & ML)",
          detail: "CGPA: 8.64/10",
          institution: "Auro University",
          year: "2022-2025",
        },
        {
          title: "12th ICSE",
          detail: "88.2%",
          institution: "Amarjyoti Saraswati International School",
          year: "2021",
        },
      ],
    },
    {
      category: "Competitions & Hackathons",
      icon: Award,
      items: [
        {
          title: "Technical Paper – IBM ICE Day 2024",
          detail: "1st Place",
          institution: "Deepfake Technology Research",
          year: "2024",
        },
        {
          title: "IBM ICE Poster Contest",
          detail: "2nd Rank",
          institution: "IBM",
          year: "2024",
        },
        {
          title: "CodeCrunch24 Hackathon",
          detail: "Participant",
          institution: "GLA University",
          year: "2024",
        },
        {
          title: "IBM IDEATHON 2025",
          detail: "Team Participant",
          institution: "IBM",
          year: "2025",
        },
      ],
    },
    {
      category: "Leadership & Events",
      icon: Users,
      items: [
        {
          title: "Festival of Learning 2023, 2024",
          detail: "IT Head",
          institution: "Auro University",
          year: "2023-2024",
        },
        {
          title: "New India Vibrant",
          detail: "IT Head",
          institution: "Event Management",
          year: "2024",
        },
        {
          title: "Gandhian Engineering",
          detail: "IT Head",
          institution: "Event Management",
          year: "2024",
        },
        {
          title: "Donation Team Leadership",
          detail: "Led 40-member team",
          institution: "Community Service",
          year: "2023",
        },
      ],
    },
    {
      category: "Certifications & Training",
      icon: Presentation,
      items: [
        {
          title: "Agnirva AI Internship Program",
          detail: "AICTE Recognized",
          institution: "Agnirva Space",
          year: "2025",
        },
        {
          title: "Game Development",
          detail: "Certification",
          institution: "IIT Bombay",
          year: "2024",
        },
        {
          title: "Machine Learning Tools",
          detail: "Workshop",
          institution: "Auro University",
          year: "2023",
        },
        {
          title: "C & C++, Python",
          detail: "Certification",
          institution: "Max Computer, Mumbai",
          year: "2022",
        },
      ],
    },
  ]

  return (
    <section id="awards" className="section-fluid relative w-full">
      <div className="container-fluid w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-fluid-5xl font-bold mb-fluid-12 text-center bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
            Awards & Leadership
          </h2>

          <div className="grid-fluid-2">
            {achievements.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card-fluid bg-card/50 backdrop-blur-sm border-border hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 h-full">
                  <div className="flex items-center space-fluid-3 mb-fluid-6">
                    <div className="p-fluid-2 rounded-lg bg-accent/10 border border-accent/20">
                      <category.icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="text-fluid-xl font-bold text-accent">{category.category}</h3>
                  </div>

                  <div className="space-fluid-4">
                    {category.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="border-l-2 border-accent/30 pl-fluid-4 hover:border-accent transition-colors duration-200"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-fluid-2">
                          <div>
                            <h4 className="font-semibold text-foreground text-fluid-base">{item.title}</h4>
                            <p className="text-fluid-sm text-muted">{item.institution}</p>
                          </div>
                          <div className="flex flex-col sm:items-end space-fluid-1">
                            <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20 w-fit text-fluid-sm">
                              {item.detail}
                            </Badge>
                            <span className="text-fluid-xs text-muted">{item.year}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

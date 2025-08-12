"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Users, Presentation } from "lucide-react"

export function Awards() {
  const achievements = [
    {
      category: "Leadership & Involvement",
      icon: Users,
      items: [
        { title: "President", detail: "Parker Parliament", institution: "Leadership", year: "2024" },
        { title: "Marketing Head", detail: "UR Global", institution: "Leadership", year: "2023" },
        { title: "Captain", detail: "High School Throwball Team", institution: "Sports", year: "2022" },
        { title: "Global Social Leader", detail: "Program Participant", institution: "Community", year: "2019" },
        { title: "First in Maths", detail: "Academic Achievement", institution: "School", year: "2019" },
        { title: "Raëll Padamsee’s Drama", detail: "Cultural", institution: "Drama", year: "2019" },
        { title: "Callido", detail: "Program", institution: "Skill Development", year: "2019" },
        { title: "Dr. Homi Bhabha Competition", detail: "Participant", institution: "Science", year: "2018" },
      ],
    },
    {
      category: "Community Service",
      icon: Trophy,
      items: [
        { title: "Goonj NGO", detail: "Volunteer", institution: "NGO", year: "2020" },
        { title: "Habitat for Humanity", detail: "Volunteer", institution: "NGO", year: "2020" },
        { title: "Run For Hunger", detail: "Volunteer", institution: "Community", year: "2018" },
        { title: "Swachh Bharat Mission", detail: "Volunteer", institution: "Community", year: "2018" },
      ],
    },
    {
      category: "Certifications",
      icon: Presentation,
      items: [
        { title: "RoboGenius", detail: "Certification", institution: "Robotics", year: "" },
        { title: "PLC", detail: "Certification", institution: "Automation", year: "" },
        { title: "PCB Designing", detail: "Certification", institution: "Electronics", year: "" },
        { title: "Entrepreneurship", detail: "Certification", institution: "Business", year: "" },
        { title: "C, C++, Python Programming", detail: "Certification", institution: "Max Computer, Mumbai", year: "2022" },
        { title: "Callido (Technology Integration)", detail: "Certification", institution: "Skill", year: "" },
      ],
    },
    {
      category: "Awards",
      icon: Award,
      items: [
        { title: "International Award for Young People", detail: "Award", institution: "", year: "2020" },
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

"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, FileText } from "lucide-react"

export function Awards() {
  const awards = [
    { title: "International Award for Young People", position: "Awardee", year: "2020" },
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
            Awards & Recognition
          </h2>

          {/* Awards */}
          <div>
            <h3 className="text-fluid-3xl font-bold mb-fluid-6 text-accent">Awards</h3>
            <div className="grid-fluid-2">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="card-fluid bg-card/50 backdrop-blur-sm border-border hover:shadow-lg hover:shadow-accent/10 transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold mb-fluid-1 text-fluid-lg">{award.title}</h4>
                        <p className="text-fluid-sm text-gray-300">{award.year}</p>
                      </div>
                      <Badge className="bg-accent text-background text-fluid-sm">{award.position}</Badge>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

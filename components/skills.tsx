"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skillCategories = [
    {
      category: "Programming & Control",
      skills: ["C", "C++", "Python", "PLC (Allen‑Bradley)", "Ladder Logic"],
    },
    {
      category: "Electronics & PCB",
      skills: ["KiCad", "Altium", "Embedded/PLC Interfacing", "Sensor Integration"],
    },
    {
      category: "CAD & Simulation",
      skills: ["SOLIDWORKS", "Fusion 360", "Autodesk Inventor", "MATLAB"],
    },
    {
      category: "Data/Tools",
      skills: ["PDM", "IBM SPSS", "ARAS"],
    },
    {
      category: "Core Competencies",
      skills: [
        "Mechanical Assembly",
        "Circuit Design & Troubleshooting",
        "HMI Development",
        "Robotics & Automation",
        "PCB Prototyping",
        "Embedded Firmware",
        "Industrial Control",
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="skills" className="section-fluid relative w-full">
      <div className="container-fluid w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-fluid-5xl font-bold mb-fluid-16 text-center text-gradient-purple">Technical Skills</h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid-fluid"
          >
            {skillCategories.map((category, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="card-fluid bg-card/50 backdrop-blur-sm border-border hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 hover-scale h-full">
                  <h3 className="text-fluid-xl font-bold mb-fluid-6 text-accent hover-glow-purple">{category.category}</h3>
                  <div className="flex flex-wrap space-fluid-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: skillIndex * 0.05,
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge
                          variant="outline"
                          className="border-accent/30 text-secondary-light hover:bg-accent/10 hover:border-accent hover:text-accent transition-all duration-200 cursor-default text-fluid-sm"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Expertise Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 md:mt-20 lg:mt-24"
          >
            <Card className="card-fluid bg-gradient-to-r from-accent/5 to-accent-secondary/5 backdrop-blur-sm border-accent/20 hover-scale">
              <h3 className="text-fluid-3xl font-bold mb-fluid-8 text-center text-accent hover-glow-purple pt-5">Domain Expertise</h3>
              <div className="grid-fluid-3 text-fluid-base">
                <div>
                  <h4 className="font-semibold text-primary-light mb-fluid-3 text-fluid-lg">Industrial Automation</h4>
                  <p className="text-muted-light leading-relaxed">PLC programming, HMI design, interlocks, and safety logic</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-light mb-fluid-3 text-fluid-lg">Electromechanical Systems</h4>
                  <p className="text-muted-light leading-relaxed">Sensor integration, signal processing, actuator selection</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-light mb-fluid-3 text-fluid-lg">CAD & Prototyping</h4>
                  <p className="text-muted-light leading-relaxed">CAD modeling, PCB layout, rapid prototyping, test and validation</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

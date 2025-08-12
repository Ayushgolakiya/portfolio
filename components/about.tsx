"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="section-fluid relative w-full">
      <div className="container-fluid w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-fluid-5xl font-bold mb-fluid-16 text-center text-gradient-purple">About Me</h2>

          <Card className="card-fluid bg-card/50 backdrop-blur-sm border-border hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 hover-scale">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none leading-relaxed"
            >
              <p className="text-fluid-lg mb-fluid-6 text-primary leading-relaxed">
                I'm a Mechatronics Engineering Technology student at Purdue with hands-on experience in mechanical
                systems, electronics, PLCs, and control systems. I design, develop, and integrate automated and
                electromechanical systems that improve reliability, safety, and performance.
              </p>

              <p className="text-fluid-lg mb-fluid-6 text-secondary leading-relaxed">
                My projects span PLC‑driven HMIs, motion and vibration sensing PCBs, and safety‑focused control logic
                for industrial scenarios. I enjoy bridging mechanics, sensors, and embedded software to ship practical
                solutions.
              </p>

              <p className="text-fluid-lg text-secondary leading-relaxed">
                Core strengths include CAD, circuit design, sensor integration, and troubleshooting. I'm seeking
                opportunities in automation, robotics, and industrial control where I can contribute to building
                dependable systems end‑to‑end.
              </p>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

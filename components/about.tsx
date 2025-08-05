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
                I'm an aspiring AI & ML engineer with a strong foundation in full-stack development, MLOps, and
                cloud-native architectures. Currently serving as Tech Lead at{" "}
                <span className="text-accent font-semibold hover-glow-purple">Protonix AI</span>, I lead
                cross-functional teams in building scalable AI systems that solve real-world problems.
              </p>

              <p className="text-fluid-lg mb-fluid-6 text-secondary leading-relaxed">
                My expertise spans from designing secure MLOps pipelines and containerized CI/CD workflows to
                architecting high-performance backend systems for real-time data processing. I've successfully delivered
                projects ranging from face-recognition attendance systems to autonomous crypto trading engines powered
                by reinforcement learning.
              </p>

              <p className="text-fluid-lg text-secondary leading-relaxed">
                With a passion for trustworthy AI systems, I'm pursuing advanced studies in AI, ML, and Data Science,
                focusing on applications in health-tech and sustainability. I believe in building technology that not
                only performs exceptionally but also creates meaningful impact for users and society.
              </p>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "C++", "Java", "R", "Dart", "HTML/CSS"],
    },
    {
      category: "AI/ML Frameworks",
      skills: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "OpenCV", "Hugging Face", "MLflow", "ONNX"],
    },
    {
      category: "Web Frameworks",
      skills: ["React.js", "Next.js", "Node.js", "Express.js", "Spring Boot", "FastAPI", "Flask", "AngularJS"],
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase", "Apache Cassandra", "PGVector"],
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "CI/CD", "Terraform", "Git"],
    },
    {
      category: "MLOps & Data",
      skills: ["MLflow", "TensorBoard", "Jupyter", "Power BI", "Apache Kafka", "Airflow", "DVC"],
    },
    {
      category: "Specialized Domains",
      skills: ["Computer Vision", "NLP", "Reinforcement Learning", "LLMs", "Voice AI", "IoT", "Blockchain"],
    },
    {
      category: "Tools & Platforms",
      skills: ["VS Code", "Postman", "N8N", "Salesforce", "Shopify", "Binance API", "Whisper", "Ollama"],
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
                  <h4 className="font-semibold text-primary-light mb-fluid-3 text-fluid-lg">AI/ML Engineering</h4>
                  <p className="text-muted-light leading-relaxed">
                    Production-grade AI pipelines, GPU-optimized LLMs, custom kernel development for iGPUs
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-light mb-fluid-3 text-fluid-lg">Full-Stack Development</h4>
                  <p className="text-muted-light leading-relaxed">
                    MEAN/MERN stacks, Spring Boot, FastAPI with JWT, WebSockets, and CI/CD
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-light mb-fluid-3 text-fluid-lg">MLOps & DevOps</h4>
                  <p className="text-muted-light leading-relaxed">
                    MLflow to ONNX/TensorRT pipelines, containerization, secrets management
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-light mb-fluid-3 text-fluid-lg">Autonomous Systems</h4>
                  <p className="text-muted-light leading-relaxed">
                    RL trading engines, 24/7 execution systems, real-time decision making
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-light mb-fluid-3 text-fluid-lg">Conversational AI</h4>
                  <p className="text-muted-light leading-relaxed">Voice agents, multilingual transformers, Redis memory, Whisper ASR</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-light mb-fluid-3 text-fluid-lg">Computer Vision</h4>
                  <p className="text-muted-light leading-relaxed">YOLO, Faster R-CNN, OpenCV, satellite imagery, spatial analytics</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

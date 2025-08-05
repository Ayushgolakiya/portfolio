"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, FileText } from "lucide-react"

export function Research() {
  const publications = [
    {
      title:
        "Navigating the Deepfake Threat: Cybersecurity, Ethical Implications, and Legal Challenges in the Age of Synthetic Media",
      venue: "Journal of Informatics Education and Research",
      year: "2025",
      volume: "Vol. 5 No. 2",
      coAuthors: ["Krish Shekhaliya", "Dhaval J Thaker", "Juhi Khengar"],
      takeaway: "Comprehensive analysis of deepfake technology's impact on cybersecurity, ethics, and legal frameworks",
      link: "https://jier.org/index.php/journal/article/view/2808",
      type: "Journal Article",
    },
  ]

  const conferences = [
    {
      title:
        "Vishleshan 2025: An International Conference on Exploring the Intersections of Technology, Humanities, and Science",
      venue: "P P Savani University",
      year: "2025",
      month: "March",
      type: "Conference Presentation",
      description: "Presented research on AI intersections with humanities and science",
    },
  ]

  const awards = [
    {
      title: "Technical Paper – IBM ICE Day 2024",
      position: "1st Place",
      topic: "Deepfake Technology",
      year: "2024",
    },
    {
      title: "IBM ICE Poster Contest",
      position: "2nd Rank",
      year: "2024",
    },
  ]

  return (
    <section id="research" className="section-fluid relative w-full">
      <div className="container-fluid w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-fluid-5xl font-bold mb-fluid-12 text-center bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
            Research & Publications
          </h2>

          {/* Publications */}
          <div className="mb-fluid-12">
            <h3 className="text-fluid-3xl font-bold mb-fluid-6 text-accent">Publications</h3>
            <div className="space-fluid-6">
              {publications.map((pub, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="card-fluid bg-card/50 backdrop-blur-sm border-border hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 hover:scale-[1.01]">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between space-fluid-4">
                      <div className="flex-1">
                        <div className="flex items-start space-fluid-3 mb-fluid-3">
                          <FileText className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="text-fluid-lg font-bold mb-fluid-2 leading-tight text-light">{pub.title}</h4>
                            <div className="flex flex-wrap items-center space-fluid-2 text-fluid-sm text-muted-light mb-fluid-2">
                              <span className="font-medium text-accent-purple">{pub.venue}</span>
                              <span>•</span>
                              <span>{pub.volume}</span>
                              <span>•</span>
                              <span>{pub.year}</span>
                            </div>
                            <p className="text-fluid-sm text-muted-light mb-fluid-3">
                              <span className="font-medium">Co-authors:</span> {pub.coAuthors.join(", ")}
                            </p>
                            <p className="text-muted-light leading-relaxed text-fluid-base">{pub.takeaway}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col space-fluid-2 lg:ml-fluid-4">
                        <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20 w-fit text-fluid-sm">
                          {pub.type}
                        </Badge>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black w-fit bg-transparent transition-all duration-300"
                          asChild
                        >
                          <a href={pub.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Read Publication
                          </a>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Conferences */}
          <div className="mb-fluid-12">
            <h3 className="text-fluid-3xl font-bold mb-fluid-6 text-accent">Conference Presentations</h3>
            <div className="space-fluid-4">
              {conferences.map((conf, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="card-fluid bg-card/50 backdrop-blur-sm border-border hover:shadow-lg hover:shadow-accent/10 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-fluid-3">
                      <div>
                        <h4 className="font-bold mb-fluid-1 text-light text-fluid-lg">{conf.title}</h4>
                        <div className="flex flex-wrap items-center space-fluid-2 text-fluid-sm text-muted-light">
                          <span className="text-accent-purple">{conf.venue}</span>
                          <span>•</span>
                          <span>
                            {conf.month} {conf.year}
                          </span>
                        </div>
                        {conf.description && <p className="text-fluid-sm text-muted-light mt-fluid-2">{conf.description}</p>}
                      </div>
                      <Badge variant="outline" className="border-accent/30 text-accent w-fit text-fluid-sm">
                        {conf.type}
                      </Badge>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div>
            <h3 className="text-fluid-3xl font-bold mb-fluid-6 text-accent">Research Awards</h3>
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
                        {award.topic && <p className="text-fluid-sm text-gray-300 mb-fluid-1">Topic: {award.topic}</p>}
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

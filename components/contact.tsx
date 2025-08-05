"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send, Calendar } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"
import emailjs from '@emailjs/browser'

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // EmailJS configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'golakiyaayush29@gmail.com'
      }

      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey)

      if (result.status === 200) {
        toast.success('Thank you for your message! I will get back to you soon.')
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        toast.error('Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('EmailJS error:', error)
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <section id="contact" className="section-fluid relative w-full">
      <div className="container-fluid w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-fluid-5xl font-bold mb-fluid-16 text-center text-gradient-purple">
            Let's Build Something Amazing
          </h2>

          <div className="grid-fluid-2">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="card-fluid bg-card/50 backdrop-blur-sm border-border h-full hover-scale">
                <h3 className="text-fluid-3xl font-bold mb-fluid-8 text-accent hover-glow-purple">Get In Touch</h3>

                <div className="space-fluid-8 mb-fluid-12">
                  <div className="flex items-center space-fluid-4">
                    <div className="p-fluid-3 rounded-lg bg-accent/10 border border-accent/20">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-primary-light text-fluid-lg">Email</p>
                      <a
                        href="mailto:golakiyaayush29@gmail.com"
                        className="text-secondary-light hover:text-accent transition-colors duration-200 hover-glow-purple text-fluid-base"
                      >
                        golakiyaayush29@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-fluid-4">
                    <div className="p-fluid-3 rounded-lg bg-accent/10 border border-accent/20">
                      <Calendar className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-primary-light text-fluid-lg">Availability</p>
                      <p className="text-secondary-light text-fluid-base">Open for collaborations & opportunities</p>
                    </div>
                  </div>
                </div>

                <div className="card-fluid rounded-xl bg-gradient-to-r from-accent/5 to-accent-secondary/5 border border-accent/20">
                  <h4 className="font-bold text-accent mb-fluid-3 text-fluid-lg hover-glow-purple">Currently Available For:</h4>
                  <ul className="text-fluid-sm text-muted-light space-fluid-2">
                    <li>• AI/ML Engineering Roles</li>
                    <li>• Full-Stack Development Projects</li>
                    <li>• Research Collaborations</li>
                    <li>• Consulting & Technical Advisory</li>
                  </ul>
                </div>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="card-fluid bg-card/50 backdrop-blur-sm border-border h-full hover-scale">
                <h3 className="text-fluid-3xl font-bold mb-fluid-8 text-accent hover-glow-purple">Send a Message</h3>

                <form onSubmit={handleSubmit} className="space-fluid-6">
                  <div className="grid sm:grid-cols-2 space-fluid-4">
                    <div>
                      <label htmlFor="name" className="block text-fluid-sm font-medium mb-fluid-2 text-primary-light">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                        className="bg-background/50 border-border focus:border-accent transition-colors duration-200 text-primary-light placeholder:text-muted-light h-12 text-fluid-base"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-fluid-sm font-medium mb-fluid-2 text-primary-light">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                        className="bg-background/50 border-border focus:border-accent transition-colors duration-200 text-primary-light placeholder:text-muted-light h-12 text-fluid-base"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-fluid-sm font-medium mb-fluid-2 text-primary-light">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                      className="bg-background/50 border-border focus:border-accent transition-colors duration-200 text-primary-light placeholder:text-muted-light h-12 text-fluid-base"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-fluid-sm font-medium mb-fluid-2 text-primary-light">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or opportunity..."
                      rows={8}
                      required
                      className="bg-background/50 border-border focus:border-accent transition-colors duration-200 resize-none text-primary-light placeholder:text-muted-light text-fluid-base"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="button-fluid w-full bg-accent hover:bg-accent-secondary text-black font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/25 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-fluid-16"
          >
            <Card className="card-fluid bg-gradient-to-r from-accent/10 via-accent-secondary/10 to-accent/10 backdrop-blur-sm border-accent/20 hover-scale">
              <h3 className="text-fluid-3xl font-bold mb-fluid-6 text-gradient-purple">Ready to Collaborate?</h3>
              <p className="text-secondary-light mb-fluid-8 max-w-2xl mx-auto text-fluid-base leading-relaxed">
                Whether you're looking to build cutting-edge AI solutions, need technical leadership, or want to explore
                research opportunities, I'm here to help bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row space-fluid-4 justify-center">
                <Button
                  className="button-fluid bg-accent hover:bg-accent-secondary text-black font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
                >
                  Schedule a Call
                </Button>
                <Button
                  variant="outline"
                  className="button-fluid border-accent text-accent hover:bg-accent hover:text-black rounded-full transition-all duration-300 hover:scale-105 bg-transparent hover:shadow-lg hover:shadow-accent/25"
                >
                  View Resume
                </Button>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

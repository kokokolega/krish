"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#",
      details:
        "A comprehensive e-commerce platform featuring user authentication, product management, shopping cart functionality, and secure payment processing. Built with modern technologies and optimized for performance.",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      github: "#",
      live: "#",
      details:
        "A real-time collaborative task management application that allows teams to organize projects, assign tasks, and track progress. Features include drag-and-drop functionality, real-time notifications, and team collaboration tools.",
    },
    {
      id: 3,
      title: "AI-Powered Analytics Dashboard",
      description: "An intelligent analytics dashboard with machine learning insights",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Python", "TensorFlow", "D3.js"],
      github: "#",
      live: "#",
      details:
        "An advanced analytics dashboard that leverages machine learning to provide intelligent insights from data. Features interactive visualizations, predictive analytics, and automated reporting capabilities.",
    },
    {
      id: 4,
      title: "Social Media Mobile App",
      description: "A cross-platform social media app built with React Native",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React Native", "Firebase", "Redux", "Expo"],
      github: "#",
      live: "#",
      details:
        "A feature-rich social media application for iOS and Android platforms. Includes user profiles, photo sharing, real-time messaging, and social interactions with a focus on user experience and performance.",
    },
    {
      id: 5,
      title: "Blockchain Voting System",
      description: "A secure voting system built on blockchain technology",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Solidity", "Web3.js", "React", "Ethereum"],
      github: "#",
      live: "#",
      details:
        "A decentralized voting system that ensures transparency and security through blockchain technology. Features smart contracts, voter verification, and immutable vote recording.",
    },
    {
      id: 6,
      title: "Weather Forecast App",
      description: "A beautiful weather app with detailed forecasts and animations",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Vue.js", "API Integration", "CSS Animations", "PWA"],
      github: "#",
      live: "#",
      details:
        "A progressive web application that provides detailed weather forecasts with beautiful animations and intuitive user interface. Features location-based weather, extended forecasts, and offline capabilities.",
    },
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">A showcase of my recent work and creative solutions</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="glass rounded-2xl overflow-hidden hover:neon-glow transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/60 mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 glass border-white/20 text-white hover:bg-white/10"
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(project.github, "_blank")
                    }}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(project.live, "_blank")
                    }}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl glass border-white/20">
          {selectedProject && (
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
                  <p className="text-white/60">{selectedProject.description}</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedProject(null)}
                  className="text-white hover:bg-white/10"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg"
              />

              <p className="text-white/80 leading-relaxed">{selectedProject.details}</p>

              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="glass border-white/20 text-white hover:bg-white/10"
                  onClick={() => window.open(selectedProject.github, "_blank")}
                >
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </Button>
                <Button
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                  onClick={() => window.open(selectedProject.live, "_blank")}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

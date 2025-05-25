"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, X, Play, Star, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export function EnhancedProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "fullstack",
      github: "#",
      live: "#",
      featured: true,
      stats: { stars: 124, views: 2340, forks: 45 },
      details:
        "A comprehensive e-commerce platform featuring user authentication, product management, shopping cart functionality, and secure payment processing. Built with modern technologies and optimized for performance.",
      features: ["User Authentication", "Payment Processing", "Admin Dashboard", "Real-time Inventory"],
      tech: ["React", "Node.js", "Express", "MongoDB", "Stripe API", "JWT", "Socket.io"],
    },
    {
      id: 2,
      title: "AI-Powered Analytics Dashboard",
      description: "An intelligent analytics dashboard with machine learning insights",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Python", "TensorFlow", "D3.js"],
      category: "ai",
      github: "#",
      live: "#",
      featured: true,
      stats: { stars: 89, views: 1560, forks: 23 },
      details:
        "An advanced analytics dashboard that leverages machine learning to provide intelligent insights from data. Features interactive visualizations, predictive analytics, and automated reporting capabilities.",
      features: ["ML Predictions", "Interactive Charts", "Real-time Data", "Custom Reports"],
      tech: ["React", "Python", "TensorFlow", "D3.js", "FastAPI", "PostgreSQL"],
    },
    {
      id: 3,
      title: "Social Media Mobile App",
      description: "A cross-platform social media app built with React Native",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React Native", "Firebase", "Redux", "Expo"],
      category: "mobile",
      github: "#",
      live: "#",
      featured: false,
      stats: { stars: 67, views: 890, forks: 12 },
      details:
        "A feature-rich social media application for iOS and Android platforms. Includes user profiles, photo sharing, real-time messaging, and social interactions with a focus on user experience and performance.",
      features: ["Photo Sharing", "Real-time Chat", "Push Notifications", "Social Feed"],
      tech: ["React Native", "Firebase", "Redux", "Expo", "AsyncStorage"],
    },
    {
      id: 4,
      title: "Blockchain Voting System",
      description: "A secure voting system built on blockchain technology",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Solidity", "Web3.js", "React", "Ethereum"],
      category: "blockchain",
      github: "#",
      live: "#",
      featured: true,
      stats: { stars: 156, views: 3200, forks: 78 },
      details:
        "A decentralized voting system that ensures transparency and security through blockchain technology. Features smart contracts, voter verification, and immutable vote recording.",
      features: ["Smart Contracts", "Voter Verification", "Immutable Records", "Transparent Results"],
      tech: ["Solidity", "Web3.js", "React", "Ethereum", "MetaMask", "Truffle"],
    },
    {
      id: 5,
      title: "Weather Forecast App",
      description: "A beautiful weather app with detailed forecasts and animations",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Vue.js", "API Integration", "CSS Animations", "PWA"],
      category: "frontend",
      github: "#",
      live: "#",
      featured: false,
      stats: { stars: 43, views: 670, forks: 8 },
      details:
        "A progressive web application that provides detailed weather forecasts with beautiful animations and intuitive user interface. Features location-based weather, extended forecasts, and offline capabilities.",
      features: ["Location-based Weather", "7-day Forecast", "Offline Support", "Beautiful Animations"],
      tech: ["Vue.js", "OpenWeather API", "Service Workers", "CSS3", "Geolocation API"],
    },
    {
      id: 6,
      title: "Task Management System",
      description: "A collaborative task management application with real-time updates",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      category: "fullstack",
      github: "#",
      live: "#",
      featured: false,
      stats: { stars: 92, views: 1340, forks: 34 },
      details:
        "A real-time collaborative task management application that allows teams to organize projects, assign tasks, and track progress. Features include drag-and-drop functionality, real-time notifications, and team collaboration tools.",
      features: ["Drag & Drop", "Real-time Updates", "Team Collaboration", "Progress Tracking"],
      tech: ["Next.js", "TypeScript", "Prisma", "Socket.io", "PostgreSQL", "Tailwind CSS"],
    },
  ]

  const categories = [
    { id: "all", label: "All Projects", count: projects.length },
    { id: "fullstack", label: "Full Stack", count: projects.filter((p) => p.category === "fullstack").length },
    { id: "frontend", label: "Frontend", count: projects.filter((p) => p.category === "frontend").length },
    { id: "mobile", label: "Mobile", count: projects.filter((p) => p.category === "mobile").length },
    { id: "ai", label: "AI/ML", count: projects.filter((p) => p.category === "ai").length },
    { id: "blockchain", label: "Blockchain", count: projects.filter((p) => p.category === "blockchain").length },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.category === filter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-xl text-white/60 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A showcase of my recent work and creative solutions
          </motion.p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category.id
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                  : "glass text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              {category.label}
              <span className="ml-2 text-xs opacity-60">({category.count})</span>
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  z: 50,
                }}
                className="glass rounded-2xl overflow-hidden hover:neon-glow transition-all duration-300 cursor-pointer group relative"
                onClick={() => setSelectedProject(project)}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Featured badge */}
                {project.featured && (
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    className="absolute top-4 right-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1"
                  >
                    <Star className="h-3 w-3" />
                    Featured
                  </motion.div>
                )}

                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                  />

                  {/* Overlay with play button */}
                  <motion.div
                    className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                    >
                      <Play className="h-8 w-8 text-white ml-1" />
                    </motion.div>
                  </motion.div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="p-6">
                  <motion.h3
                    className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p
                    className="text-white/60 mb-4 line-clamp-2"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.1 }}
                  >
                    {project.description}
                  </motion.p>

                  {/* Project stats */}
                  <motion.div
                    className="flex items-center gap-4 mb-4 text-xs text-white/40"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      {project.stats.stars}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {project.stats.views}
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex flex-wrap gap-2 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + tagIndex * 0.05 + 0.4 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30"
                      >
                        {tag}
                      </motion.span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-3 py-1 text-xs rounded-full bg-gray-500/20 text-gray-300 border border-gray-500/30">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </motion.div>

                  <motion.div
                    className="flex gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full glass border-white/20 text-white hover:bg-white/10"
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(project.github, "_blank")
                        }}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                      <Button
                        size="sm"
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(project.live, "_blank")
                        }}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Hover particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100"
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${30 + i * 20}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Enhanced Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
            <DialogContent className="max-w-6xl glass border-white/20 p-0 overflow-hidden">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                {/* Header with image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                  <motion.button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 glass rounded-full hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="h-5 w-5 text-white" />
                  </motion.button>

                  <div className="absolute bottom-6 left-6 right-6">
                    <motion.h3
                      className="text-3xl font-bold text-white mb-2"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {selectedProject.title}
                    </motion.h3>
                    <motion.p
                      className="text-white/80"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {selectedProject.description}
                    </motion.p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-8">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h4 className="text-xl font-bold text-white mb-4">Project Overview</h4>
                    <p className="text-white/80 leading-relaxed">{selectedProject.details}</p>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <h4 className="text-lg font-bold text-white mb-4">Key Features</h4>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature: string, index: number) => (
                          <motion.li
                            key={feature}
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.6 + index * 0.1 }}
                            className="flex items-center gap-2 text-white/70"
                          >
                            <div className="w-2 h-2 bg-purple-400 rounded-full" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    <motion.div
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <h4 className="text-lg font-bold text-white mb-4">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((tech: string, index: number) => (
                          <motion.span
                            key={tech}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.7 + index * 0.05 }}
                            className="px-3 py-1 text-sm rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    className="flex gap-4 pt-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <Button
                      variant="outline"
                      className="glass border-white/20 text-white hover:bg-white/10"
                      onClick={() => window.open(selectedProject.github, "_blank")}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </Button>
                    <Button
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                      onClick={() => window.open(selectedProject.live, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  )
}

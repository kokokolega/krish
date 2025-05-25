"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Database, Globe, Smartphone, Server, Palette } from "lucide-react"

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Server,
      title: "Backend Development",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: ["React Native", "Flutter", "iOS", "Android", "Expo"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Database,
      title: "DevOps & Cloud",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Palette,
      title: "Design & UX",
      skills: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research"],
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Globe,
      title: "Web Technologies",
      skills: ["HTML5", "CSS3", "JavaScript", "WebGL", "PWA"],
      color: "from-indigo-500 to-blue-500",
    },
  ]

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="glass rounded-2xl p-6 hover:neon-glow transition-all duration-300"
            >
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mb-6`}
              >
                <category.icon className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>

              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + skillIndex * 0.05 }}
                    className="flex items-center justify-between"
                  >
                    <span className="text-white/80">{skill}</span>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${Math.random() * 30 + 70}%` } : {}}
                      transition={{ duration: 1, delay: index * 0.1 + skillIndex * 0.1 }}
                      className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { Code2, Database, Smartphone, Server, Palette, Zap, Brain } from "lucide-react"

export function EnhancedSkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      skills: [
        { name: "React", level: 95, color: "#61DAFB" },
        { name: "Next.js", level: 90, color: "#000000" },
        { name: "TypeScript", level: 88, color: "#3178C6" },
        { name: "Tailwind CSS", level: 92, color: "#06B6D4" },
        { name: "Framer Motion", level: 85, color: "#FF0055" },
      ],
      color: "from-blue-500 to-cyan-500",
      description: "Creating stunning user interfaces with modern frameworks",
    },
    {
      icon: Server,
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 90, color: "#339933" },
        { name: "Python", level: 85, color: "#3776AB" },
        { name: "PostgreSQL", level: 88, color: "#336791" },
        { name: "MongoDB", level: 82, color: "#47A248" },
        { name: "GraphQL", level: 80, color: "#E10098" },
      ],
      color: "from-green-500 to-emerald-500",
      description: "Building robust and scalable server-side solutions",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: [
        { name: "React Native", level: 87, color: "#61DAFB" },
        { name: "Flutter", level: 75, color: "#02569B" },
        { name: "iOS", level: 70, color: "#000000" },
        { name: "Android", level: 72, color: "#3DDC84" },
        { name: "Expo", level: 85, color: "#000020" },
      ],
      color: "from-purple-500 to-pink-500",
      description: "Cross-platform mobile applications that users love",
    },
    {
      icon: Database,
      title: "DevOps & Cloud",
      skills: [
        { name: "AWS", level: 83, color: "#FF9900" },
        { name: "Docker", level: 88, color: "#2496ED" },
        { name: "Kubernetes", level: 75, color: "#326CE5" },
        { name: "CI/CD", level: 85, color: "#4CAF50" },
        { name: "Terraform", level: 78, color: "#623CE4" },
      ],
      color: "from-orange-500 to-red-500",
      description: "Deploying and managing applications at scale",
    },
    {
      icon: Palette,
      title: "Design & UX",
      skills: [
        { name: "Figma", level: 90, color: "#F24E1E" },
        { name: "Adobe XD", level: 85, color: "#FF61F6" },
        { name: "Sketch", level: 80, color: "#F7B500" },
        { name: "Prototyping", level: 88, color: "#9C27B0" },
        { name: "User Research", level: 82, color: "#2196F3" },
      ],
      color: "from-pink-500 to-rose-500",
      description: "Designing intuitive and beautiful user experiences",
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      skills: [
        { name: "TensorFlow", level: 75, color: "#FF6F00" },
        { name: "PyTorch", level: 70, color: "#EE4C2C" },
        { name: "OpenAI API", level: 85, color: "#412991" },
        { name: "Computer Vision", level: 72, color: "#00BCD4" },
        { name: "NLP", level: 78, color: "#4CAF50" },
      ],
      color: "from-indigo-500 to-purple-500",
      description: "Integrating AI to create intelligent applications",
    },
  ]

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
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div style={{ y }} className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <Zap className="h-8 w-8 text-yellow-400" />
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <Zap className="h-8 w-8 text-yellow-400" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/60 max-w-2xl mx-auto"
          >
            A comprehensive toolkit for building modern digital experiences
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                z: 50,
              }}
              onHoverStart={() => setHoveredSkill(index)}
              onHoverEnd={() => setHoveredSkill(null)}
              className="glass rounded-2xl p-6 hover:neon-glow transition-all duration-300 relative overflow-hidden group"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Animated background gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10`}
                initial={{ scale: 0, rotate: 0 }}
                whileHover={{ scale: 1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              />

              <motion.div
                className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mb-6 relative`}
                whileHover={{
                  rotate: 360,
                  scale: 1.1,
                }}
                transition={{ duration: 0.6 }}
              >
                <category.icon className="h-8 w-8 text-white" />

                {/* Pulsing ring */}
                <motion.div
                  className={`absolute inset-0 rounded-full bg-gradient-to-r ${category.color}`}
                  animate={
                    hoveredSkill === index
                      ? {
                          scale: [1, 1.3, 1],
                          opacity: [0.5, 0, 0.5],
                        }
                      : {}
                  }
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                />
              </motion.div>

              <motion.h3
                className="text-xl font-bold text-white mb-2"
                initial={{ x: -20, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              >
                {category.title}
              </motion.h3>

              <motion.p
                className="text-white/60 text-sm mb-6"
                initial={{ x: -20, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
              >
                {category.description}
              </motion.p>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1 + skillIndex * 0.05 + 0.5,
                    }}
                    className="group/skill"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white/80 text-sm flex items-center gap-2">
                        <motion.div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: skill.color }}
                          whileHover={{ scale: 1.5 }}
                        />
                        {skill.name}
                      </span>
                      <motion.span
                        className="text-white/60 text-xs"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + skillIndex * 0.05 + 0.8 }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>

                    <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="absolute inset-y-0 left-0 rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                        }}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1.5,
                          delay: index * 0.1 + skillIndex * 0.1 + 0.6,
                          ease: "easeOut",
                        }}
                      />

                      {/* Animated shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: "-100%" }}
                        animate={isInView ? { x: "100%" } : {}}
                        transition={{
                          duration: 1,
                          delay: index * 0.1 + skillIndex * 0.1 + 1.5,
                          ease: "easeInOut",
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Floating particles on hover */}
              {hoveredSkill === index && (
                <>
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full"
                      initial={{
                        x: Math.random() * 100,
                        y: Math.random() * 100,
                        opacity: 0,
                      }}
                      animate={{
                        x: Math.random() * 200 - 100,
                        y: Math.random() * 200 - 100,
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

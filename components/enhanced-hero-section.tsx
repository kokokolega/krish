"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DynamicBackground } from "@/components/dynamic-background"
import { useRef, useEffect, useState } from "react"

export function EnhancedHeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const x = useSpring(0, springConfig)
  const rotateX = useSpring(0, springConfig)
  const rotateY = useSpring(0, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = ref.current?.getBoundingClientRect()
      if (rect) {
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const rotateXValue = (e.clientY - centerY) / 20
        const rotateYValue = (centerX - e.clientX) / 20

        setMousePosition({ x: e.clientX, y: e.clientY })
        rotateX.set(rotateXValue)
        rotateY.set(rotateYValue)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [rotateX, rotateY])

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    }),
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    }),
  }

  const name = "Alex Chen"

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <DynamicBackground />

      <motion.div className="container mx-auto px-4 text-center z-10" style={{ y, opacity, scale }}>
        <motion.div className="max-w-4xl mx-auto" style={{ rotateX, rotateY, transformPerspective: 1000 }}>
          {/* Animated name with individual letter animations */}
          <motion.h1 className="text-6xl md:text-8xl font-bold mb-6 relative">
            <motion.div className="flex justify-center items-center gap-2 flex-wrap">
              {name.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{
                    scale: 1.2,
                    color: "#8B5CF6",
                    textShadow: "0 0 20px rgba(139, 92, 246, 0.8)",
                  }}
                  className="inline-block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent cursor-pointer"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.div>

            {/* Floating icons around name */}
            <motion.div
              className="absolute -top-8 -left-8"
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                scale: { duration: 2, repeat: Number.POSITIVE_INFINITY },
              }}
            >
              <Code2 className="h-8 w-8 text-blue-400 opacity-60" />
            </motion.div>

            <motion.div
              className="absolute -top-4 -right-12"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="h-6 w-6 text-purple-400 opacity-60" />
            </motion.div>
          </motion.h1>

          <motion.div custom={1} variants={textVariants} initial="hidden" animate="visible" className="relative">
            <motion.p className="text-xl md:text-2xl text-white/80 mb-8" whileHover={{ scale: 1.05 }}>
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-[length:200%_auto] bg-clip-text text-transparent"
              >
                Full Stack Developer & UI/UX Enthusiast
              </motion.span>
            </motion.p>
          </motion.div>

          <motion.p
            custom={2}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-lg text-white/60 mb-12 max-w-2xl mx-auto"
          >
            Crafting beautiful, functional, and user-centered digital experiences with modern technologies and creative
            problem-solving.
          </motion.p>

          <motion.div
            custom={3}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="glass neon-glow relative overflow-hidden group"
                data-cursor-text="View Work"
                data-cursor-variant="hover"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">View My Work</span>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="glass border-white/20 text-white hover:bg-white/10 relative overflow-hidden group"
                data-cursor-text="Download"
                data-cursor-variant="hover"
              >
                <motion.div
                  className="absolute inset-0 bg-white/10"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Download CV</span>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            custom={4}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center justify-center gap-6"
          >
            {[
              { icon: Github, href: "#", color: "from-gray-400 to-gray-600" },
              { icon: Linkedin, href: "#", color: "from-blue-400 to-blue-600" },
              { icon: Mail, href: "#", color: "from-red-400 to-red-600" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{
                  scale: 1.2,
                  rotate: [0, -10, 10, 0],
                  y: -5,
                }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 glass rounded-full hover:neon-glow transition-all relative overflow-hidden group`}
                data-cursor-text={social.icon.name}
                data-cursor-variant="hover"
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-20`}
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <social.icon className="h-6 w-6 text-white relative z-10" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-white/60 text-sm">Scroll to explore</span>
            <motion.div whileHover={{ scale: 1.2 }} className="p-2 glass rounded-full">
              <ArrowDown className="h-6 w-6 text-white/60" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.3, 0.8, 0.3],
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-400 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.4, 0.9, 0.4],
          x: [0, -80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </section>
  )
}

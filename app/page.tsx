"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { EnhancedHeroSection } from "@/components/enhanced-hero-section"
import { EnhancedSkillsSection } from "@/components/enhanced-skills-section"
import { EnhancedProjectsSection } from "@/components/enhanced-projects-section"
import { BlogSection } from "@/components/blog-section"
import { ContactSection } from "@/components/contact-section"
import { LoadingScreen } from "@/components/loading-screen"
import { AdvancedCursor } from "@/components/advanced-cursor"
import { ScrollProgress } from "@/components/scroll-progress"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AdvancedCursor />
      <ScrollProgress />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
          >
            <Navigation />
            <main>
              <EnhancedHeroSection />
              <EnhancedSkillsSection />
              <EnhancedProjectsSection />
              <BlogSection />
              <ContactSection />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function AdvancedCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [cursorText, setCursorText] = useState("")
  const [cursorVariant, setCursorVariant] = useState("default")

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
      setIsVisible(true)
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => {
      setIsHovering(false)
      setCursorText("")
      setCursorVariant("default")
    }

    window.addEventListener("mousemove", moveCursor)

    // Enhanced cursor interactions
    const interactiveElements = document.querySelectorAll("button, a, [data-cursor]")
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)

      // Custom cursor text
      el.addEventListener("mouseenter", () => {
        const text = el.getAttribute("data-cursor-text")
        const variant = el.getAttribute("data-cursor-variant") || "hover"
        if (text) setCursorText(text)
        setCursorVariant(variant)
      })
    })

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [cursorX, cursorY])

  const variants = {
    default: {
      scale: 1,
      backgroundColor: "rgba(59, 130, 246, 0.8)",
      mixBlendMode: "difference" as const,
    },
    hover: {
      scale: 1.5,
      backgroundColor: "rgba(168, 85, 247, 0.8)",
      mixBlendMode: "difference" as const,
    },
    click: {
      scale: 0.8,
      backgroundColor: "rgba(239, 68, 68, 0.8)",
    },
    text: {
      scale: 2,
      backgroundColor: "rgba(34, 197, 94, 0.2)",
      border: "2px solid rgba(34, 197, 94, 0.8)",
    },
  }

  if (!isVisible) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] flex items-center justify-center"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={variants[cursorVariant as keyof typeof variants]}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-xs font-bold text-white whitespace-nowrap"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Trailing particles */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9998] bg-blue-400 opacity-60"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.05 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 rounded-full pointer-events-none z-[9997] bg-purple-400 opacity-40"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
      />
    </>
  )
}

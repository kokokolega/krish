"use client"

import { motion } from "framer-motion"
import { Code2, Sparkles } from "lucide-react"

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      <div className="text-center">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            scale: { duration: 1, repeat: Number.POSITIVE_INFINITY },
          }}
          className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-blue-500/20 backdrop-blur-sm"
        >
          <Code2 className="h-10 w-10 text-blue-400" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-4 text-4xl font-bold text-white"
        >
          Alex Chen
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-blue-300 flex items-center justify-center gap-2"
        >
          <Sparkles className="h-4 w-4" />
          Crafting Digital Experiences
          <Sparkles className="h-4 w-4" />
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.6, duration: 1.5 }}
          className="mx-auto mt-8 h-1 w-64 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
        />
      </div>
    </motion.div>
  )
}

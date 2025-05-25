"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, Eye, MessageSquare } from "lucide-react"

export function AnalyticsDashboard() {
  const stats = [
    { label: "Total Views", value: "12,345", change: "+12%", icon: Eye },
    { label: "Unique Visitors", value: "8,901", change: "+8%", icon: Users },
    { label: "Project Views", value: "2,456", change: "+15%", icon: TrendingUp },
    { label: "Messages", value: "89", change: "+23%", icon: MessageSquare },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard Overview</h1>
        <p className="text-white/60">Welcome back! Here's what's happening with your portfolio.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass rounded-xl p-6 hover:neon-glow transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <span className="text-green-400 text-sm font-medium">{stat.change}</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
            <p className="text-white/60 text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass rounded-xl p-6"
        >
          <h3 className="text-xl font-bold text-white mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { action: "New project view", time: "2 minutes ago", type: "view" },
              { action: "Contact form submission", time: "1 hour ago", type: "message" },
              { action: "Blog post published", time: "3 hours ago", type: "publish" },
              { action: "Profile updated", time: "1 day ago", type: "update" },
            ].map((activity, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                <div className="w-2 h-2 rounded-full bg-blue-400" />
                <div className="flex-1">
                  <p className="text-white text-sm">{activity.action}</p>
                  <p className="text-white/40 text-xs">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="glass rounded-xl p-6"
        >
          <h3 className="text-xl font-bold text-white mb-4">Popular Projects</h3>
          <div className="space-y-4">
            {[
              { name: "E-Commerce Platform", views: 1234, percentage: 85 },
              { name: "Task Management App", views: 987, percentage: 70 },
              { name: "AI Analytics Dashboard", views: 756, percentage: 55 },
              { name: "Social Media App", views: 543, percentage: 40 },
            ].map((project, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white text-sm">{project.name}</span>
                  <span className="text-white/60 text-xs">{project.views} views</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${project.percentage}%` }}
                    transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

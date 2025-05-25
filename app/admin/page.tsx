"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { AdminHeader } from "@/components/admin/admin-header"
import { ProjectsManager } from "@/components/admin/projects-manager"
import { BlogManager } from "@/components/admin/blog-manager"
import { ProfileManager } from "@/components/admin/profile-manager"
import { AnalyticsDashboard } from "@/components/admin/analytics-dashboard"

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("dashboard")

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <AnalyticsDashboard />
      case "projects":
        return <ProjectsManager />
      case "blog":
        return <BlogManager />
      case "profile":
        return <ProfileManager />
      default:
        return <AnalyticsDashboard />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="flex">
        <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="flex-1 ml-64">
          <AdminHeader />

          <main className="p-8">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {renderContent()}
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  )
}

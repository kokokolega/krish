"use client"

import { motion } from "framer-motion"
import { BarChart3, FileText, FolderOpen, Settings, User, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AdminSidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export function AdminSidebar({ activeTab, setActiveTab }: AdminSidebarProps) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "blog", label: "Blog Posts", icon: FileText },
    { id: "profile", label: "Profile", icon: User },
    { id: "settings", label: "Settings", icon: Settings },
  ]

  return (
    <motion.aside
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      className="fixed left-0 top-0 h-screen w-64 glass border-r border-white/10 p-6"
    >
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white neon-text">Admin Panel</h1>
        <p className="text-white/60 text-sm">Content Management</p>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Button
            key={item.id}
            variant={activeTab === item.id ? "default" : "ghost"}
            className={`w-full justify-start text-left ${
              activeTab === item.id
                ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                : "text-white/70 hover:text-white hover:bg-white/10"
            }`}
            onClick={() => setActiveTab(item.id)}
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.label}
          </Button>
        ))}
      </nav>

      <div className="absolute bottom-6 left-6 right-6">
        <Button
          variant="outline"
          className="w-full glass border-white/20 text-white hover:bg-white/10"
          onClick={() => window.open("/", "_blank")}
        >
          <Home className="h-4 w-4 mr-2" />
          View Site
        </Button>
      </div>
    </motion.aside>
  )
}

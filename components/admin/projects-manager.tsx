"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Plus, Edit, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"

export function ProjectsManager() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      github: "#",
      live: "#",
      featured: true,
    },
  ])

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingProject, setEditingProject] = useState<any>(null)
  const { toast } = useToast()

  const handleSave = (projectData: any) => {
    if (editingProject) {
      setProjects(projects.map((p) => (p.id === editingProject.id ? { ...projectData, id: editingProject.id } : p)))
      toast({ title: "Project updated successfully!" })
    } else {
      setProjects([...projects, { ...projectData, id: Date.now() }])
      toast({ title: "Project created successfully!" })
    }
    setIsDialogOpen(false)
    setEditingProject(null)
  }

  const handleDelete = (id: number) => {
    setProjects(projects.filter((p) => p.id !== id))
    toast({ title: "Project deleted successfully!" })
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Projects Manager</h1>
          <p className="text-white/60">Manage your portfolio projects</p>
        </div>
        <Button
          onClick={() => {
            setEditingProject(null)
            setIsDialogOpen(true)
          }}
          className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Project
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass rounded-xl overflow-hidden"
          >
            <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-white">{project.title}</h3>
                {project.featured && (
                  <span className="px-2 py-1 text-xs rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">
                    Featured
                  </span>
                )}
              </div>
              <p className="text-white/60 text-sm mb-4 line-clamp-2">{project.description}</p>

              <div className="flex flex-wrap gap-1 mb-4">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="px-2 py-1 text-xs rounded-full bg-gray-500/20 text-gray-300 border border-gray-500/30">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>

              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 glass border-white/20 text-white hover:bg-white/10"
                  onClick={() => {
                    setEditingProject(project)
                    setIsDialogOpen(true)
                  }}
                >
                  <Edit className="h-3 w-3 mr-1" />
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="glass border-red-500/30 text-red-300 hover:bg-red-500/10"
                  onClick={() => handleDelete(project.id)}
                >
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <ProjectDialog
        isOpen={isDialogOpen}
        onClose={() => {
          setIsDialogOpen(false)
          setEditingProject(null)
        }}
        onSave={handleSave}
        project={editingProject}
      />
    </div>
  )
}

function ProjectDialog({ isOpen, onClose, onSave, project }: any) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    tags: "",
    github: "",
    live: "",
    featured: false,
    ...project,
    tags: project?.tags?.join(", ") || "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave({
      ...formData,
      tags: formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl glass border-white/20">
        <DialogHeader>
          <DialogTitle className="text-white">{project ? "Edit Project" : "Add New Project"}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white/80 text-sm font-medium mb-2">Title</label>
            <Input
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="glass border-white/20 text-white placeholder:text-white/40"
              placeholder="Project title"
            />
          </div>

          <div>
            <label className="block text-white/80 text-sm font-medium mb-2">Description</label>
            <Textarea
              required
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="glass border-white/20 text-white placeholder:text-white/40"
              placeholder="Project description"
              rows={3}
            />
          </div>

          <div>
            <label className="block text-white/80 text-sm font-medium mb-2">Image URL</label>
            <Input
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              className="glass border-white/20 text-white placeholder:text-white/40"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div>
            <label className="block text-white/80 text-sm font-medium mb-2">Tags (comma-separated)</label>
            <Input
              value={formData.tags}
              onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
              className="glass border-white/20 text-white placeholder:text-white/40"
              placeholder="React, Node.js, MongoDB"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">GitHub URL</label>
              <Input
                value={formData.github}
                onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                className="glass border-white/20 text-white placeholder:text-white/40"
                placeholder="https://github.com/..."
              />
            </div>
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">Live URL</label>
              <Input
                value={formData.live}
                onChange={(e) => setFormData({ ...formData, live: e.target.value })}
                className="glass border-white/20 text-white placeholder:text-white/40"
                placeholder="https://project.com"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="featured"
              checked={formData.featured}
              onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
              className="rounded border-white/20"
            />
            <label htmlFor="featured" className="text-white/80 text-sm">
              Featured project
            </label>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 glass border-white/20 text-white hover:bg-white/10"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
            >
              {project ? "Update" : "Create"} Project
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

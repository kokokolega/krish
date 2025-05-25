"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Plus, Edit, Trash2, Eye, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"

export function BlogManager() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Exploring the latest trends and technologies shaping the future of web development...",
      content: "Full blog post content here...",
      date: "2024-01-15",
      category: "Technology",
      published: true,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Building Scalable React Applications: Best Practices",
      excerpt: "A comprehensive guide to building maintainable and scalable React applications...",
      content: "Full blog post content here...",
      date: "2024-01-10",
      category: "React",
      published: true,
      image: "/placeholder.svg?height=200&width=300",
    },
  ])

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingPost, setEditingPost] = useState<any>(null)
  const { toast } = useToast()

  const handleSave = (postData: any) => {
    if (editingPost) {
      setPosts(posts.map((p) => (p.id === editingPost.id ? { ...postData, id: editingPost.id } : p)))
      toast({ title: "Blog post updated successfully!" })
    } else {
      setPosts([...posts, { ...postData, id: Date.now(), date: new Date().toISOString().split("T")[0] }])
      toast({ title: "Blog post created successfully!" })
    }
    setIsDialogOpen(false)
    setEditingPost(null)
  }

  const handleDelete = (id: number) => {
    setPosts(posts.filter((p) => p.id !== id))
    toast({ title: "Blog post deleted successfully!" })
  }

  const togglePublished = (id: number) => {
    setPosts(posts.map((p) => (p.id === id ? { ...p, published: !p.published } : p)))
    toast({ title: "Post status updated!" })
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Blog Manager</h1>
          <p className="text-white/60">Create and manage your blog posts</p>
        </div>
        <Button
          onClick={() => {
            setEditingPost(null)
            setIsDialogOpen(true)
          }}
          className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
        >
          <Plus className="h-4 w-4 mr-2" />
          New Post
        </Button>
      </div>

      <div className="space-y-4">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass rounded-xl p-6"
          >
            <div className="flex gap-6">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-32 h-24 object-cover rounded-lg"
              />

              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{post.title}</h3>
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-3 py-1 text-xs rounded-full ${
                        post.published
                          ? "bg-green-500/20 text-green-300 border border-green-500/30"
                          : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                      }`}
                    >
                      {post.published ? "Published" : "Draft"}
                    </span>
                    <span className="px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      {post.category}
                    </span>
                  </div>
                </div>

                <p className="text-white/60 mb-3 line-clamp-2">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-white/40 text-sm">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="glass border-white/20 text-white hover:bg-white/10"
                      onClick={() => togglePublished(post.id)}
                    >
                      <Eye className="h-3 w-3 mr-1" />
                      {post.published ? "Unpublish" : "Publish"}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="glass border-white/20 text-white hover:bg-white/10"
                      onClick={() => {
                        setEditingPost(post)
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
                      onClick={() => handleDelete(post.id)}
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <BlogDialog
        isOpen={isDialogOpen}
        onClose={() => {
          setIsDialogOpen(false)
          setEditingPost(null)
        }}
        onSave={handleSave}
        post={editingPost}
      />
    </div>
  )
}

function BlogDialog({ isOpen, onClose, onSave, post }: any) {
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    image: "",
    published: false,
    ...post,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl glass border-white/20 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-white">{post ? "Edit Blog Post" : "Create New Blog Post"}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white/80 text-sm font-medium mb-2">Title</label>
            <Input
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="glass border-white/20 text-white placeholder:text-white/40"
              placeholder="Blog post title"
            />
          </div>

          <div>
            <label className="block text-white/80 text-sm font-medium mb-2">Excerpt</label>
            <Textarea
              required
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              className="glass border-white/20 text-white placeholder:text-white/40"
              placeholder="Brief description of the post"
              rows={2}
            />
          </div>

          <div>
            <label className="block text-white/80 text-sm font-medium mb-2">Content</label>
            <Textarea
              required
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className="glass border-white/20 text-white placeholder:text-white/40"
              placeholder="Write your blog post content here..."
              rows={10}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">Category</label>
              <Input
                required
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="glass border-white/20 text-white placeholder:text-white/40"
                placeholder="Technology, React, Design, etc."
              />
            </div>
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">Featured Image URL</label>
              <Input
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="glass border-white/20 text-white placeholder:text-white/40"
                placeholder="https://example.com/image.jpg"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="published"
              checked={formData.published}
              onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
              className="rounded border-white/20"
            />
            <label htmlFor="published" className="text-white/80 text-sm">
              Publish immediately
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
              className="flex-1 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
            >
              {post ? "Update" : "Create"} Post
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

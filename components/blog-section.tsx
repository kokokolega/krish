"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BlogSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt:
        "Exploring the latest trends and technologies shaping the future of web development, from AI integration to new frameworks.",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "/placeholder.svg?height=300&width=400",
      category: "Technology",
    },
    {
      id: 2,
      title: "Building Scalable React Applications: Best Practices",
      excerpt:
        "A comprehensive guide to building maintainable and scalable React applications with modern patterns and tools.",
      date: "2024-01-10",
      readTime: "8 min read",
      image: "/placeholder.svg?height=300&width=400",
      category: "React",
    },
    {
      id: 3,
      title: "The Art of UI/UX Design: Creating Intuitive User Experiences",
      excerpt: "Diving deep into the principles of user-centered design and how to create interfaces that users love.",
      date: "2024-01-05",
      readTime: "6 min read",
      image: "/placeholder.svg?height=300&width=400",
      category: "Design",
    },
  ]

  return (
    <section id="blog" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Latest Insights
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights from my journey in tech
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="glass rounded-2xl overflow-hidden hover:neon-glow transition-all duration-300 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs rounded-full bg-green-500/20 text-green-300 border border-green-500/30">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-white/60 mb-4 line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center justify-between text-sm text-white/40 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>

                <Button variant="ghost" className="w-full justify-between text-white hover:bg-white/10 group">
                  Read More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="glass border-white/20 text-white hover:bg-white/10 hover:scale-105 transition-all"
          >
            View All Posts
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

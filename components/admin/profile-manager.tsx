"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Save, Upload, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export function ProfileManager() {
  const [profileData, setProfileData] = useState({
    name: "Alex Chen",
    title: "Full Stack Developer & UI/UX Enthusiast",
    bio: "Crafting beautiful, functional, and user-centered digital experiences with modern technologies and creative problem-solving.",
    email: "alex.chen@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    website: "https://alexchen.dev",
    github: "https://github.com/alexchen",
    linkedin: "https://linkedin.com/in/alexchen",
    avatar: "/placeholder.svg?height=200&width=200",
    resume: "",
    skills: [
      { category: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
      { category: "Backend", skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"] },
      { category: "Mobile", skills: ["React Native", "Flutter", "iOS", "Android", "Expo"] },
    ],
  })

  const { toast } = useToast()

  const handleSave = () => {
    // Simulate saving to backend
    toast({ title: "Profile updated successfully!" })
  }

  const handleSkillChange = (categoryIndex: number, skillIndex: number, value: string) => {
    const newSkills = [...profileData.skills]
    newSkills[categoryIndex].skills[skillIndex] = value
    setProfileData({ ...profileData, skills: newSkills })
  }

  const addSkill = (categoryIndex: number) => {
    const newSkills = [...profileData.skills]
    newSkills[categoryIndex].skills.push("")
    setProfileData({ ...profileData, skills: newSkills })
  }

  const removeSkill = (categoryIndex: number, skillIndex: number) => {
    const newSkills = [...profileData.skills]
    newSkills[categoryIndex].skills.splice(skillIndex, 1)
    setProfileData({ ...profileData, skills: newSkills })
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Profile Manager</h1>
          <p className="text-white/60">Update your personal information and skills</p>
        </div>
        <Button
          onClick={handleSave}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
        >
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Picture & Basic Info */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="glass rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-6">Profile Picture</h3>

          <div className="text-center mb-6">
            <img
              src={profileData.avatar || "/placeholder.svg"}
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <Button variant="outline" className="glass border-white/20 text-white hover:bg-white/10">
              <Upload className="h-4 w-4 mr-2" />
              Upload New Photo
            </Button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">Full Name</label>
              <Input
                value={profileData.name}
                onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                className="glass border-white/20 text-white placeholder:text-white/40"
              />
            </div>

            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">Professional Title</label>
              <Input
                value={profileData.title}
                onChange={(e) => setProfileData({ ...profileData, title: e.target.value })}
                className="glass border-white/20 text-white placeholder:text-white/40"
              />
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-xl p-6"
        >
          <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>

          <div className="space-y-4">
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">Email</label>
              <Input
                type="email"
                value={profileData.email}
                onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                className="glass border-white/20 text-white placeholder:text-white/40"
              />
            </div>

            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">Phone</label>
              <Input
                value={profileData.phone}
                onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                className="glass border-white/20 text-white placeholder:text-white/40"
              />
            </div>

            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">Location</label>
              <Input
                value={profileData.location}
                onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
                className="glass border-white/20 text-white placeholder:text-white/40"
              />
            </div>

            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">Website</label>
              <Input
                value={profileData.website}
                onChange={(e) => setProfileData({ ...profileData, website: e.target.value })}
                className="glass border-white/20 text-white placeholder:text-white/40"
              />
            </div>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-xl p-6"
        >
          <h3 className="text-xl font-bold text-white mb-6">Social Links</h3>

          <div className="space-y-4">
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2 flex items-center gap-2">
                <Github className="h-4 w-4" />
                GitHub
              </label>
              <Input
                value={profileData.github}
                onChange={(e) => setProfileData({ ...profileData, github: e.target.value })}
                className="glass border-white/20 text-white placeholder:text-white/40"
              />
            </div>

            <div>
              <label className="block text-white/80 text-sm font-medium mb-2 flex items-center gap-2">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </label>
              <Input
                value={profileData.linkedin}
                onChange={(e) => setProfileData({ ...profileData, linkedin: e.target.value })}
                className="glass border-white/20 text-white placeholder:text-white/40"
              />
            </div>

            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">Resume/CV URL</label>
              <Input
                value={profileData.resume}
                onChange={(e) => setProfileData({ ...profileData, resume: e.target.value })}
                className="glass border-white/20 text-white placeholder:text-white/40"
                placeholder="Link to your resume"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bio Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="glass rounded-xl p-6"
      >
        <h3 className="text-xl font-bold text-white mb-6">Bio</h3>
        <Textarea
          value={profileData.bio}
          onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
          className="glass border-white/20 text-white placeholder:text-white/40"
          rows={4}
          placeholder="Tell visitors about yourself..."
        />
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="glass rounded-xl p-6"
      >
        <h3 className="text-xl font-bold text-white mb-6">Skills</h3>

        <div className="space-y-6">
          {profileData.skills.map((category, categoryIndex) => (
            <div key={category.category}>
              <h4 className="text-lg font-semibold text-white mb-3">{category.category}</h4>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex gap-2">
                    <Input
                      value={skill}
                      onChange={(e) => handleSkillChange(categoryIndex, skillIndex, e.target.value)}
                      className="glass border-white/20 text-white placeholder:text-white/40"
                      placeholder="Skill name"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => removeSkill(categoryIndex, skillIndex)}
                      className="glass border-red-500/30 text-red-300 hover:bg-red-500/10"
                    >
                      ×
                    </Button>
                  </div>
                ))}
                <Button
                  variant="outline"
                  onClick={() => addSkill(categoryIndex)}
                  className="glass border-white/20 text-white hover:bg-white/10"
                >
                  + Add Skill
                </Button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

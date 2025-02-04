"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Send } from "lucide-react"

export default function NewTopicPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("New topic:", formData)
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className="flex-grow p-8">
        <div className="max-w-2xl mx-auto">
          <motion.h1
            className="terminal-text text-3xl mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            CREATE NEW TOPIC
          </motion.h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="terminal-text block mb-2">TOPIC TITLE</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full p-2 bg-black border border-white text-white focus:outline-none focus:border-green-500"
                required
              />
            </div>
            <div>
              <label className="terminal-text block mb-2">DESCRIPTION</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full p-2 bg-black border border-white text-white focus:outline-none focus:border-green-500 h-32"
                required
              />
            </div>
            <motion.button
              type="submit"
              className="retro-button flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send size={18} />
              CREATE TOPIC
            </motion.button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}


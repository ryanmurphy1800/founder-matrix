"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Send } from "lucide-react"
import type React from "react" // Added import for React

// Mock data - replace with actual data from your backend
const getTopic = (id: string) => ({
  id: Number(id),
  title: "The Future of Quantum Computing",
  description:
    "Let's discuss the potential impact of quantum computing on various industries and how it might shape our future.",
  creator: "ELENA RODRIGUEZ",
  createdAt: "2025-02-01",
  replies: [
    {
      id: 1,
      content: "I believe quantum computing will revolutionize cryptography and financial modeling.",
      creator: "JAMES CHEN",
      createdAt: "2025-02-01",
    },
    {
      id: 2,
      content: "Agreed! It could also have a massive impact on drug discovery and materials science.",
      creator: "AISHA PATEL",
      createdAt: "2025-02-02",
    },
  ],
})

export default function TopicPage() {
  const params = useParams()
  const topic = getTopic(params.id as string)
  const [newReply, setNewReply] = useState("")

  const handleSubmitReply = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle reply submission
    console.log("New reply:", newReply)
    setNewReply("")
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className="flex-grow p-8">
        <div className="max-w-3xl mx-auto">
          <motion.h1
            className="terminal-text text-3xl mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {topic.title}
          </motion.h1>
          <div className="mb-8">
            <p className="terminal-text text-sm mb-2">{topic.description}</p>
            <div className="text-xs text-gray-400">
              Created by {topic.creator} on {new Date(topic.createdAt).toLocaleDateString()}
            </div>
          </div>
          <div className="space-y-6 mb-8">
            {topic.replies.map((reply) => (
              <motion.div
                key={reply.id}
                className="border border-white p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p className="terminal-text text-sm mb-2">{reply.content}</p>
                <div className="text-xs text-gray-400">
                  Reply by {reply.creator} on {new Date(reply.createdAt).toLocaleDateString()}
                </div>
              </motion.div>
            ))}
          </div>
          <form onSubmit={handleSubmitReply} className="space-y-4">
            <textarea
              value={newReply}
              onChange={(e) => setNewReply(e.target.value)}
              className="w-full p-2 bg-black border border-white text-white focus:outline-none focus:border-green-500"
              rows={4}
              placeholder="Type your reply here..."
            />
            <motion.button
              type="submit"
              className="retro-button flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send size={18} />
              SEND REPLY
            </motion.button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}


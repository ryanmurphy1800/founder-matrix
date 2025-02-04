"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Header from "../components/Header"
import Footer from "../components/Footer"
import TopicCard from "../components/TopicCard"
import Link from "next/link"
import { Plus } from "lucide-react"

// Mock data - replace with actual data from your backend
const topics = [
  {
    id: 1,
    title: "The Future of Quantum Computing",
    description:
      "Let's discuss the potential impact of quantum computing on various industries and how it might shape our future.",
    creator: "ELENA RODRIGUEZ",
    lastReplyDate: "2025-02-01",
  },
  {
    id: 2,
    title: "AI Ethics in Autonomous Systems",
    description:
      "As AI becomes more prevalent in autonomous systems, what ethical considerations should we be addressing?",
    creator: "JAMES CHEN",
    lastReplyDate: "2025-02-02",
  },
  // Add more topics as needed
]

export default function ChatPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className="flex-grow p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <motion.h1
              className="terminal-text text-3xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              CHAT
            </motion.h1>
            <Link href="/chat/new">
              <motion.button
                className="retro-button flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Plus size={18} />
                NEW TOPIC
              </motion.button>
            </Link>
          </div>
          <motion.div
            className="grid gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            {topics.map((topic, index) => (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <TopicCard {...topic} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}


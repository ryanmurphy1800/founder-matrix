"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProjectCard from "../components/ProjectCard"

export default function ShowPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "QUANTUM INTERFACE",
      description: "A revolutionary approach to human-computer interaction using quantum principles",
      thumbnail: "/placeholder.svg?height=400&width=600",
      creator: {
        name: "ELENA RODRIGUEZ",
        image: "/placeholder.svg?height=100&width=100",
      },
      tags: ["QUANTUM", "UI/UX", "INNOVATION"],
      links: {
        github: "https://github.com",
        demo: "https://demo.com",
      },
      stars: 42,
    },
    {
      id: 2,
      title: "NEURAL NETWORK VISUALIZER",
      description: "Interactive 3D visualization of neural network architectures",
      thumbnail: "/placeholder.svg?height=400&width=600",
      creator: {
        name: "JAMES CHEN",
        image: "/placeholder.svg?height=100&width=100",
      },
      tags: ["AI", "VISUALIZATION", "EDUCATION"],
      links: {
        github: "https://github.com",
        demo: "https://demo.com",
      },
      stars: 38,
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white flex flex-col animated-background">
      <Header />
      <main className="flex-grow p-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="puzzle-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="puzzle-piece"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}


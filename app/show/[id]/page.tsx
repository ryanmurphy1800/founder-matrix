"use client"

import { useParams } from "next/navigation"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Image from "next/image"
import { Github, Globe, LinkIcon } from "lucide-react"

// Mock data - replace with actual data fetching
const getProject = (id: string) => ({
  id: Number(id),
  title: "QUANTUM INTERFACE",
  description:
    "A revolutionary approach to human-computer interaction using quantum principles. This project explores the intersection of quantum computing and user interface design, creating new paradigms for how we interact with quantum systems.",
  thumbnail: "/placeholder.svg?height=400&width=600",
  creator: {
    name: "ELENA RODRIGUEZ",
    image: "/placeholder.svg?height=100&width=100",
    bio: "Quantum Computing Researcher & UI Designer",
  },
  tags: ["QUANTUM", "UI/UX", "INNOVATION"],
  links: {
    github: "https://github.com",
    demo: "https://demo.com",
    additional: ["https://docs.example.com", "https://blog.example.com"],
  },
  createdAt: "2024-02-01",
})

export default function ProjectPage() {
  const params = useParams()
  const project = getProject(params.id as string)

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className="flex-grow p-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-96 w-full mb-8">
            <Image
              src={project.thumbnail || "/placeholder.svg"}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="grayscale"
            />
          </div>

          <div className="mb-8">
            <h1 className="terminal-text text-4xl mb-4">{project.title}</h1>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8">
                  <Image
                    src={project.creator.image || "/placeholder.svg"}
                    alt={project.creator.name}
                    layout="fill"
                    className="rounded-full grayscale"
                  />
                </div>
                <div>
                  <p className="terminal-text text-sm">{project.creator.name}</p>
                  <p className="terminal-text text-xs text-gray-400">{project.creator.bio}</p>
                </div>
              </div>
              <div className="text-sm text-gray-400">{new Date(project.createdAt).toLocaleDateString()}</div>
            </div>

            <p className="terminal-text text-lg mb-6">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span key={tag} className="terminal-text text-sm border border-white px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>

            <div className="space-y-2">
              <h2 className="terminal-text text-xl mb-4">LINKS</h2>
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-green-500"
                >
                  <Github size={18} />
                  <span className="terminal-text">GITHUB REPOSITORY</span>
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-green-500"
                >
                  <Globe size={18} />
                  <span className="terminal-text">LIVE DEMO</span>
                </a>
              )}
              {project.links.additional?.map((link, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-green-500"
                >
                  <LinkIcon size={18} />
                  <span className="terminal-text">ADDITIONAL RESOURCE {index + 1}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}


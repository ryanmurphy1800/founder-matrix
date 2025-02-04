"use client"

import { useParams } from "next/navigation"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

// Mock data - replace with actual data fetching
const getJob = (id: string) => ({
  id: Number(id),
  title: "SENIOR FULLSTACK DEVELOPER",
  company: {
    name: "QUANTUM LABS",
    logo: "/placeholder.svg?height=80&width=80",
    website: "https://example.com",
  },
  location: "REMOTE",
  description: `We're looking for a Senior Fullstack Developer to join our team building the next generation of quantum computing interfaces.

Key Responsibilities:
- Develop and maintain quantum computing interfaces
- Work with cross-functional teams
- Mentor junior developers
- Drive technical architecture decisions

Requirements:
- 5+ years of experience with React and Node.js
- Strong TypeScript skills
- Experience with quantum computing (preferred)
- Excellent communication skills`,
  tags: ["REACT", "NODE.JS", "TYPESCRIPT", "QUANTUM"],
  applyLink: "https://example.com/apply",
  postedAt: "2024-02-01",
})

export default function JobDetailPage() {
  const params = useParams()
  const job = getJob(params.id as string)

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className="flex-grow p-8">
        <div className="max-w-3xl mx-auto">
          <div className="border border-white p-8">
            <div className="flex items-start gap-6 mb-8">
              <div className="relative w-20 h-20 flex-shrink-0">
                <Image
                  src={job.company.logo || "/placeholder.svg"}
                  alt={job.company.name}
                  layout="fill"
                  className="grayscale"
                />
              </div>
              <div>
                <h1 className="terminal-text text-3xl mb-2">{job.title}</h1>
                <div className="flex items-center gap-2 mb-4">
                  <a
                    href={job.company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="terminal-text text-lg hover:text-green-500"
                  >
                    {job.company.name}
                  </a>
                  <span className="terminal-text text-lg opacity-70">•</span>
                  <span className="terminal-text text-lg opacity-70">{job.location}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {job.tags.map((tag) => (
                    <span key={tag} className="terminal-text text-sm border border-white px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-sm text-gray-400 mb-6">
                  Posted on {new Date(job.postedAt).toLocaleDateString()}
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="terminal-text text-xl mb-4">JOB DESCRIPTION</h2>
              <div className="terminal-text whitespace-pre-line">{job.description}</div>
            </div>

            <a
              href={job.applyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="retro-button inline-flex items-center"
            >
              APPLY NOW
              <ExternalLink size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}


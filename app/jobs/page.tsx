"use client"
import Header from "../components/Header"
import Footer from "../components/Footer"
import JobListing from "../components/JobListing"
import { Plus } from "lucide-react"
import Link from "next/link"

// Mock data - replace with actual data from your backend
const jobs = [
  {
    id: 1,
    title: "SENIOR FULLSTACK DEVELOPER",
    company: {
      name: "QUANTUM LABS",
      logo: "/placeholder.svg?height=40&width=40",
    },
    location: "REMOTE",
    description: "Join our team building the next generation of quantum computing interfaces.",
    tags: ["REACT", "NODE.JS", "TYPESCRIPT", "QUANTUM"],
    applyLink: "https://example.com/apply",
    postedAt: "2 DAYS AGO",
  },
  // Add more jobs...
]

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className="flex-grow p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="terminal-text text-3xl">JOB BOARD</h1>
            <Link href="/jobs/post" className="retro-button flex items-center gap-2">
              <Plus size={18} />
              POST JOB
            </Link>
          </div>
          <div className="space-y-4">
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}


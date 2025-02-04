import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

type Job = {
  id: number
  title: string
  company: {
    name: string
    logo: string
  }
  location: string
  postedAt: string
}

const recentJobs: Job[] = [
  {
    id: 1,
    title: "SENIOR FULLSTACK DEVELOPER",
    company: {
      name: "QUANTUM LABS",
      logo: "/placeholder.svg?height=40&width=40",
    },
    location: "REMOTE",
    postedAt: "2 DAYS AGO",
  },
  {
    id: 2,
    title: "PRODUCT DESIGNER",
    company: {
      name: "NEURAL INTERFACE",
      logo: "/placeholder.svg?height=40&width=40",
    },
    location: "SAN FRANCISCO",
    postedAt: "3 DAYS AGO",
  },
  {
    id: 3,
    title: "AI RESEARCHER",
    company: {
      name: "DEEPMIND LABS",
      logo: "/placeholder.svg?height=40&width=40",
    },
    location: "LONDON",
    postedAt: "4 DAYS AGO",
  },
  {
    id: 4,
    title: "FRONTEND ENGINEER",
    company: {
      name: "CYBER SYSTEMS",
      logo: "/placeholder.svg?height=40&width=40",
    },
    location: "BERLIN",
    postedAt: "5 DAYS AGO",
  },
  {
    id: 5,
    title: "BLOCKCHAIN DEVELOPER",
    company: {
      name: "CRYPTO VENTURES",
      logo: "/placeholder.svg?height=40&width=40",
    },
    location: "SINGAPORE",
    postedAt: "6 DAYS AGO",
  },
]

export default function JobWidget() {
  return (
    <div className="border border-white p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="terminal-text text-xl">LATEST JOBS</h2>
        <Link href="/jobs" className="terminal-text text-sm flex items-center hover:text-green-500">
          SEE ALL
          <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
      <div className="space-y-4">
        {recentJobs.map((job) => (
          <Link key={job.id} href={`/jobs/${job.id}`}>
            <div className="border border-white p-3 hover:bg-white hover:text-black transition-colors">
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8 flex-shrink-0">
                  <Image
                    src={job.company.logo || "/placeholder.svg"}
                    alt={job.company.name}
                    layout="fill"
                    className="grayscale"
                  />
                </div>
                <div>
                  <h3 className="terminal-text text-sm font-bold">{job.title}</h3>
                  <p className="terminal-text text-xs">{job.company.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="terminal-text text-xs opacity-70">{job.location}</span>
                    <span className="terminal-text text-xs opacity-70">•</span>
                    <span className="terminal-text text-xs opacity-70">{job.postedAt}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}


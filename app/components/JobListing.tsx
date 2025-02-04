import Image from "next/image"
import Link from "next/link"

type Job = {
  id: number
  title: string
  company: {
    name: string
    logo: string
  }
  location: string
  description: string
  tags: string[]
  applyLink: string
  postedAt: string
}

type JobListingProps = {
  job: Job
}

export default function JobListing({ job }: JobListingProps) {
  return (
    <Link href={`/jobs/${job.id}`}>
      <article className="border border-white p-6 hover:bg-white hover:text-black transition-colors">
        <div className="flex items-start gap-4">
          <div className="relative w-12 h-12 flex-shrink-0">
            <Image
              src={job.company.logo || "/placeholder.svg"}
              alt={job.company.name}
              layout="fill"
              className="grayscale"
            />
          </div>
          <div className="flex-grow">
            <h2 className="terminal-text text-xl mb-1">{job.title}</h2>
            <div className="flex items-center gap-2 mb-3">
              <span className="terminal-text text-sm">{job.company.name}</span>
              <span className="terminal-text text-sm opacity-70">•</span>
              <span className="terminal-text text-sm opacity-70">{job.location}</span>
              <span className="terminal-text text-sm opacity-70">•</span>
              <span className="terminal-text text-sm opacity-70">{job.postedAt}</span>
            </div>
            <p className="terminal-text text-sm mb-4 line-clamp-2">{job.description}</p>
            <div className="flex flex-wrap gap-2">
              {job.tags.map((tag) => (
                <span key={tag} className="terminal-text text-xs border border-current px-2 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}


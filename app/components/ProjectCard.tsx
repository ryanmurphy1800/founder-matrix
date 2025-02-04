import Image from "next/image"
import { useRouter } from "next/navigation"
import { Github, Globe, Star } from "lucide-react"
import { motion } from "framer-motion"

type Project = {
  id: number
  title: string
  description: string
  thumbnail: string
  creator: {
    name: string
    image: string
  }
  tags: string[]
  links: {
    github?: string
    demo?: string
  }
  stars: number
}

type ProjectCardProps = {
  project: Project
  index: number
}

const shapes = [
  { clipPath: "polygon(0% 0%, 100% 0%, 100% 75%, 75% 100%, 0% 100%)" },
  { clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 20%)" },
  { clipPath: "polygon(0% 0%, 80% 0%, 100% 20%, 100% 100%, 20% 100%, 0% 80%)" },
  { clipPath: "polygon(0% 0%, 100% 0%, 100% 80%, 80% 100%, 0% 100%)" },
]

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const router = useRouter()
  const shape = shapes[index % shapes.length]

  const handleClick = () => {
    router.push(`/show/${project.id}`)
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 1 }}
      whileTap={{ scale: 0.95 }}
      className="relative bg-black border border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-shadow duration-300 cursor-pointer"
      style={shapes[index % shapes.length]}
      onClick={handleClick}
    >
      <article className="p-4 h-full flex flex-col">
        <div className="relative h-48 w-full mb-4 overflow-hidden">
          <Image
            src={project.thumbnail || "/placeholder.svg"}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
        <h2 className="terminal-text text-xl mb-2 line-clamp-1">{project.title}</h2>
        <p className="terminal-text text-sm mb-4 line-clamp-2 flex-grow">{project.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative w-6 h-6">
              <Image
                src={project.creator.image || "/placeholder.svg"}
                alt={project.creator.name}
                layout="fill"
                className="rounded-full grayscale"
              />
            </div>
            <span className="terminal-text text-sm">{project.creator.name}</span>
          </div>
          <div className="flex gap-2">
            {project.links.github && (
              <motion.a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 15 }}
                className="hover:text-green-500 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={18} />
              </motion.a>
            )}
            {project.links.demo && (
              <motion.a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -15 }}
                className="hover:text-green-500 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Globe size={18} />
              </motion.a>
            )}
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="terminal-text text-xs border border-current px-2 py-1 hover:bg-white hover:text-black transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="absolute top-2 right-2 flex items-center gap-1 bg-black bg-opacity-50 px-2 py-1 rounded">
          <Star size={14} className="text-yellow-500" />
          <span className="terminal-text text-xs">{project.stars}</span>
        </div>
      </article>
    </motion.div>
  )
}


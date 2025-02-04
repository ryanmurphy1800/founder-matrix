import Link from "next/link"
import { motion } from "framer-motion"

type TopicCardProps = {
  id: number
  title: string
  description: string
  creator: string
  lastReplyDate: string
}

export default function TopicCard({ id, title, description, creator, lastReplyDate }: TopicCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="border border-white p-4 hover:bg-white hover:text-black transition-colors duration-300"
    >
      <Link href={`/discussions/${id}`}>
        <h3 className="terminal-text text-xl mb-2">{title}</h3>
        <p className="terminal-text text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center text-xs">
          <span>By: {creator}</span>
          <span>Last reply: {lastReplyDate}</span>
        </div>
      </Link>
    </motion.div>
  )
}


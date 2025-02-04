import Image from "next/image"

type Creator = {
  name: string
  company: string
  image: string
  score: number
  brief: string
}

type RankedCreatorProps = {
  rank: number
  creator: Creator
}

export default function RankedCreator({ rank, creator }: RankedCreatorProps) {
  return (
    <div className="flex items-center mb-6">
      <div className="terminal-text text-4xl w-16 text-right mr-4">#{rank}</div>
      <div className="border border-white p-4 flex items-center flex-grow">
        <div className="relative w-16 h-16 mr-4">
          <Image
            src={creator.image || "/placeholder.svg"}
            alt={creator.name}
            layout="fill"
            objectFit="cover"
            className="grayscale"
          />
        </div>
        <div>
          <h2 className="terminal-text text-xl">{creator.name}</h2>
          <p className="terminal-text text-sm text-gray-400">{creator.company}</p>
          <p className="terminal-text text-xs mt-1">{creator.brief}</p>
        </div>
        <div className="ml-auto">
          <span className="terminal-text text-2xl">{creator.score}</span>
        </div>
      </div>
    </div>
  )
}


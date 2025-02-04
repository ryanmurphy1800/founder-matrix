"use client"

import Image from "next/image"

const images = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b91fa8ae-351c-4773-b7df-ee9ce0a3c2fe.jpg-kqZfruYnJ2SxMBY5kJ1BcRse4FU42V.jpeg",
    alt: "Retro IBM Keyboard",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0d60f97d-edda-4f0b-94f4-4ae6654056f1.jpg-HWTZa4y6otwawm4DiiKgjJr96Uzn2b.jpeg",
    alt: "Concert Crowd",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d8da44b1-1114-48e6-9285-1667ad84a44e.jpg-bRmnNNoVEMYGNElOA2lNkSstKK3srx.jpeg",
    alt: "Digital Workspace",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7f713bfa-b16d-4051-8a3b-42a472b99bfa.jpg-B3x2QO4zzUZe9VDS9lUqi4SHh1RflA.jpeg",
    alt: "Laptop in Blue",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/88e61a88-9138-48f5-b3a9-60dbc7fc75ae.jpg-F63sEXTtdSVF1dstONeP2L7MWMcJbG.jpeg",
    alt: "Retro Computer",
  },
]

export default function ScrollingImages() {
  return (
    <div className="w-full overflow-hidden bg-black relative">
      <div className="animate-scroll flex">
        {/* First set of images */}
        {images.map((image, index) => (
          <div key={`first-${index}`} className="inline-block flex-shrink-0 h-40 md:h-48 w-64 md:w-72 relative mx-2">
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
        ))}
        {/* Duplicate set of images for seamless loop */}
        {images.map((image, index) => (
          <div key={`second-${index}`} className="inline-block flex-shrink-0 h-40 md:h-48 w-64 md:w-72 relative mx-2">
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-black bg-opacity-50 p-4 rounded">
          <p className="terminal-text text-center text-lg md:text-xl lg:text-2xl whitespace-nowrap">
            WHO WILL YOU MEET?
            <br />
            WHAT WILL YOU BUILD?
            <br />
            NOW THAT YOU ARE HERE AND NOT SCROLLING RN.
          </p>
        </div>
      </div>
    </div>
  )
}


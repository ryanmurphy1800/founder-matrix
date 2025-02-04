"use client"

import { useState } from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Upload } from "lucide-react"

export default function NewProjectPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    thumbnail: null,
    tags: "",
    githubLink: "",
    demoLink: "",
    additionalLinks: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className="flex-grow p-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="terminal-text text-3xl mb-8">SUBMIT PROJECT</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="terminal-text block mb-2">TITLE</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full p-2 bg-black border border-white text-white focus:outline-none focus:border-green-500"
                required
              />
            </div>

            <div>
              <label className="terminal-text block mb-2">DESCRIPTION</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full p-2 bg-black border border-white text-white focus:outline-none focus:border-green-500 h-32"
                required
              />
            </div>

            <div>
              <label className="terminal-text block mb-2">THUMBNAIL</label>
              <div className="border border-white p-4 text-center cursor-pointer hover:bg-white hover:text-black transition-colors">
                <Upload className="mx-auto mb-2" />
                <p className="terminal-text">DRAG & DROP OR CLICK TO UPLOAD</p>
              </div>
            </div>

            <div>
              <label className="terminal-text block mb-2">TAGS (COMMA SEPARATED)</label>
              <input
                type="text"
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                className="w-full p-2 bg-black border border-white text-white focus:outline-none focus:border-green-500"
                placeholder="AI, BLOCKCHAIN, ROBOTICS"
              />
            </div>

            <div>
              <label className="terminal-text block mb-2">GITHUB LINK</label>
              <input
                type="url"
                value={formData.githubLink}
                onChange={(e) => setFormData({ ...formData, githubLink: e.target.value })}
                className="w-full p-2 bg-black border border-white text-white focus:outline-none focus:border-green-500"
              />
            </div>

            <div>
              <label className="terminal-text block mb-2">DEMO LINK</label>
              <input
                type="url"
                value={formData.demoLink}
                onChange={(e) => setFormData({ ...formData, demoLink: e.target.value })}
                className="w-full p-2 bg-black border border-white text-white focus:outline-none focus:border-green-500"
              />
            </div>

            <div>
              <label className="terminal-text block mb-2">ADDITIONAL LINKS</label>
              <input
                type="text"
                value={formData.additionalLinks}
                onChange={(e) => setFormData({ ...formData, additionalLinks: e.target.value })}
                className="w-full p-2 bg-black border border-white text-white focus:outline-none focus:border-green-500"
                placeholder="SEPARATE MULTIPLE LINKS WITH COMMAS"
              />
            </div>

            <button type="submit" className="retro-button w-full">
              SUBMIT PROJECT
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}


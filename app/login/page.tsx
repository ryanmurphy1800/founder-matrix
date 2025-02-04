"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const data = await response.json()
        localStorage.setItem("userToken", data.token)
        router.push("/profile")
      } else {
        const errorData = await response.json()
        setError(errorData.message || "Invalid email or password.")
      }
    } catch (error) {
      setError("An error occurred. Please try again.")
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className="flex-grow p-8">
        <div className="max-w-md mx-auto">
          <h1 className="terminal-text text-3xl mb-8">LOGIN</h1>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="terminal-text block mb-2">
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-2 bg-black border border-white text-white focus:outline-none focus:border-green-500"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="terminal-text block mb-2">
                PASSWORD
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full p-2 bg-black border border-white text-white focus:outline-none focus:border-green-500"
                required
              />
            </div>
            <button type="submit" className="retro-button w-full">
              LOGIN
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}


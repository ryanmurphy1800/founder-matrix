"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      let data
      const contentType = response.headers.get("content-type")
      if (contentType && contentType.includes("application/json")) {
        data = await response.json()
      } else {
        // Handle non-JSON responses
        const text = await response.text()
        console.error("Received non-JSON response:", text)
        throw new Error("Unexpected server response. Please try again later.")
      }

      if (!response.ok) {
        throw new Error(data.message || "An error occurred during sign up")
      }

      // Store token
      localStorage.setItem("userToken", data.token)

      // Redirect to profile
      router.push("/profile")
    } catch (error: any) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className="flex-grow p-8">
        <div className="max-w-md mx-auto">
          <h1 className="terminal-text text-3xl mb-8">SIGN UP</h1>
          {error && (
            <div className="border border-red-500 p-4 mb-6">
              <p className="terminal-text text-red-500">{error}</p>
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="terminal-text block mb-2">
                NAME
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-2 bg-black border border-white text-white focus:outline-none focus:border-green-500"
                required
                disabled={isLoading}
                minLength={2}
              />
            </div>
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
                disabled={isLoading}
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
                disabled={isLoading}
                minLength={8}
              />
              <p className="text-xs text-gray-400 mt-1">Must be at least 8 characters</p>
            </div>
            <button
              type="submit"
              className={`retro-button w-full ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={isLoading}
            >
              {isLoading ? "SIGNING UP..." : "SIGN UP"}
            </button>
          </form>
          <p className="mt-6 text-center">
            Already have an account?{" "}
            <Link href="/login" className="text-green-500 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}


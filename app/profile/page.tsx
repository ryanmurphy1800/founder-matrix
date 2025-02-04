"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Header from "../components/Header"
import Footer from "../components/Footer"

type User = {
  id: number
  name: string
  email: string
  created_at: string
}

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")
  const router = useRouter()

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("userToken")

      if (!token) {
        router.push("/login")
        return
      }

      try {
        const response = await fetch("/api/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (!response.ok) {
          if (response.status === 401) {
            localStorage.removeItem("userToken")
            router.push("/login")
            return
          }
          throw new Error("Failed to fetch profile")
        }

        const data = await response.json()
        setUser(data.user)
      } catch (error: any) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProfile()
  }, [router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col">
        <Header />
        <main className="flex-grow p-8 flex items-center justify-center">
          <div className="terminal-text text-xl">LOADING...</div>
        </main>
        <Footer />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col">
        <Header />
        <main className="flex-grow p-8 flex items-center justify-center">
          <div className="border border-red-500 p-4">
            <p className="terminal-text text-red-500">{error}</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className="flex-grow p-8">
        <div className="max-w-md mx-auto">
          <h1 className="terminal-text text-3xl mb-8">PROFILE</h1>
          {user && (
            <div className="border border-white p-6 space-y-4">
              <div>
                <h2 className="terminal-text text-xl mb-1">NAME</h2>
                <p className="terminal-text">{user.name}</p>
              </div>
              <div>
                <h2 className="terminal-text text-xl mb-1">EMAIL</h2>
                <p className="terminal-text">{user.email}</p>
              </div>
              <div>
                <h2 className="terminal-text text-xl mb-1">MEMBER SINCE</h2>
                <p className="terminal-text">{new Date(user.created_at).toLocaleDateString()}</p>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}


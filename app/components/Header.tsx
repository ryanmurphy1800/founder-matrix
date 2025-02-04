"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("userToken")
    setIsLoggedIn(!!token)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("userToken")
    setIsLoggedIn(false)
    router.push("/")
  }

  return (
    <header className="p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Link href="/" className="terminal-text text-2xl">
          CREATOR QUEUE
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <Link href="/show" className="terminal-text">
          SHOW N TELL
        </Link>
        <Link href="/jobs" className="terminal-text">
          JOBS
        </Link>
        <Link href="/ranks" className="terminal-text">
          RANKS
        </Link>
        <Link href="/chat" className="terminal-text">
          CHAT
        </Link>
        {isLoggedIn ? (
          <>
            <Link href="/profile" className="terminal-text">
              PROFILE
            </Link>
            <button onClick={handleLogout} className="retro-button">
              LOGOUT
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className="terminal-text">
              LOGIN
            </Link>
            <Link href="/signup" className="retro-button">
              SIGN UP
            </Link>
          </>
        )}
      </div>
    </header>
  )
}


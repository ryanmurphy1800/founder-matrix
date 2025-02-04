import { NextResponse } from "next/server"
import { headers } from "next/headers"
import { getUserById, verifyToken } from "@/lib/db"

export async function GET(request: Request) {
  try {
    const headersList = headers()
    const token = headersList.get("authorization")?.split(" ")[1]

    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    // Verify token and get user ID
    const userId = await verifyToken(token)

    // Get user data
    const user = await getUserById(userId)

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 })
    }

    return NextResponse.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        created_at: user.created_at,
      },
    })
  } catch (error: any) {
    console.error("Profile error:", error)

    if (error.message === "Invalid token") {
      return NextResponse.json({ message: "Invalid token" }, { status: 401 })
    }

    return NextResponse.json({ message: "An error occurred while fetching profile" }, { status: 500 })
  }
}


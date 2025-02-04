import { NextResponse } from "next/server"
import { verifyUser, createToken } from "@/lib/db"
import { z } from "zod"

const LoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate input
    const result = LoginSchema.safeParse(body)
    if (!result.success) {
      return NextResponse.json({ message: result.error.errors[0].message }, { status: 400 })
    }

    const { email, password } = body

    // Verify user credentials
    const user = await verifyUser(email, password)

    // Generate token
    const token = await createToken(user)

    return NextResponse.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    })
  } catch (error: any) {
    console.error("Login error:", error)

    if (error.message === "User not found" || error.message === "Invalid password") {
      return NextResponse.json({ message: "Invalid email or password" }, { status: 401 })
    }

    return NextResponse.json({ message: "An error occurred during login. Please try again." }, { status: 500 })
  }
}


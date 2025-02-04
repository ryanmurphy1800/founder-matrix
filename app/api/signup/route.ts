import { NextResponse } from "next/server"
import { createUser, createToken } from "@/lib/db"
import { z } from "zod"

// Validation schema
const SignupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate input
    const result = SignupSchema.safeParse(body)
    if (!result.success) {
      return NextResponse.json({ error: "Validation error", message: result.error.errors[0].message }, { status: 400 })
    }

    const { name, email, password } = body

    // Create user
    const user = await createUser(name, email, password)

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
    console.error("Signup error:", error)

    if (error.message === "Email already exists") {
      return NextResponse.json(
        { error: "Email exists", message: "An account with this email already exists" },
        { status: 400 },
      )
    }

    // Ensure we always return a JSON response, even for unexpected errors
    return NextResponse.json(
      { error: "Server error", message: "An unexpected error occurred. Please try again later." },
      { status: 500 },
    )
  }
}


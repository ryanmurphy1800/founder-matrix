import { sql } from "@vercel/postgres"
import { hash, compare } from "bcryptjs"
import { SignJWT, jwtVerify } from "jose"

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"

export type User = {
  id: number
  name: string
  email: string
  created_at: Date
}

export async function createUser(name: string, email: string, password: string): Promise<User> {
  try {
    // Test database connection
    await sql`SELECT 1`

    // Hash the password
    const hashedPassword = await hash(password, 12)

    // Check if user exists
    const existingUser = await sql`
      SELECT id FROM users WHERE email = ${email}
    `

    if (existingUser.rows.length > 0) {
      throw new Error("Email already exists")
    }

    // Create new user
    const result = await sql`
      INSERT INTO users (name, email, password)
      VALUES (${name}, ${email}, ${hashedPassword})
      RETURNING id, name, email, created_at
    `

    return result.rows[0]
  } catch (error: any) {
    console.error("Database error in createUser:", error)
    if (error.message.includes("duplicate key value violates unique constraint")) {
      throw new Error("Email already exists")
    }
    throw new Error(`Failed to create user: ${error.message}`)
  }
}

export async function verifyUser(email: string, password: string): Promise<User> {
  const result = await sql`
    SELECT * FROM users WHERE email = ${email}
  `

  const user = result.rows[0]

  if (!user) {
    throw new Error("User not found")
  }

  const isValid = await compare(password, user.password)

  if (!isValid) {
    throw new Error("Invalid password")
  }

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    created_at: user.created_at,
  }
}

export async function getUserById(id: number): Promise<User | null> {
  const result = await sql`
    SELECT id, name, email, created_at
    FROM users
    WHERE id = ${id}
  `

  return result.rows[0] || null
}

export async function createToken(user: User): Promise<string> {
  return new SignJWT({ userId: user.id })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("24h")
    .sign(new TextEncoder().encode(JWT_SECRET))
}

export async function verifyToken(token: string): Promise<number> {
  try {
    const verified = await jwtVerify(token, new TextEncoder().encode(JWT_SECRET))
    return verified.payload.userId as number
  } catch (error) {
    throw new Error("Invalid token")
  }
}


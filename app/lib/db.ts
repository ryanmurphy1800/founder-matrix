import { sql } from "@vercel/postgres"
import { hash } from "bcryptjs"

export async function createUser(name: string, email: string, password: string) {
  try {
    const hashedPassword = await hash(password, 12)

    const result = await sql`
      INSERT INTO users (name, email, password)
      VALUES (${name}, ${email}, ${hashedPassword})
      RETURNING id, name, email;
    `

    return result.rows[0]
  } catch (error: any) {
    if (error.code === "23505") {
      // Unique violation
      throw new Error("Email already exists")
    }
    throw error
  }
}

export async function getUserByEmail(email: string) {
  const result = await sql`
    SELECT * FROM users WHERE email = ${email};
  `
  return result.rows[0]
}


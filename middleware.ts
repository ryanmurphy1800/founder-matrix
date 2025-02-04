import { NextResponse } from "next/server"
import { jwtVerify } from "jose"
import type { NextRequest } from "next/server"

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"

export async function middleware(request: NextRequest) {
  const token = request.headers.get("authorization")?.split(" ")[1]

  if (!token) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
  }

  try {
    const verified = await jwtVerify(token, new TextEncoder().encode(JWT_SECRET))
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set("x-user-id", verified.payload.userId as string)

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    })
  } catch (error) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 })
  }
}

export const config = {
  matcher: ["/api/profile"],
}


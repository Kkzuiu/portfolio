import { NextResponse } from 'next/server'
import { angemeldet, konten } from '@/lib/auth'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET() {
  const user = angemeldet()
  try {
    const liste = await konten()
    return NextResponse.json({
      einrichtung: liste.length === 0,
      user: user ? { username: user.u, rolle: user.r } : null,
    })
  } catch (e) {
    return NextResponse.json({ einrichtung: false, user: user ? { username: user.u, rolle: user.r } : null, fehler: e.message })
  }
}

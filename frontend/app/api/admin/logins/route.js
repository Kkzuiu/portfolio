import { NextResponse } from 'next/server'
import { angemeldet, loginVerlauf } from '@/lib/auth'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET() {
  const u = angemeldet()
  if (!u || u.r !== 'admin') return NextResponse.json({ ok: false, error: 'Kein Zugriff.' }, { status: 403 })
  return NextResponse.json({ ok: true, verlauf: await loginVerlauf() })
}

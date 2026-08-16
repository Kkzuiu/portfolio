import { NextResponse } from 'next/server'
import { angemeldet, konten, kontoErstellen, kontoLoeschen } from '@/lib/auth'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

function admin() {
  const u = angemeldet()
  return u && u.r === 'admin' ? u : null
}

export async function GET() {
  if (!admin()) return NextResponse.json({ ok: false, error: 'Kein Zugriff.' }, { status: 403 })
  return NextResponse.json({ ok: true, konten: await konten() })
}

export async function POST(req) {
  if (!admin()) return NextResponse.json({ ok: false, error: 'Kein Zugriff.' }, { status: 403 })
  const { username, password, firma } = await req.json().catch(() => ({}))
  try {
    await kontoErstellen({ username, password, firma, rolle: 'firma' })
    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ ok: false, error: e.message }, { status: 400 })
  }
}

export async function DELETE(req) {
  const u = admin()
  if (!u) return NextResponse.json({ ok: false, error: 'Kein Zugriff.' }, { status: 403 })
  const { username } = await req.json().catch(() => ({}))
  if (username === u.u) return NextResponse.json({ ok: false, error: 'Du kannst dein eigenes Konto nicht löschen.' }, { status: 400 })
  await kontoLoeschen(username)
  return NextResponse.json({ ok: true })
}

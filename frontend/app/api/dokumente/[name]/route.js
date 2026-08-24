import { NextResponse } from 'next/server'
import { angemeldet } from '@/lib/auth'
import { speicherHolen, speicherLoeschen } from '@/lib/supabase'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const TYPEN = { pdf: 'application/pdf', png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg' }

export async function GET(req, { params }) {
  if (!angemeldet()) return NextResponse.json({ ok: false, error: 'Nicht angemeldet.' }, { status: 401 })
  const name = decodeURIComponent(params.name)
  const inhalt = await speicherHolen(name)
  if (!inhalt) return NextResponse.json({ ok: false, error: 'Nicht gefunden.' }, { status: 404 })
  const endung = name.split('.').pop().toLowerCase()
  const anzeige = req.nextUrl.searchParams.get('dl') ? 'attachment' : 'inline'
  return new NextResponse(inhalt, {
    headers: {
      'Content-Type': TYPEN[endung] || 'application/octet-stream',
      'Content-Disposition': `${anzeige}; filename="${encodeURIComponent(name)}"`,
      'Cache-Control': 'private, no-store',
    },
  })
}

export async function DELETE(req, { params }) {
  const u = angemeldet()
  if (!u || u.r !== 'admin') return NextResponse.json({ ok: false, error: 'Kein Zugriff.' }, { status: 403 })
  const name = decodeURIComponent(params.name)
  try {
    await speicherLoeschen(name)
    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ ok: false, error: e.message }, { status: 500 })
  }
}

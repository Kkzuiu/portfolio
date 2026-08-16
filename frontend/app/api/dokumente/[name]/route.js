import { NextResponse } from 'next/server'
import { angemeldet } from '@/lib/auth'
import { speicherHolen } from '@/lib/supabase'

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

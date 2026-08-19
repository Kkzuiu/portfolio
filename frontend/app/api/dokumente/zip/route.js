import { NextResponse } from 'next/server'
import JSZip from 'jszip'
import { angemeldet } from '@/lib/auth'
import { speicherListe, speicherHolen } from '@/lib/supabase'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET() {
  if (!angemeldet()) return NextResponse.json({ ok: false, error: 'Nicht angemeldet.' }, { status: 401 })
  try {
    const namen = await speicherListe()
    if (!namen.length) return NextResponse.json({ ok: false, error: 'Keine Dokumente.' }, { status: 404 })
    const zip = new JSZip()
    for (const name of namen) {
      const inhalt = await speicherHolen(name)
      if (inhalt) zip.file(name, inhalt)
    }
    const buffer = await zip.generateAsync({ type: 'nodebuffer' })
    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': 'attachment; filename="dokumente.zip"',
        'Cache-Control': 'private, no-store',
      },
    })
  } catch (e) {
    return NextResponse.json({ ok: false, error: e.message }, { status: 500 })
  }
}

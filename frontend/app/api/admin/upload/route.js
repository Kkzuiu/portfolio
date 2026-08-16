import { NextResponse } from 'next/server'
import { angemeldet } from '@/lib/auth'
import { speicherHochladen } from '@/lib/supabase'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(req) {
  const u = angemeldet()
  if (!u || u.r !== 'admin') return NextResponse.json({ ok: false, error: 'Kein Zugriff.' }, { status: 403 })
  try {
    const form = await req.formData()
    const datei = form.get('datei')
    if (!datei || typeof datei === 'string')
      return NextResponse.json({ ok: false, error: 'Keine Datei erhalten.' }, { status: 400 })
    const name = datei.name.replace(/[^a-zA-Z0-9._-]/g, '_')
    const bytes = Buffer.from(await datei.arrayBuffer())
    await speicherHochladen(name, bytes, datei.type)
    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ ok: false, error: e.message }, { status: 500 })
  }
}

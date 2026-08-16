import { NextResponse } from 'next/server'
import { angemeldet } from '@/lib/auth'
import { speicherListe } from '@/lib/supabase'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET() {
  if (!angemeldet()) return NextResponse.json({ ok: false, error: 'Nicht angemeldet.' }, { status: 401 })
  try {
    return NextResponse.json({ ok: true, dokumente: await speicherListe() })
  } catch (e) {
    return NextResponse.json({ ok: false, error: e.message }, { status: 500 })
  }
}

import { NextResponse } from 'next/server'
import { konten, kontoErstellen, tokenErstellen, loginNotieren, COOKIE_NAME } from '@/lib/auth'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(req) {
  try {
    if ((await konten()).length > 0)
      return NextResponse.json({ ok: false, error: 'Einrichtung ist bereits abgeschlossen.' }, { status: 400 })
    const { username, password } = await req.json().catch(() => ({}))
    const konto = await kontoErstellen({ username, password, rolle: 'admin' })
    await loginNotieren(konto.username)
    const res = NextResponse.json({ ok: true, user: { username: konto.username, rolle: 'admin' } })
    res.cookies.set(COOKIE_NAME, tokenErstellen(konto), { httpOnly: true, sameSite: 'lax', path: '/', maxAge: 7 * 864e2 })
    return res
  } catch (e) {
    return NextResponse.json({ ok: false, error: e.message }, { status: 400 })
  }
}

import { NextResponse } from 'next/server'
import { kontoFinden, passwortPruefen, tokenErstellen, loginNotieren, COOKIE_NAME } from '@/lib/auth'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(req) {
  try {
    const { username, password } = await req.json().catch(() => ({}))
    const konto = await kontoFinden(username)
    if (!konto || !passwortPruefen(password || '', konto.passwort))
      return NextResponse.json({ ok: false, error: 'Falscher Benutzername oder falsches Passwort.' }, { status: 401 })
    await loginNotieren(konto.username)
    const res = NextResponse.json({ ok: true, user: { username: konto.username, firma: konto.firma, rolle: konto.rolle } })
    res.cookies.set(COOKIE_NAME, tokenErstellen(konto), { httpOnly: true, sameSite: 'lax', path: '/', maxAge: 7 * 864e2 })
    return res
  } catch (e) {
    return NextResponse.json({ ok: false, error: 'Anmeldung derzeit nicht möglich.' }, { status: 500 })
  }
}

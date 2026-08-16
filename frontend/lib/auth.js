import crypto from 'crypto'
import { cookies } from 'next/headers'
import { dbSelect, dbInsert, dbDelete } from './supabase'

export const COOKIE_NAME = 'sid'
const COOKIE_TAGE = 7

function geheimnis() {
  return process.env.AUTH_SECRET || process.env.SUPABASE_SERVICE_KEY || 'bitte-AUTH_SECRET-setzen'
}

export function passwortHashen(pw) {
  const salt = crypto.randomBytes(16).toString('hex')
  const hash = crypto.scryptSync(pw, salt, 64).toString('hex')
  return `${salt}:${hash}`
}

export function passwortPruefen(pw, gespeichert) {
  const [salt, hash] = String(gespeichert).split(':')
  if (!salt || !hash) return false
  const test = crypto.scryptSync(pw, salt, 64).toString('hex')
  const a = Buffer.from(hash, 'hex')
  const b = Buffer.from(test, 'hex')
  return a.length === b.length && crypto.timingSafeEqual(a, b)
}

export async function konten() {
  return dbSelect('accounts', '?select=username,firma,rolle,erstellt&order=erstellt.asc')
}

export async function kontoFinden(username) {
  const wert = encodeURIComponent(String(username || '').trim())
  const rows = await dbSelect('accounts', `?username=ilike.${wert}&select=*`)
  return rows[0] || null
}

export async function kontoErstellen({ username, password, firma = '', rolle = 'firma' }) {
  username = String(username || '').trim()
  if (!username)                        throw new Error('Benutzername fehlt.')
  if (!password || password.length < 4) throw new Error('Passwort zu kurz (min. 4 Zeichen).')
  if (await kontoFinden(username))      throw new Error('Diesen Benutzernamen gibt es schon.')
  const [konto] = await dbInsert('accounts', {
    username, firma, rolle, passwort: passwortHashen(password),
  })
  return konto
}

export async function kontoLoeschen(username) {
  await dbDelete('accounts', `?username=eq.${encodeURIComponent(username)}`)
}

export async function loginNotieren(username) {
  try { await dbInsert('logins', { username }) } catch {}
}

export async function loginVerlauf() {
  return dbSelect('logins', '?select=username,zeit&order=zeit.desc&limit=50')
}

function b64u(text) { return Buffer.from(text).toString('base64url') }

export function tokenErstellen(konto) {
  const daten = { u: konto.username, r: konto.rolle, exp: Date.now() + COOKIE_TAGE * 864e5 }
  const payload = b64u(JSON.stringify(daten))
  const sig = crypto.createHmac('sha256', geheimnis()).update(payload).digest('base64url')
  return `${payload}.${sig}`
}

export function tokenPruefen(token) {
  if (!token || !token.includes('.')) return null
  const [payload, sig] = token.split('.')
  const soll = crypto.createHmac('sha256', geheimnis()).update(payload).digest('base64url')
  const a = Buffer.from(sig)
  const b = Buffer.from(soll)
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null
  let daten
  try { daten = JSON.parse(Buffer.from(payload, 'base64url').toString()) }
  catch { return null }
  if (!daten.exp || daten.exp < Date.now()) return null
  return daten
}

export function angemeldet() {
  return tokenPruefen(cookies().get(COOKIE_NAME)?.value)
}

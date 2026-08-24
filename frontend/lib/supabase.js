const BASIS   = process.env.SUPABASE_URL
const KEY     = process.env.SUPABASE_SERVICE_KEY
const BUCKET  = 'dokumente'

function pruefen() {
  if (!BASIS || !KEY)
    throw new Error('Supabase ist nicht konfiguriert (SUPABASE_URL / SUPABASE_SERVICE_KEY fehlen).')
}

function kopf(extra = {}) {
  return { apikey: KEY, Authorization: `Bearer ${KEY}`, ...extra }
}

export async function dbSelect(tabelle, query = '') {
  pruefen()
  const res = await fetch(`${BASIS}/rest/v1/${tabelle}${query}`, { headers: kopf(), cache: 'no-store' })
  if (!res.ok) throw new Error(`Datenbank-Fehler (${res.status})`)
  return res.json()
}

export async function dbInsert(tabelle, daten) {
  pruefen()
  const res = await fetch(`${BASIS}/rest/v1/${tabelle}`, {
    method: 'POST',
    headers: kopf({ 'Content-Type': 'application/json', Prefer: 'return=representation' }),
    body: JSON.stringify(daten),
  })
  if (!res.ok) throw new Error(`Datenbank-Fehler beim Speichern (${res.status})`)
  return res.json()
}

export async function dbDelete(tabelle, query) {
  pruefen()
  const res = await fetch(`${BASIS}/rest/v1/${tabelle}${query}`, { method: 'DELETE', headers: kopf() })
  if (!res.ok) throw new Error(`Datenbank-Fehler beim Löschen (${res.status})`)
}

export async function speicherListe() {
  pruefen()
  const res = await fetch(`${BASIS}/storage/v1/object/list/${BUCKET}`, {
    method: 'POST',
    headers: kopf({ 'Content-Type': 'application/json' }),
    body: JSON.stringify({ prefix: '', limit: 200, sortBy: { column: 'name', order: 'asc' } }),
    cache: 'no-store',
  })
  if (!res.ok) throw new Error(`Speicher-Fehler (${res.status})`)
  const liste = await res.json()
  return liste
    .map((o) => o.name)
    .filter((n) => n && !n.startsWith('.') && !n.endsWith('/'))
}

export async function speicherHolen(name) {
  pruefen()
  const res = await fetch(`${BASIS}/storage/v1/object/${BUCKET}/${encodeURIComponent(name)}`, {
    headers: kopf(), cache: 'no-store',
  })
  if (!res.ok) return null
  return Buffer.from(await res.arrayBuffer())
}

export async function speicherHochladen(name, bytes, typ) {
  pruefen()
  const res = await fetch(`${BASIS}/storage/v1/object/${BUCKET}/${encodeURIComponent(name)}`, {
    method: 'POST',
    headers: kopf({ 'Content-Type': typ || 'application/octet-stream', 'x-upsert': 'true' }),
    body: bytes,
  })
  if (!res.ok) throw new Error(`Hochladen fehlgeschlagen (${res.status})`)
}

export async function speicherLoeschen(name) {
  pruefen()
  const res = await fetch(`${BASIS}/storage/v1/object/${BUCKET}/${encodeURIComponent(name)}`, {
    method: 'DELETE',
    headers: kopf(),
  })
  if (!res.ok) throw new Error(`Löschen fehlgeschlagen (${res.status})`)
}

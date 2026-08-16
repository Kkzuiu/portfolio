'use client'

import { useState, useEffect, useCallback } from 'react'
import { useLang } from '@/components/LangProvider'
import { IconLock } from '@/components/icons'

export default function Dokumente() {
  const { t } = useLang()
  const [laden, setLaden]         = useState(true)
  const [einrichtung, setEinr]    = useState(false)
  const [user, setUser]           = useState(null)
  const [fehler, setFehler]       = useState('')

  useEffect(() => {
    fetch('/api/me')
      .then((r) => r.json())
      .then((d) => { setEinr(d.einrichtung); setUser(d.user) })
      .catch(() => {})
      .finally(() => setLaden(false))
  }, [])

  async function absenden(e, url) {
    e.preventDefault()
    setFehler('')
    const form = new FormData(e.target)
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: form.get('username'),
        password: form.get('password'),
      }),
    })
    const d = await res.json().catch(() => ({}))
    if (d.ok) { setUser(d.user); setEinr(false) }
    else setFehler(d.error || 'Es ist etwas schiefgelaufen.')
  }

  async function abmelden() {
    await fetch('/api/logout', { method: 'POST' })
    setUser(null)
  }

  return (
    <section className="section">
      <div className="container login-wrap">
        {laden ? (
          <div className="login-card"><p className="muted">{t('dok.loading')}</p></div>
        ) : user ? (
          <PrivaterBereich user={user} onLogout={abmelden} />
        ) : einrichtung ? (
          <Formular
            titel={t('dok.setupTitle')} intro={t('dok.setupIntro')}
            knopf={t('dok.setupBtn')} fehler={fehler}
            onSubmit={(e) => absenden(e, '/api/setup')}
          />
        ) : (
          <Formular
            titel={t('dok.title')} intro={t('dok.intro')}
            knopf={t('dok.login')} fehler={fehler} hinweis={t('dok.hint')}
            onSubmit={(e) => absenden(e, '/api/login')}
          />
        )}
      </div>
    </section>
  )
}

function Formular({ titel, intro, knopf, fehler, hinweis, onSubmit }) {
  const { t } = useLang()
  return (
    <div className="login-card">
      <span className="login-icon"><IconLock size={22} /></span>
      <p className="eyebrow">{t('dok.eyebrow')}</p>
      <h1>{titel}</h1>
      <p className="muted">{intro}</p>

      <form className="form" onSubmit={onSubmit}>
        <div className="field">
          <label htmlFor="username">{t('dok.user')}</label>
          <input id="username" name="username" autoComplete="username" required />
        </div>
        <div className="field">
          <label htmlFor="password">{t('dok.pass')}</label>
          <input id="password" name="password" type="password" autoComplete="current-password" required />
        </div>
        <button type="submit" className="btn">{knopf}</button>
        {fehler && <p className="login-note login-error">{fehler}</p>}
      </form>

      {hinweis && <p className="login-hint">{hinweis}</p>}
    </div>
  )
}

function PrivaterBereich({ user, onLogout }) {
  const { t } = useLang()
  const [dokumente, setDokumente] = useState([])

  const ladeDokumente = useCallback(() => {
    fetch('/api/dokumente')
      .then((r) => r.json())
      .then((d) => setDokumente(d.dokumente || []))
      .catch(() => {})
  }, [])

  useEffect(() => { ladeDokumente() }, [ladeDokumente])

  return (
    <div className="privat">
      <div className="privat-head">
        <div>
          <p className="eyebrow">{t('dok.welcome')}</p>
          <h1>{user.username}</h1>
        </div>
        <button className="btn ghost" onClick={onLogout}>{t('dok.logout')}</button>
      </div>

      <section className="privat-block">
        <h2>{t('dok.docsTitle')}</h2>
        {user.rolle === 'admin' && <Upload onFertig={ladeDokumente} />}
        {dokumente.length === 0 ? (
          <p className="muted">{t('dok.noDocs')}</p>
        ) : (
          <ul className="dok-liste">
            {dokumente.map((name) => (
              <li key={name}>
                <span className="dok-name">{name}</span>
                <span className="dok-actions">
                  <a className="link-btn" href={`/api/dokumente/${encodeURIComponent(name)}`} target="_blank" rel="noreferrer">{t('dok.view')}</a>
                  <a className="link-btn primary" href={`/api/dokumente/${encodeURIComponent(name)}?dl=1`}>{t('dok.download')}</a>
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>

      {user.rolle === 'admin' && <AdminPanel meUser={user.username} />}
    </div>
  )
}

function Upload({ onFertig }) {
  const { t } = useLang()
  const [laden, setLaden] = useState(false)
  const [fehler, setFehler] = useState('')

  async function hochladen(e) {
    const datei = e.target.files?.[0]
    if (!datei) return
    setFehler(''); setLaden(true)
    const form = new FormData()
    form.append('datei', datei)
    const res = await fetch('/api/admin/upload', { method: 'POST', body: form })
    const d = await res.json().catch(() => ({}))
    setLaden(false)
    e.target.value = ''
    if (d.ok) onFertig()
    else setFehler(d.error || 'Hochladen fehlgeschlagen.')
  }

  return (
    <div className="dok-upload">
      <label className="btn">
        {laden ? t('dok.uploading') : t('dok.upload')}
        <input type="file" accept=".pdf,.png,.jpg,.jpeg" onChange={hochladen} hidden disabled={laden} />
      </label>
      {fehler && <span className="login-error">{fehler}</span>}
    </div>
  )
}

function AdminPanel({ meUser }) {
  const { t } = useLang()
  const [konten, setKonten]   = useState([])
  const [verlauf, setVerlauf] = useState([])
  const [fehler, setFehler]   = useState('')
  const [ok, setOk]           = useState('')

  const ladeKonten = useCallback(() => {
    fetch('/api/admin/accounts').then((r) => r.json()).then((d) => setKonten(d.konten || [])).catch(() => {})
  }, [])
  const ladeVerlauf = useCallback(() => {
    fetch('/api/admin/logins').then((r) => r.json()).then((d) => setVerlauf(d.verlauf || [])).catch(() => {})
  }, [])

  useEffect(() => { ladeKonten(); ladeVerlauf() }, [ladeKonten, ladeVerlauf])

  async function erstellen(e) {
    e.preventDefault()
    setFehler(''); setOk('')
    const form = new FormData(e.target)
    const res = await fetch('/api/admin/accounts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: form.get('username'),
        password: form.get('password'),
        firma: form.get('firma'),
      }),
    })
    const d = await res.json().catch(() => ({}))
    if (d.ok) { e.target.reset(); setOk(t('adm.created')); ladeKonten() }
    else setFehler(d.error || 'Fehler')
  }

  async function loeschen(username) {
    await fetch('/api/admin/accounts', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username }),
    })
    ladeKonten()
  }

  const firmen = konten.filter((k) => k.rolle !== 'admin')

  return (
    <section className="privat-block admin">
      <h2>{t('adm.title')}</h2>

      <form className="form admin-form" onSubmit={erstellen}>
        <p className="eyebrow">{t('adm.newTitle')}</p>
        <div className="admin-grid">
          <div className="field">
            <label htmlFor="a-firma">{t('adm.firma')}</label>
            <input id="a-firma" name="firma" autoComplete="off" />
          </div>
          <div className="field">
            <label htmlFor="a-user">{t('dok.user')}</label>
            <input id="a-user" name="username" autoComplete="off" required />
          </div>
          <div className="field">
            <label htmlFor="a-pass">{t('dok.pass')}</label>
            <input id="a-pass" name="password" autoComplete="off" required />
          </div>
        </div>
        <button type="submit" className="btn">{t('adm.create')}</button>
        {ok && <p className="login-note">{ok}</p>}
        {fehler && <p className="login-note login-error">{fehler}</p>}
      </form>

      <div className="admin-listen">
        <div>
          <p className="eyebrow">{t('adm.existing')}</p>
          {firmen.length === 0 ? (
            <p className="muted">{t('adm.none')}</p>
          ) : (
            <ul className="konto-liste">
              {firmen.map((k) => (
                <li key={k.username}>
                  <span>
                    <strong>{k.firma || k.username}</strong>
                    <span className="konto-user"> · {k.username}</span>
                  </span>
                  <button className="link-btn danger" onClick={() => loeschen(k.username)}>{t('adm.delete')}</button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <p className="eyebrow">{t('adm.history')}</p>
          {verlauf.length === 0 ? (
            <p className="muted">{t('adm.noHistory')}</p>
          ) : (
            <ul className="verlauf-liste">
              {verlauf.slice(0, 20).map((v, i) => (
                <li key={i}>
                  <span className="verlauf-user">{v.username}{v.username === meUser ? ` (${t('adm.you')})` : ''}</span>
                  <span className="verlauf-zeit">{new Date(v.zeit).toLocaleString()}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}

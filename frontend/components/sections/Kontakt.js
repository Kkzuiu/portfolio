'use client'
import { useState } from 'react'
import { useLang } from '@/components/LangProvider'
import { contact, site } from '@/data/site'
import { IconGitHub } from '@/components/icons'

function istEmail(text) {
  const at = text.indexOf('@')
  const punkt = text.lastIndexOf('.')
  return at > 0 && punkt > at + 1
}

export default function Kontakt() {
  const { t, tr } = useLang()
  const [form, setForm] = useState({ name: '', email: '', nachricht: '' })
  const [fehler, setFehler] = useState({})
  const [status, setStatus] = useState('idle')

  function aendern(feld) {
    return (e) => setForm({ ...form, [feld]: e.target.value })
  }

  async function absenden(e) {
    e.preventDefault()

    const neueFehler = {}
    if (form.name.trim().length < 2) neueFehler.name = t('kontakt.errName')
    if (!istEmail(form.email)) neueFehler.email = t('kontakt.errEmail')
    if (form.nachricht.trim().length < 10) neueFehler.nachricht = t('kontakt.errMsg')

    setFehler(neueFehler)
    if (Object.keys(neueFehler).length > 0) return

    if (!contact.formEndpoint) {
      const betreff = encodeURIComponent(`Kontakt · Portfolio – ${form.name}`)
      const inhalt = encodeURIComponent(`${form.nachricht}\n\n${form.name} (${form.email})`)
      window.location.href = `mailto:${contact.email}?subject=${betreff}&body=${inhalt}`
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(contact.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, nachricht: form.nachricht }),
      })
      if (!res.ok) throw new Error()
      setStatus('ok')
      setForm({ name: '', email: '', nachricht: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="section">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">{t('kontakt.eyebrow')}</p>
          <h1>{t('kontakt.title')}</h1>
          <p className="lead">{t('kontakt.lead')}</p>
        </div>

        <div className="contact-grid">
          <ul className="contact-list reveal">
            <li><b>{t('kontakt.email')}</b><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
            <li><b>GitHub</b><a href={contact.github} target="_blank" rel="noreferrer"><IconGitHub size={14} /> {contact.github.replace('https://', '')}</a></li>
            {contact.linkedin && <li><b>LinkedIn</b><a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></li>}
            {contact.cvUrl && <li><b>{t('kontakt.cv')}</b><a href={contact.cvUrl} download>PDF ↓</a></li>}
            <li><b>{t('kontakt.ort')}</b><span>{tr(site.location)}</span></li>
          </ul>

          <form className="form reveal" onSubmit={absenden} noValidate>
            <div className={`field ${fehler.name ? 'bad' : ''}`}>
              <label htmlFor="name">{t('kontakt.name')}</label>
              <input id="name" value={form.name} onChange={aendern('name')} autoComplete="name" />
              <small>{fehler.name || ''}</small>
            </div>
            <div className={`field ${fehler.email ? 'bad' : ''}`}>
              <label htmlFor="email">{t('kontakt.email')}</label>
              <input id="email" type="email" value={form.email} onChange={aendern('email')} autoComplete="email" />
              <small>{fehler.email || ''}</small>
            </div>
            <div className={`field ${fehler.nachricht ? 'bad' : ''}`}>
              <label htmlFor="nachricht">{t('kontakt.msg')}</label>
              <textarea id="nachricht" rows="5" value={form.nachricht} onChange={aendern('nachricht')} />
              <small>{fehler.nachricht || ''}</small>
            </div>
            <button type="submit" className="btn" disabled={status === 'sending'}>
              {status === 'sending' ? t('kontakt.sending') : t('kontakt.send')}
            </button>
            {status === 'ok' && <p className="form-ok">{t('kontakt.ok')}</p>}
            {status === 'error' && <p className="login-error">{t('kontakt.errSend')}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

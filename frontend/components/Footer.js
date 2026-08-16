'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useLang } from './LangProvider'
import Modal from './Modal'
import { IconGitHub } from './icons'
import { site, contact, impressum } from '@/data/site'

export default function Footer() {
  const { t, tr } = useLang()
  const [impOpen, setImpOpen] = useState(false)
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container foot-grid">
        <div className="foot-brand">
          <span className="foot-logo">{site.name}</span>
          <p>{t('foot.tagline')}</p>
        </div>

        <nav className="foot-nav" aria-label="Footer">
          <Link href="/">{t('nav.start')}</Link>
          <Link href="/about">{t('nav.about')}</Link>
          <Link href="/projekte">{t('nav.projekte')}</Link>
          <Link href="/skills">{t('nav.skills')}</Link>
          <Link href="/kontakt">{t('nav.kontakt')}</Link>
        </nav>

        <div className="foot-contact">
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={contact.github} target="_blank" rel="noreferrer" className="foot-gh">
            <IconGitHub size={15} /> {contact.github.replace('https://', '')}
          </a>
          <span>{tr(site.location)}</span>
        </div>
      </div>

      <div className="container foot-bottom">
        <span>© {year} {site.name}</span>
        <div className="foot-bottom-right">
          <button className="foot-link" onClick={() => setImpOpen(true)}>{t('foot.impressum')}</button>
          <span className="dot">·</span>
          <span>{t('foot.made')}</span>
        </div>
      </div>

      <Modal open={impOpen} onClose={() => setImpOpen(false)}>
        <p className="eyebrow">{t('foot.impressum')}</p>
        <h2 className="modal-title">{impressum.name}</h2>
        <address className="imp-address">
          {impressum.addressLines.map((line, i) => <span key={i}>{line}<br /></span>)}
          <a href={`mailto:${impressum.email}`}>{impressum.email}</a>
        </address>
        <p className="muted">{tr(impressum.note)}</p>
      </Modal>
    </footer>
  )
}

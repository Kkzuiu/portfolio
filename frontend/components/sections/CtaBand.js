'use client'
import Link from 'next/link'
import { useLang } from '@/components/LangProvider'

export default function CtaBand() {
  const { t } = useLang()
  return (
    <section className="section band-dark">
      <div className="container" style={{ textAlign: 'center', maxWidth: 780 }}>
        <p className="kicker">{t('home.ctaKicker')}</p>
        <h2>{t('home.ctaTitle')} <em>{t('home.ctaTitleEm')}</em></h2>
        <p style={{ marginLeft: 'auto', marginRight: 'auto' }}>{t('home.ctaText')}</p>
        <div className="buttons center">
          <Link href="/projekte" className="btn">{t('home.seeProjects')}</Link>
          <Link href="/kontakt" className="btn ghost">{t('start.ctaContact')}</Link>
        </div>
      </div>
    </section>
  )
}

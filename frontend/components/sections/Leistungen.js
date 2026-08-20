'use client'
import Link from 'next/link'
import { useLang } from '@/components/LangProvider'

export default function Leistungen() {
  const { t } = useLang()
  const rows = [
    ['home.web', 'home.webText'],
    ['home.mobile', 'home.mobileText'],
    ['home.data', 'home.dataText'],
    ['home.design', 'home.designText'],
  ]

  return (
    <section className="section lst">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">{t('lst.sub')}</p>
          <h2>{t('home.doTitle')}</h2>
          <p className="lead">{t('home.doLead')}</p>
        </div>

        <div className="lst-list">
          {rows.map(([title, body], i) => (
            <div className="lst-row reveal" key={title}>
              <span className="lst-num">{String(i + 1).padStart(2, '0')}</span>
              <div className="lst-body">
                <h3>{t(title)}</h3>
                <p>{t(body)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="buttons center">
          <Link href="/projekte" className="btn">{t('home.toProjects')}</Link>
          <Link href="/about" className="btn ghost">{t('home.toAbout')}</Link>
        </div>
      </div>
    </section>
  )
}

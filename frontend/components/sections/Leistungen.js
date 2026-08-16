'use client'
import Link from 'next/link'
import { useLang } from '@/components/LangProvider'

export default function Leistungen() {
  const { t } = useLang()
  const cards = [
    ['home.web', 'home.webText'],
    ['home.mobile', 'home.mobileText'],
    ['home.data', 'home.dataText'],
    ['home.design', 'home.designText'],
  ]

  return (
    <section className="section alt">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">{t('home.doTitle')}</p>
          <h2>{t('home.doTitle')}</h2>
          <p className="lead">{t('home.doLead')}</p>
        </div>

        <div className="info-cards">
          {cards.map(([title, body]) => (
            <div className="info-card reveal" key={title}>
              <h3>{t(title)}</h3>
              <p>{t(body)}</p>
            </div>
          ))}
        </div>

        <div className="buttons center">
          <Link href="/projekte" className="btn">{t('home.toProjects')}</Link>
          <Link href="/about" className="btn">{t('home.toAbout')}</Link>
        </div>
      </div>
    </section>
  )
}

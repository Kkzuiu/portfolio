'use client'
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

        <div className="do-grid">
          {rows.map(([title, body], i) => (
            <div className="do-card reveal" key={title}>
              <span className="do-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{t(title)}</h3>
              <p>{t(body)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

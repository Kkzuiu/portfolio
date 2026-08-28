'use client'
import { useLang } from '@/components/LangProvider'

// Persönlicher Abschluss unter der Tastatur auf der Skills-Seite.
export default function MeinWeg() {
  const { t } = useLang()

  return (
    <section className="section weg">
      <div className="container">
        <div className="weg-grid reveal">
          <div className="weg-head">
            <p className="eyebrow">{t('weg.sub')}</p>
            <h2>{t('weg.title')}</h2>
            <p className="weg-kicker">{t('weg.kicker')}</p>
          </div>
          <div className="weg-body">
            <p className="one" dangerouslySetInnerHTML={{ __html: t('weg.p1') }} />
            <p className="two" dangerouslySetInnerHTML={{ __html: t('weg.p2') }} />
          </div>
        </div>
      </div>
    </section>
  )
}

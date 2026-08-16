'use client'
import { useLang } from '@/components/LangProvider'
import { hobbys, sprachen } from '@/data/personal'

export default function Personal() {
  const { t, tr } = useLang()

  return (
    <section className="section">
      <div className="container personal-grid">
        <div className="reveal">
          <h2 className="block-title">{t('about.hobbys')}</h2>
          <div className="hobby-notes">
            {hobbys.map((h) => (
              <div className="note" key={tr(h.title)}>
                <span className="tape" aria-hidden="true" />
                <b>{tr(h.title)}</b>
                <span>{tr(h.body)}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal">
          <h2 className="block-title">{t('about.sprachen')}</h2>
          <div className="lang-edit">
            {sprachen.map((s) => (
              <div className="lang" key={tr(s.name)}>
                <span className="lang-name">{tr(s.name)}</span>
                <span className="lang-level">{t(`lvl.${s.level}`)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

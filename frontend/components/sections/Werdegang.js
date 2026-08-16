'use client'
import { useLang } from '@/components/LangProvider'
import { werdegang } from '@/data/werdegang'

export default function Werdegang() {
  const { t, tr } = useLang()
  if (werdegang.length === 0) return null

  return (
    <section className="section alt">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">{t('about.weg')}</p>
          <h2>{t('about.weg')}</h2>
        </div>

        <ol className="timeline">
          {werdegang.map((eintrag, i) => {
            const bis = typeof eintrag.to === 'string' ? eintrag.to : tr(eintrag.to)
            const tag = eintrag.kind === 'erfahrung' ? t('about.experience') : t('about.education')
            return (
              <li className="timeline-item reveal" key={i}>
                <span className="timeline-tag">{tag}</span>
                <span className="timeline-date">{eintrag.from} – {bis}</span>
                <h3>{tr(eintrag.title)}</h3>
                <p>{tr(eintrag.where)}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

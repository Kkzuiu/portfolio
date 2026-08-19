'use client'
import { useState } from 'react'
import { useLang } from '@/components/LangProvider'
import { site } from '@/data/site'
import { sprachen } from '@/data/personal'

export default function About() {
  const { t, tr } = useLang()
  const [hatFoto, setHatFoto] = useState(true)

  const meta = [
    [t('about.factOrt'), tr(site.location)],
    [t('about.factSchule'), site.school],
    [t('about.factFokus'), tr(site.focus)],
    [t('about.factSprachen'), sprachen.map((s) => tr(s.name)).join(', ')],
  ]

  return (
    <section className="section">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">{t('about.eyebrow')}</p>
          <h1>{t('about.title')}</h1>
        </div>

        <div className={`about-top ${hatFoto ? '' : 'no-photo'}`}>
          <p className="about-statement reveal">
            <span className="quote">„</span>{tr(site.about)}<span className="quote">“</span>
          </p>

          {hatFoto && (
            <figure className="about-photo reveal">
              <img src="/portrait.jpg" alt={t('about.portraitAlt')} onError={() => setHatFoto(false)} />
            </figure>
          )}
        </div>

        <div className="fact-edit reveal">
          {meta.map(([label, value]) => (
            <div className="fact" key={label}>
              <span className="fact-label">{label}</span>
              <span className="fact-value">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

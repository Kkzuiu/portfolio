'use client'
import { useState } from 'react'
import { useLang } from '@/components/LangProvider'
import { skills } from '@/data/skills'
import RadarChart from '@/components/RadarChart'

export default function SkillsListe() {
  const { t, tr } = useLang()
  const [aktiv, setAktiv] = useState(0)
  const kategorie = skills[aktiv]

  return (
    <section className="section">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">{t('skills.eyebrow')}</p>
          <h1>{t('skills.title')}</h1>
          <p className="lead">{t('skills.lead')}</p>
        </div>

        <div className="radar-box reveal">
          <h2 className="radar-title">{tr(kategorie.name)}</h2>
          <RadarChart items={kategorie.items} />
        </div>

        <div className="skill-cards">
          {skills.map((k, i) => (
            <button
              type="button"
              className={`skill-card ${i === aktiv ? 'active' : ''}`}
              key={tr(k.name)}
              onClick={() => setAktiv(i)}
              aria-pressed={i === aktiv}
            >
              <h3>{tr(k.name)}</h3>
              <div className="tags">
                {k.items.map((item) => <span key={item.name}>{item.name}</span>)}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

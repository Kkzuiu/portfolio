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

        <div className="skills-wrap reveal">
          <div className="radar-side">
            <RadarChart items={kategorie.items} />
            <h2 className="radar-title">{tr(kategorie.name)}</h2>
          </div>

          <div className="skills-side">
            <div className="skill-pills">
              {skills.map((k, i) => (
                <button
                  type="button"
                  className={`skill-pill ${i === aktiv ? 'active' : ''}`}
                  key={tr(k.name)}
                  onClick={() => setAktiv(i)}
                  aria-pressed={i === aktiv}
                >
                  {tr(k.name)}
                </button>
              ))}
            </div>

            <div className="skill-items tags">
              {kategorie.items.map((it) => <span key={it.name}>{it.name}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

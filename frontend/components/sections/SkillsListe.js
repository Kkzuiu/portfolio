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
          <div className="radar-stage">
            <div className="radar-frame">
              <span className="spark" aria-hidden="true">✦</span>
              <RadarChart items={kategorie.items} />
            </div>
            <h2 className="radar-title">{tr(kategorie.name)}</h2>
          </div>

          <div className="skill-picker">
            {skills.map((k, i) => (
              <button
                type="button"
                className={`skill-card ${i === aktiv ? 'active' : ''}`}
                key={tr(k.name)}
                onClick={() => setAktiv(i)}
                aria-pressed={i === aktiv}
              >
                <h3>{tr(k.name)}</h3>
                <span className="skill-count">{String(k.items.length).padStart(2, '0')}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

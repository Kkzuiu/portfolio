'use client'
import { useState } from 'react'
import { useLang } from '@/components/LangProvider'
import { projekte } from '@/data/projekte'
import ProjektKarte from './ProjektKarte'

function kategorie(p) {
  const tset = p.tech.join(' ')
  if (/MAUI|React Native|Expo/i.test(tset)) return 'mobile'
  if (/WinForms|JavaFX|Desktop|Konsole|Console/i.test(tset)) return 'desktop'
  return 'web'
}

export default function ProjekteListe() {
  const { t } = useLang()
  const [filter, setFilter] = useState('alle')

  const alle = [...projekte].sort((a, b) => a.title.localeCompare(b.title))
  const gefiltert = filter === 'alle' ? alle : alle.filter((p) => kategorie(p) === filter)

  const filters = [
    ['alle', t('proj.all')],
    ['web', t('proj.web')],
    ['mobile', t('proj.mobile')],
    ['desktop', t('proj.desktop')],
  ]

  return (
    <section className="section">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">{t('proj.eyebrow')}</p>
          <h1>{t('proj.title')}</h1>
          <p className="lead">{t('proj.lead')}</p>
        </div>

        <div className="filterbar reveal">
          {filters.map(([key, label]) => (
            <button
              type="button"
              key={key}
              className={`skill-pill ${filter === key ? 'active' : ''}`}
              onClick={() => setFilter(key)}
              aria-pressed={filter === key}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {gefiltert.map((p, i) => <ProjektKarte key={p.title} p={p} index={i} />)}
        </div>
      </div>
    </section>
  )
}

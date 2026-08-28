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

const alleTech = [...new Set(projekte.flatMap((p) => p.tech))].sort((a, b) => a.localeCompare(b))

export default function ProjekteListe() {
  const { t } = useLang()
  const [kat, setKat] = useState('alle')
  const [tech, setTech] = useState('alle')
  const [suche, setSuche] = useState('')

  const alle = [...projekte].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || a.title.localeCompare(b.title))
  const q = suche.trim().toLowerCase()

  const gefiltert = alle.filter((p) => {
    if (kat !== 'alle' && kategorie(p) !== kat) return false
    if (tech !== 'alle' && !p.tech.includes(tech)) return false
    if (q && !`${p.title} ${p.tech.join(' ')}`.toLowerCase().includes(q)) return false
    return true
  })

  const aktiv = kat !== 'alle' || tech !== 'alle' || q !== ''
  const zuruecksetzen = () => { setKat('alle'); setTech('alle'); setSuche('') }

  return (
    <section className="section">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">{t('proj.eyebrow')}</p>
          <h1>{t('proj.title')}</h1>
          <p className="lead">{t('proj.lead')}</p>
        </div>

        <div className="filterbar reveal">
          <div className="filter-search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="search"
              value={suche}
              onChange={(e) => setSuche(e.target.value)}
              placeholder={t('proj.search')}
              aria-label={t('proj.search')}
            />
          </div>

          <select value={kat} onChange={(e) => setKat(e.target.value)} aria-label={t('proj.filterLabel')}>
            <option value="alle">{t('proj.allCats')}</option>
            <option value="web">{t('proj.web')}</option>
            <option value="mobile">{t('proj.mobile')}</option>
            <option value="desktop">{t('proj.desktop')}</option>
          </select>

          <select value={tech} onChange={(e) => setTech(e.target.value)} aria-label="Technologie">
            <option value="alle">{t('proj.allTech')}</option>
            {alleTech.map((x) => <option key={x} value={x}>{x}</option>)}
          </select>

          {aktiv && (
            <button type="button" className="filter-reset" onClick={zuruecksetzen}>{t('proj.reset')}</button>
          )}

          <span className="filter-count">{gefiltert.length} {t('proj.results')}</span>
        </div>

        {gefiltert.length === 0 ? (
          <p className="projekte-empty">{t('proj.noResults')}</p>
        ) : (
          <div className="project-grid">
            {gefiltert.map((p, i) => <ProjektKarte key={p.title} p={p} index={i} />)}
          </div>
        )}
      </div>
    </section>
  )
}

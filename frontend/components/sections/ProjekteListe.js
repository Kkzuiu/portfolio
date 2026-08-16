'use client'
import { useLang } from '@/components/LangProvider'
import { projekte } from '@/data/projekte'
import ProjektKarte from './ProjektKarte'

export default function ProjekteListe() {
  const { t } = useLang()

  const alle = [...projekte].sort((a, b) => a.title.localeCompare(b.title))

  return (
    <section className="section">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">{t('proj.eyebrow')}</p>
          <h1>{t('proj.title')}</h1>
          <p className="lead">{t('proj.lead')}</p>
        </div>

        <div className="project-grid">
          {alle.map((p, i) => <ProjektKarte key={p.title} p={p} index={i} />)}
        </div>
      </div>
    </section>
  )
}

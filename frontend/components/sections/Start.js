'use client'
import Link from 'next/link'
import { useLang } from '@/components/LangProvider'
import { site } from '@/data/site'
import Collage from '@/components/Collage'

export default function Start() {
  const { t, tr } = useLang()

  return (
    <>
      <section className="hero-full">
        <div className="container">
          <div className="hero-collage">
            <Collage />
          </div>
        </div>
        <a href="#weiter" className="scroll-hint" aria-label="Nach unten scrollen">↓</a>
      </section>

      <section className="start" id="weiter">
        <div className="container">
          <div className="start-intro">
            <p className="eyebrow">{site.school}</p>
            <h1>{site.name}</h1>
            <p className="start-role">{tr(site.role)}</p>
            <p className="start-loc">{tr(site.location)} · <span>{tr(site.focus)}</span></p>
            <p className="start-tagline">{tr(site.tagline)}</p>

            <div className="buttons">
              <Link href="/projekte" className="btn">{t('start.ctaProjects')}</Link>
              <Link href="/kontakt" className="btn ghost">{t('start.ctaContact')}</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

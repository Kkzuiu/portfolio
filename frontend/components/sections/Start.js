'use client'
import Link from 'next/link'
import { useLang } from '@/components/LangProvider'
import { site, heroSlogan } from '@/data/site'

export default function Start() {
  const { t, tr } = useLang()
  const parts = site.name.split(' ')
  const nameFirst = parts[0]
  const nameRest = parts.slice(1).join(' ')

  return (
    <section className="hero">
      <div className="hero-grid container">
        <div className="hero-lead">
          <p className="hero-hi">{t('hero.hi')}</p>
          <h1 className="hero-name">{nameFirst}<br />{nameRest}</h1>
          <div className="hero-rule" aria-hidden="true" />
          <p className="hero-role">{tr(site.role)}</p>
          <p className="hero-school">{tr(site.roleSchool)}</p>
          <p className="hero-slogan">{tr(heroSlogan)}</p>
          <div className="buttons">
            <Link href="/kontakt" className="btn">{t('start.ctaContact')}</Link>
          </div>
        </div>

        <div className="hero-art">
          <img src="/start/blossom.jpg" alt="" className="hero-painting" />
        </div>
      </div>
    </section>
  )
}

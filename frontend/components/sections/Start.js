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
          <p className="hero-hi">Hello, I&rsquo;m</p>
          <h1 className="hero-name">{nameFirst}<br />{nameRest}</h1>
          <div className="hero-rule" aria-hidden="true" />
          <p className="hero-role">{tr(site.role)}</p>
          <p className="hero-school">{tr(site.roleSchool)}</p>
          <p className="hero-slogan">{tr(heroSlogan)}</p>
          <div className="buttons">
            <Link href="/projekte" className="btn">{t('start.ctaProjects')}</Link>
            <Link href="/kontakt" className="btn ghost">{t('start.ctaContact')}</Link>
          </div>
        </div>

        <div className="hero-art">
          <span className="spark-1" aria-hidden="true">✦</span>
          <img src="/collage/blossom.jpg" alt="" className="hero-painting" />
          <img src="/Cat.jpeg" alt="" className="hero-photo" />
          <span className="spark-2" aria-hidden="true">✧</span>
        </div>
      </div>
    </section>
  )
}

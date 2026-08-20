'use client'
import Link from 'next/link'
import { useLang } from '@/components/LangProvider'
import { site, heroQuote, heroSlogan } from '@/data/site'

export default function Start() {
  const { t, tr } = useLang()
  const nameParts = site.name.split(' ')
  const nameFirst = nameParts[0]
  const nameRest = nameParts.slice(1).join(' ')

  return (
    <section className="editorial">
      <img src="/collage/blossom.jpg" alt="" className="eh-blossom" />

      <div className="container eh-wrap">
        <div className="eh-left">
          <h1>{nameFirst}<br />{nameRest}</h1>
          <p className="eh-role">{tr(site.role)}</p>
          <p className="eh-school">{tr(site.roleSchool)}</p>
          <p className="eh-text">{tr(heroSlogan)}</p>

          <div className="buttons">
            <Link href="/projekte" className="btn">{t('start.ctaProjects')}</Link>
            <Link href="/kontakt" className="btn ghost">{t('start.ctaContact')}</Link>
          </div>
        </div>
      </div>

      <div className="eh-band">
        <img src="/Cat.jpeg" alt="" className="eh-photo" />
        <blockquote className="eh-quote">
          {heroQuote.text}
          <cite>— {heroQuote.author}</cite>
        </blockquote>
      </div>
    </section>
  )
}

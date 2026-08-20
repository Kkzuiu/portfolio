'use client'
import Link from 'next/link'
import { useLang } from '@/components/LangProvider'
import { site, heroQuote } from '@/data/site'

export default function Start() {
  const { t, tr } = useLang()

  return (
    <section className="editorial">
      <img src="/collage/blossom.jpg" alt="" className="eh-blossom" />

      <div className="container eh-wrap">
        <div className="eh-left">
          <h1>{site.name}</h1>
          <p className="eh-role">{tr(site.role)}</p>
          <p className="eh-text">{tr(site.tagline)}</p>

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

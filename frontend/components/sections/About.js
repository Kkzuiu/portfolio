'use client'
import { useLang } from '@/components/LangProvider'
import { site } from '@/data/site'

export default function About() {
  const { t, tr } = useLang()

  const facts = [
    [t('about.factOrt'), tr(site.location)],
    [t('about.factSchule'), 'IMS Bern'],
    [t('about.factFokus'), tr(site.focus)],
  ]

  return (
    <section className="section ab2">
      <div className="container">
        <div className="ab2-top reveal">
          <figure className="ab2-photo">
            <img src="/about/uebermichcat.jpeg" alt={t('about.portraitAlt')} />
          </figure>

          <div className="ab2-text">
            <p className="ab2-hi">{t('hero.hi')}</p>
            <h1>{site.name}</h1>
            <p className="ab2-about">{tr(site.about)}</p>

            <div className="ab2-facts">
              {facts.map(([label, value]) => (
                <div className="ab2-fact" key={label}>
                  <b>{label}</b>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'
import Link from 'next/link'
import { useLang } from '@/components/LangProvider'
import { projekte } from '@/data/projekte'

const FEATURED = ['Gaming Platform', 'HKM – Museum App', 'Matcha After Dark']

export default function FeaturedWork() {
  const { t, tr } = useLang()
  const items = FEATURED
    .map((name) => projekte.find((p) => p.title === name))
    .filter(Boolean)

  return (
    <section className="section fw">
      <div className="container">
        <div className="section-head">
          <span className="kanji-mark" aria-hidden="true">作品</span>
          <p className="eyebrow">{t('fw.sub')}</p>
          <h2>{t('fw.title')}</h2>
          <p className="lead">{t('fw.lead')}</p>
        </div>

        <div className="fw-list">
          {items.map((p, i) => (
            <article className="fw-row reveal" key={p.title}>
              <div className="fw-media">
                <span className="fw-vert kanji" aria-hidden="true">作品</span>
                <img src={p.image} alt={p.title} />
              </div>
              <div className="fw-info">
                <span className="fw-idx">{String(i + 1).padStart(2, '0')}</span>
                <h3>{p.title}</h3>
                <p>{tr(p.short)}</p>
                <div className="tags">
                  {p.tech.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <Link href="/projekte" className="fw-link">{t('fw.view')} →</Link>
              </div>
            </article>
          ))}
        </div>

        <div className="buttons center">
          <Link href="/projekte" className="btn">{t('fw.all')}</Link>
        </div>
      </div>
    </section>
  )
}

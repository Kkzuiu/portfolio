'use client'
import Link from 'next/link'
import { useLang } from '@/components/LangProvider'

export default function Statement() {
  const { t } = useLang()
  return (
    <section className="section teaser">
      <div className="container teaser-grid">
        <div className="reveal">
          <span className="teaser-num">01</span>
        </div>
        <div className="reveal">
          <p className="eyebrow">{t('home.aboutKicker')}</p>
          <h2>{t('home.aboutTitle')} <em>{t('home.aboutTitleEm')}</em></h2>
          <p>{t('home.aboutText')}</p>
          <div className="buttons">
            <Link href="/about" className="btn ghost">{t('home.aboutBtn')} →</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

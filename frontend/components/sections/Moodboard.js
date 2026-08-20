'use client'
import { useLang } from '@/components/LangProvider'

const TILES = [
  { src: '/collage/blossom.jpg', cls: 'mt-tall' },
  { src: '/collage/sonnenuntergang.jpg', cls: 'mt-b' },
  { src: '/collage/lotus.jpg', cls: 'mt-c' },
  { src: '/collage/wasser.jpg', cls: 'mt-d' },
  { src: '/collage/drache.jpg', cls: 'mt-e' },
  { src: '/collage/cats.jpg', cls: 'mt-f' },
]

export default function Moodboard() {
  const { t } = useLang()
  return (
    <section className="section mood">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">{t('home.moodKicker')}</p>
          <h2>{t('home.moodTitle')} <span className="script">{t('home.moodTitleEm')}</span></h2>
          <p className="lead">{t('home.moodLead')}</p>
        </div>
        <div className="mood-grid reveal">
          {TILES.map((tile) => (
            <div className={`mood-tile ${tile.cls}`} key={tile.src}>
              <img src={tile.src} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

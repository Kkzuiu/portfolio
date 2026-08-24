'use client'
import { useLang } from '@/components/LangProvider'
import { sprachen } from '@/data/personal'

const GREET = {
  'Vietnamesisch': 'Xin chào',
  'Deutsch': 'Hallo',
  'Englisch': 'Hello',
  'Französisch': 'Bonjour',
}

const BOARD = [
  {
    title: { de: 'Zeichnen', en: 'Drawing' },
    note: { de: 'Von schnellen Skizzen bis zum Malen auf Leinwand, am liebsten mit Aquarellfarben.', en: 'From quick sketches to painting on canvas, most of all with watercolours.' },
    images: ['/about/hobbys/spiderman.jpeg'],
  },
  {
    title: { de: 'Lesen', en: 'Reading' },
    note: { de: 'Von buddhistischen Lehren und Philosophie bis zu Geschichten und Krimis.', en: 'From Buddhist teachings and philosophy to stories and crime novels.' },
    images: ['/about/hobbys/lesen.png'],
  },
  {
    title: { de: 'Violine', en: 'Violin' },
    note: { de: 'Am liebsten klassische Musik, aber auch Stücke aus Filmen und Serien.', en: 'Classical music most of all, but also pieces from films and series.' },
    images: ['/about/hobbys/violine.png'],
  },
  {
    title: { de: 'Volleyball', en: 'Volleyball' },
    note: { de: 'Teamsport mit Freunden und eine schöne Abwechslung zum Bildschirm.', en: 'Team sport with friends and a welcome change from the screen.' },
    images: ['/about/hobbys/volleyball.png'],
  },
]

export default function Personal() {
  const { t, tr } = useLang()

  return (
    <section className="section personal">
      <div className="container">
        <h2 className="block-title">{t('about.hobbys')}</h2>

        <div className="vboard-frame">
          <div className="vboard">
            {BOARD.map((it, i) => (
              <figure className={`vb2 vb2-${i % 3}`} key={i}>
                <span className="vb2-tape" aria-hidden="true" />
                {it.images.length > 0 && (
                  <div className={`vb2-photos photos-${Math.min(it.images.length, 4)}`}>
                    {it.images.map((src) => <img src={src} alt={tr(it.title)} key={src} loading="lazy" />)}
                  </div>
                )}
                <figcaption>
                  <b>{tr(it.title)}</b>
                  <span>{tr(it.note)}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <h2 className="block-title lang-head">{t('about.sprachen')}</h2>
        <div className="lang-bubbles">
          {sprachen.map((s) => (
            <div className="lbub" key={tr(s.name)}>
              <span className="lbub-hi">{GREET[s.name.de] || 'Hi'}</span>
              <span className="lbub-name">{tr(s.name)}</span>
              <span className="lbub-lvl">{t(`lvl.${s.level}`)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

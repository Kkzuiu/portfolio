'use client'
import { useState } from 'react'
import { useLang } from '@/components/LangProvider'
import Modal from '@/components/Modal'
import { IconGitHub, IconExternal, IconPlay } from '@/components/icons'

const ABSCHNITTE = ['idee', 'beschreibung', 'umsetzung', 'ergebnis', 'aufwand', 'erkenntnisse']

export default function ProjektKarte({ p, index }) {
  const { t, tr } = useLang()
  const [videoOpen, setVideoOpen] = useState(false)
  const [abstractOpen, setAbstractOpen] = useState(false)

  const abschnitte = ABSCHNITTE
    .map((key) => ({ key, text: tr(p.abstract?.[key]) }))
    .filter((f) => f.text)
  const galerie = p.gallery || []
  const hatAbstract = abschnitte.length > 0 || galerie.length > 0

  return (
    <article className="project-card reveal">
      <div className={`project-cover cover-${index % 3}`}>
        {p.image
          ? <img src={p.image} alt={p.title} />
          : <span className="cover-letter">{p.title.charAt(0)}</span>}
      </div>

      <div className="project-body">
        <h3>{p.title}</h3>
        <p className="project-desc">{tr(p.short)}</p>

        <div className="tags">
          {p.tech.map((tech) => <span key={tech}>{tech}</span>)}
        </div>

        <div className="project-links">
          {p.github && (
            <a className="link-btn primary" href={p.github} target="_blank" rel="noreferrer">
              <IconGitHub /> {t('proj.code')}
            </a>
          )}
          {p.demoVideo && (
            <button className="link-btn" onClick={() => setVideoOpen(true)}>
              <IconPlay /> {t('proj.demo')}
            </button>
          )}
          {hatAbstract && (
            <button className="link-btn" onClick={() => setAbstractOpen(true)}>
              <IconExternal /> {t('proj.details')}
            </button>
          )}
        </div>
      </div>

      {p.demoVideo && (
        <Modal open={videoOpen} onClose={() => setVideoOpen(false)}>
          <p className="eyebrow">{p.title}</p>
          <h2 className="modal-title">{t('proj.demo')}</h2>
          <video controls autoPlay className="modal-video">
            <source src={p.demoVideo} type="video/mp4" />
          </video>
        </Modal>
      )}

      {hatAbstract && (
        <Modal open={abstractOpen} onClose={() => setAbstractOpen(false)}>
          <p className="eyebrow">{t('proj.label')}</p>
          <h2 className="modal-title">{p.title}</h2>
          <p className="modal-tech"><strong>{t('abs.tech')}:</strong> {p.tech.join(' · ')}</p>

          {galerie.length > 0 && (
            <div className="modal-gallery">
              {galerie.map((src) => (
                <a key={src} href={src} target="_blank" rel="noreferrer">
                  <img src={src} alt={p.title} loading="lazy" />
                </a>
              ))}
            </div>
          )}

          {abschnitte.map((f) => (
            <div className="abstract-block" key={f.key}>
              <h3>{t(`abs.${f.key}`)}</h3>
              <p>{f.text}</p>
            </div>
          ))}

          {p.github && (
            <a className="btn" href={p.github} target="_blank" rel="noreferrer" style={{ marginTop: 12 }}>
              <IconGitHub /> {t('proj.code')}
            </a>
          )}
        </Modal>
      )}
    </article>
  )
}

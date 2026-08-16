'use client'

import { useEffect, useState } from 'react'
import Collage from './Collage'

const DAUER = 5000

let introGestartet = false

export default function IntroOverlay() {
  const [show, setShow] = useState(!introGestartet)
  const [fade, setFade] = useState(false)

  useEffect(() => {
    if (introGestartet) return
    introGestartet = true

    document.body.style.overflow = 'hidden'
    setTimeout(() => setFade(true), DAUER)
    setTimeout(() => {
      setShow(false)
      document.body.style.overflow = ''
    }, DAUER + 700)
  }, [])

  if (!show) return null

  return (
    <div className={`intro ${fade ? 'fade' : ''}`} aria-hidden="true">
      <div className="intro-inner">
        <Collage />
      </div>
    </div>
  )
}

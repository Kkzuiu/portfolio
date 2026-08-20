'use client'
import { heroQuote } from '@/data/site'

export default function Manifest() {
  return (
    <section className="section manifest">
      <div className="container">
        <span className="kanji-mark" aria-hidden="true">學</span>
        <span className="rule" aria-hidden="true" />
        <blockquote>
          {heroQuote.text}
        </blockquote>
        <cite>— {heroQuote.author}</cite>
      </div>
    </section>
  )
}

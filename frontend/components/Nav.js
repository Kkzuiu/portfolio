'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLang } from './LangProvider'
import { useTheme } from './ThemeProvider'
import { LANGS } from '@/lib/i18n'
import { IconSun, IconMoon, IconLock } from './icons'

const LINKS = [
  ['/', 'nav.start'],
  ['/about', 'nav.about'],
  ['/projekte', 'nav.projekte'],
  ['/skills', 'nav.skills'],
  ['/kontakt', 'nav.kontakt'],
]

export default function Nav() {
  const { t, lang, setLang } = useLang()
  const { theme, toggle } = useTheme()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const nextLang = LANGS.find((l) => l.code !== lang) || LANGS[0]

  return (
    <header className="nav">
      <div className="nav-inner container">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="Cat Tuong" />
        </Link>

        <button
          className={`burger ${open ? 'open' : ''}`}
          aria-label={t('a11y.menu')}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>

        <div className={`nav-right ${open ? 'open' : ''}`}>
          <nav className="menu" onClick={() => setOpen(false)}>
            {LINKS.map(([href, key]) => (
              <Link key={href} href={href} className={pathname === href ? 'active' : ''}>{t(key)}</Link>
            ))}
            <Link href="/dokumente" className={`menu-lock ${pathname === '/dokumente' ? 'active' : ''}`}>
              <IconLock /> {t('nav.dokumente')}
            </Link>
          </nav>

          <div className="tools">
            <button className="tool" onClick={() => setLang(nextLang.code)} aria-label={t('a11y.lang')}>
              {nextLang.label}
            </button>
            <button className="tool" onClick={toggle} aria-label={t('a11y.theme')}>
              {theme === 'dark' ? <IconSun /> : <IconMoon />}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

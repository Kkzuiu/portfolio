'use client'
import { useState, useEffect } from 'react'
import { useLang } from '@/components/LangProvider'
import { skills } from '@/data/skills'

// --- Schweizer QWERTZ-Tastatur ---
// t(legend, code?, w?) = drückbare Technologie-Taste; d(legend, w?) = Deko-Taste (Modifier/tot).
const t = (legend, code, w = 1) => ({ legend, code: code ?? legend.toLowerCase(), w, tech: true })
const d = (legend, w = 1) => ({ legend, w, tech: false })

const RAW = [
  [d('esc', 1.4), t('F1', 'f1'), t('F2', 'f2'), t('F3', 'f3'), t('F4', 'f4'), t('F5', 'f5'), t('F6', 'f6'), t('F7', 'f7'), t('F8', 'f8'), t('F9', 'f9'), t('F10', 'f10'), t('F11', 'f11'), t('F12', 'f12'), d('⏏')],
  [t('§'), t('1'), t('2'), t('3'), t('4'), t('5'), t('6'), t('7'), t('8'), t('9'), t('0'), t("'"), d('^'), d('⌫', 1.8)],
  [d('tab', 1.5), t('Q'), t('W'), t('E'), t('R'), t('T'), t('Z'), t('U'), t('I'), t('O'), t('P'), t('ü'), d('¨')],
  [d('caps', 1.75), t('A'), t('S'), t('D'), t('F'), t('G'), t('H'), t('J'), t('K'), t('L'), t('ö'), t('ä'), t('$'), d('enter', 1.55)],
  [d('shift', 1.3), t('<'), t('Y'), t('X'), t('C'), t('V'), t('B'), t('N'), t('M'), t(','), t('.'), t('-'), d('shift', 1.9)],
  [d('fn', 1.1), d('ctrl', 1.1), d('opt', 1.1), d('cmd', 1.3), d('', 6), d('cmd', 1.3), d('opt', 1.1), d('◄'), d('▲▼'), d('►')],
]

// Welche Technologie sitzt auf ihrer echten Buchstabentaste.
const PRIMARY = {
  'HTML': 'h', 'CSS': 'c', 'JavaScript': 'j', 'UI/UX Design': 'u', 'Markdown': 'm', 'Git': 'g',
  'VS Code': 'v', 'Windows': 'w', 'Linux': 'l', 'Figma': 'f', 'XAML': 'x', 'IntelliJ IDEA': 'i',
  'Python': 'p', 'Bash': 'b', 'SQL': 's', 'Docker': 'd', 'React': 'r', 'Node.js': 'n',
  'Express': 'e', 'TypeScript': 't', 'Agile': 'a', '3D Printing': '3', '.NET': '.',
}
// Reihenfolge, in der die übrigen Technologien auf freie Tasten verteilt werden.
const FILL = ['1', '2', '4', '5', '6', '7', '8', '9', '0', "'", '§', 'ü', 'ö', 'ä', '$', '<', ',', '-', 'a', 'q', 'z', 'o', 'k', 'y', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10', 'f11', 'f12']

function build() {
  const rows = RAW.map((r) => r.map((k) => ({ ...k })))
  const techCodes = new Set()
  rows.forEach((r) => r.forEach((k) => { if (k.tech) techCodes.add(k.code) }))
  const codeToSkill = {}
  const placed = new Array(skills.length).fill(false)
  skills.forEach((s, i) => {
    const c = PRIMARY[s.name]
    if (c && techCodes.has(c) && codeToSkill[c] === undefined) { codeToSkill[c] = i; placed[i] = true }
  })
  let fi = 0
  skills.forEach((s, i) => {
    if (placed[i]) return
    while (fi < FILL.length && (codeToSkill[FILL[fi]] !== undefined || !techCodes.has(FILL[fi]))) fi++
    if (fi < FILL.length) { codeToSkill[FILL[fi]] = i; placed[i] = true; fi++ }
  })
  rows.forEach((r) => r.forEach((k) => { if (k.tech) { const si = codeToSkill[k.code]; k.skillIndex = si === undefined ? null : si } }))
  return { rows, codeToSkill }
}
const { rows: KB_ROWS, codeToSkill: CODE_TO_SKILL } = build()

function keyStyle(w) {
  if (w === 1) return undefined
  return { width: `calc(${w} * var(--ku) + ${w - 1} * var(--kg))` }
}

export default function SkillsListe() {
  const { t: tx, tr } = useLang()
  const [sel, setSel] = useState(null)
  const s = sel != null ? skills[sel] : null

  // Physische Tastatur: echte Taste drücken -> Technologie öffnen, nochmal drücken -> schliessen.
  useEffect(() => {
    function onKey(e) {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      const el = e.target
      const tag = (el && el.tagName ? el.tagName : '').toLowerCase()
      if (tag === 'input' || tag === 'textarea' || (el && el.isContentEditable)) return
      let code = e.key || ''
      if (/^F\d{1,2}$/.test(code)) code = code.toLowerCase()
      else if (code.length === 1) code = code.toLowerCase()
      else return
      const idx = CODE_TO_SKILL[code]
      if (idx === undefined) return
      if (/^f\d/.test(code)) e.preventDefault()
      setSel((prev) => (prev === idx ? null : idx))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const nivKey = s && (s.niveau === 'sehr' ? 'skills.levelSehr' : s.niveau === 'gut' ? 'skills.levelGut' : 'skills.levelGrund')

  return (
    <section className="section">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">{tx('skills.eyebrow')}</p>
          <h1>{tx('skills.title')}</h1>
          <p className="lead">{tx('skills.lead')}</p>
        </div>

        <div className="kb-legend reveal">
          <span className="lg-item n-sehr">{tx('skills.levelSehr')}</span>
          <span className="lg-item n-gut">{tx('skills.levelGut')}</span>
          <span className="lg-item n-grund">{tx('skills.levelGrund')}</span>
        </div>

        <div className="kb-layout reveal">
          <div className="kb">
           <div className="kb-inner">
            {KB_ROWS.map((row, ri) => (
              <div className="kb-row" key={ri}>
                {row.map((k, ki) => {
                  if (k.tech && k.skillIndex != null) {
                    const sk = skills[k.skillIndex]
                    const i = k.skillIndex
                    return (
                      <button
                        type="button"
                        key={ki}
                        data-i={i}
                        className={`key n-${sk.niveau} ${i === sel ? 'sel' : ''}`}
                        onClick={() => setSel(sel === i ? null : i)}
                        aria-pressed={i === sel}
                        aria-label={`${sk.name} (Taste ${k.legend})`}
                      >
                        <span className="cap" />
                        <span className="top">
                          <span className="pk" aria-hidden="true">{k.legend}</span>
                          {sk.icon
                            ? <span className="glyph"><i className={`devicon-${sk.icon}`} aria-hidden="true" /></span>
                            : <span className="txt">{sk.legend}</span>}
                          <span className="lgnd">{sk.short || sk.name}</span>
                        </span>
                      </button>
                    )
                  }
                  return (
                    <div className="key deco" key={ki} style={keyStyle(k.w)} aria-hidden="true">
                      <span className="cap" />
                      <span className="top"><span className="klbl">{k.legend}</span></span>
                    </div>
                  )
                })}
              </div>
            ))}
           </div>
          </div>

          {/* Fester Platz: das Panel taucht hier auf, ohne dass etwas darunter verrutscht. */}
          <div className="kb-detail">
            {s ? (
              <aside className="kd" key={sel}>
                <div className="kd-side">
                  <div className="kd-badge">
                    {s.icon
                      ? <i className={`devicon-${s.icon}`} aria-hidden="true" />
                      : <span className="kd-badgetxt">{s.legend}</span>}
                  </div>
                  <h2>{s.name}</h2>
                  <p className="cat">{tr(s.cat)}</p>
                  <span className={`kd-niv n-${s.niveau}`}>{tx(nivKey)}</span>
                </div>
                <div className="kd-main">
                  <p className="desc">{tr(s.desc)}</p>
                  {s.projekte.length > 0 && (
                    <>
                      <p className="lbl">{tx('skills.usedin')}</p>
                      <div className="kd-proj">
                        {s.projekte.map((p) => (
                          <span key={p}>{p}</span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </aside>
            ) : (
              <div className="kd-empty"><span>{tx('skills.pick')}</span></div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

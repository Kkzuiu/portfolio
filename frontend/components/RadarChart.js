'use client'

export default function RadarChart({ items }) {
  const size = 340
  const center = size / 2
  const radius = 118
  const rings = 5
  const count = items.length

  function punkt(index, distanz) {
    const winkel = (Math.PI * 2 * index) / count - Math.PI / 2
    return {
      x: center + Math.cos(winkel) * distanz,
      y: center + Math.sin(winkel) * distanz,
    }
  }

  const flaeche = items
    .map((item, i) => {
      const p = punkt(i, (radius * item.level) / 5)
      return `${p.x},${p.y}`
    })
    .join(' ')

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="radar" role="img" aria-label="Skill-Diagramm">
      {Array.from({ length: rings }).map((_, r) => (
        <circle key={r} cx={center} cy={center} r={(radius * (r + 1)) / rings} className="radar-ring" />
      ))}

      {items.map((_, i) => {
        const p = punkt(i, radius)
        return <line key={i} x1={center} y1={center} x2={p.x} y2={p.y} className="radar-axis" />
      })}

      <polygon points={flaeche} className="radar-shape" />

      {items.map((item, i) => {
        const p = punkt(i, (radius * item.level) / 5)
        const label = punkt(i, radius + 22)
        const anchor = label.x < center - 2 ? 'end' : label.x > center + 2 ? 'start' : 'middle'
        return (
          <g key={item.name}>
            <circle cx={p.x} cy={p.y} r="4" className="radar-dot" />
            <text x={label.x} y={label.y} textAnchor={anchor} dominantBaseline="middle" className="radar-label">
              {item.name}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

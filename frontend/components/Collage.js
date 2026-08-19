'use client'

const TILES = [
  { src: '/collage/cats.jpg', z: 6, pos: { top: '0%', left: '2.5%', width: '23%', height: '28%' } },
  { src: '/collage/wasser.jpg', z: 4, pos: { top: '29%', left: '14%', width: '13.5%', height: '15%' } },
  { src: '/collage/bokeh.jpg', z: 2, pos: { top: '12%', left: '26%', width: '27%', height: '26%' } },
  { src: '/collage/sonnenuntergang.jpg', z: 5, pos: { top: '22%', left: '28%', width: '58%', height: '78%' } },
  { src: '/collage/lotus.jpg', z: 6, pos: { top: '43%', left: '5%', width: '33%', height: '42%' } },
  { src: '/collage/bokeh2.jpg', z: 3, pos: { top: '5%', left: '63%', width: '32%', height: '21%' } },
  { src: '/collage/drache.jpg', z: 4, pos: { top: '21%', left: '85%', width: '15%', height: '31%' } },
]

export default function Collage() {
  return (
    <div className="collage" aria-hidden="true">
      {TILES.map((tile, i) => (
        <div
          key={i}
          className="tile"
          style={{ ...tile.pos, zIndex: tile.z, background: 'var(--paper-2)' }}
        >
          <img src={tile.src} alt="" />
        </div>
      ))}
    </div>
  )
}

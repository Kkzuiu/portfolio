'use client'

const TILES = [

  { src: '/collage/drache.jpg', rot: '-5deg', z: 3, pos: { top: '9%', left: '7%', width: '22%', height: '52%' } },

  { src: '/collage/cats.jpg', rot: '3deg', z: 6, pos: { top: '5%', left: '33%', width: '27%', height: '33%' } },

  { src: '/collage/sonnenuntergang.jpg', rot: '-2deg', z: 4, pos: { top: '31%', left: '39%', width: '25%', height: '55%' } },

  { src: '/collage/lotus.jpg', rot: '4deg', z: 3, pos: { top: '7%', right: '7%', width: '22%', height: '52%' } },

  { src: '/collage/wasser.jpg', rot: '-4deg', z: 5, pos: { bottom: '5%', left: '19%', width: '21%', height: '46%' } },
]

export default function Collage() {
  return (
    <div className="collage" aria-hidden="true">
      {TILES.map((tile, i) => (
        <div
          key={i}
          className="tile"
          style={{ ...tile.pos, zIndex: tile.z, transform: `rotate(${tile.rot})`, background: 'var(--paper-2)' }}
        >
          <img src={tile.src} alt="" />
        </div>
      ))}
    </div>
  )
}

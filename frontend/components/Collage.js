'use client'

const TILES = [
  { src: '/collage/cats.jpg', rot: '-1deg', z: 4, pos: { top: '6%', left: '2%', width: '25%', height: '42%' } },
  { src: '/collage/wasser.jpg', rot: '1.5deg', z: 3, pos: { top: '15%', left: '25%', width: '27%', height: '40%' } },
  { src: '/collage/sonnenuntergang.jpg', rot: '0deg', z: 5, pos: { top: '21%', left: '29%', width: '44%', height: '74%' } },
  { src: '/collage/lotus.jpg', rot: '1.5deg', z: 4, pos: { bottom: '5%', left: '4%', width: '31%', height: '46%' } },
  { src: '/collage/drache.jpg', rot: '2deg', z: 3, pos: { top: '10%', right: '2%', width: '29%', height: '46%' } },
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

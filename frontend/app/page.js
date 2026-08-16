import IntroOverlay from '@/components/IntroOverlay'
import Start from '@/components/sections/Start'
import Wellen from '@/components/Wellen'
import Leistungen from '@/components/sections/Leistungen'

export default function HomePage() {
  return (
    <>
      <IntroOverlay />
      <Start />
      <Wellen />
      <Leistungen />
    </>
  )
}

import About from '@/components/sections/About'
import Leistungen from '@/components/sections/Leistungen'
import Werdegang from '@/components/sections/Werdegang'
import Personal from '@/components/sections/Personal'

export const metadata = { title: 'Über mich · Nguyen Cat Tuong' }

export default function AboutPage() {
  return (
    <>
      <About />
      <Leistungen />
      <Werdegang />
      <Personal />
    </>
  )
}

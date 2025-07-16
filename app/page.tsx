import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import TechStack from '@/components/TechStack'
import Portfolio from '@/components/Portfolio'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <TechStack />
      <Portfolio />
      <Blog />
      <Contact />
    </main>
  )
}

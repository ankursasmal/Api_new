import Hero from '@/components/Hero'
import Services from '@/components/Services'
import TechStack from '@/components/TechStack'
import Portfolio from '@/components/Portfolio'
import About from '@/components/About'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <TechStack />
      <Portfolio />
      <About />
      <Contact />
    </main>
  )
}
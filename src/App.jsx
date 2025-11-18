import Header from './components/Header'
import Hero from './components/Hero'
import LogoMarquee from './components/LogoMarquee'
import Features from './components/Features'
import CRMCTA from './components/CRMCTA'
import Projects from './components/Projects'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Schedule from './components/Schedule'
import Footer from './components/Footer'
import FluidBackground from './components/FluidBackground'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <FluidBackground />
      <Header />
      <main className="pt-16">
        <Hero />
        <LogoMarquee />
        <Features />
        <Projects />
        <CRMCTA />
        <CTA />
        <Schedule />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

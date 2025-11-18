import Header from './components/Header'
import Hero from './components/Hero'
import LogoMarquee from './components/LogoMarquee'
import Features from './components/Features'
import CRMCTA from './components/CRMCTA'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Schedule from './components/Schedule'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-16">
        <Hero />
        <LogoMarquee />
        <Features />
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

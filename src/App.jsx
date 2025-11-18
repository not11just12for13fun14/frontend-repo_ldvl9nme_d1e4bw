import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import CRMCTA from './components/CRMCTA'
import Contact from './components/Contact'
import Schedule from './components/Schedule'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-16">
        <Hero />
        <Features />
        <CRMCTA />
        <Schedule />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Privacy, Terms, Story } from './components/LegalPages'

function Layout({ children }){
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="pt-16">{children}</div>
      <Footer />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Test />} />
        <Route path="/privacy" element={<Layout><Privacy /></Layout>} />
        <Route path="/terms" element={<Layout><Terms /></Layout>} />
        <Route path="/story" element={<Layout><Story /></Layout>} />
        <Route path="/login" element={<Layout><div className='max-w-md mx-auto py-24 px-6'><h1 className='text-3xl font-bold'>Client Login</h1><p className='mt-4 text-gray-300'>Your dedicated portal is coming soon. For access, contact your account manager.</p></div></Layout>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

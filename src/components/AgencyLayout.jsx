import Header from './Header'
import Footer from './Footer'

export default function AgencyLayout({ children }){
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  )
}

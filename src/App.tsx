import HeroSection from './components/HeroSection'
import SocialLinks from './components/SocialLinks'
import ProductShowcase from './components/ProductShowcase'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SocialLinks />
      <ProductShowcase />
      <Footer />
    </div>
  )
}

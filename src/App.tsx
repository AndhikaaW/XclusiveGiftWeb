import HeroSection from './components/HeroSection'
import ProductShowcase from './components/ProductShowcase'
import SocialLinks from './components/SocialLinks'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProductShowcase />
      <SocialLinks />
      <Footer />
    </div>
  )
}

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FeaturesGallery from '../components/FeaturesGallery'
import HowItWorks from '../components/HowItWorks'
import ReferralSystem from '../components/ReferralSystem'
import Pricing from '../components/Pricing'
import BrandStory from '../components/BrandStory'
import Footer from '../components/Footer'

function LandingPage() {
  return (
    <div className="landing-page">
      <Navbar />
      <Hero />
      <FeaturesGallery />
      <HowItWorks />
      <ReferralSystem />
      <Pricing />
      <BrandStory />
      <Footer />
    </div>
  )
}

export default LandingPage

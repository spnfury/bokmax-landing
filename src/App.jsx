import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LandingPageV2 from './pages/LandingPageV2'
import TermsOfUse from './pages/TermsOfUse'
import PrivacyPolicy from './pages/PrivacyPolicy'
import CookiesInfo from './pages/CookiesInfo'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPageV2 />} />
        <Route path="/v1" element={<LandingPage />} />
        <Route path="/v2" element={<LandingPageV2 />} />
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/cookies" element={<CookiesInfo />} />
      </Routes>
    </>
  )
}

export default App

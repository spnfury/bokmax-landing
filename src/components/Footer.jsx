import { Link } from 'react-router-dom'
import { Globe } from 'lucide-react'
import Logo from './Logo'

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
        <div style={{ flex: 2 }}>
          <Logo secondary className="footer-logo" />
          <p style={{ marginTop: '1.5rem', color: 'rgba(255, 255, 255, 0.6)', maxWidth: '300px', fontSize: '0.9rem', lineHeight: '1.7' }}>
            The elite referral network designed for the modern grooming industry. Secure, transparent, and built for growth.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
            <a href="#" className="footer-social"><Globe size={20} /></a>
            <a href="#" className="footer-social"><Globe size={20} /></a>
            <a href="#" className="footer-social"><Globe size={20} /></a>
          </div>
          <style>{`
            .footer-social { color: rgba(255, 255, 255, 0.5); transition: color 0.3s; }
            .footer-social:hover { color: white; }
          `}</style>
        </div>

        <div>
          <h4 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '0.9rem', letterSpacing: '1px' }}>PLATFORM</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <li><a href="#features" className="footer-link">Features</a></li>
            <li><a href="#how-it-works" className="footer-link">How It Works</a></li>
            <li><a href="#pricing" className="footer-link">Pricing</a></li>
          </ul>
        </div>

        <div>
          <h4 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '0.9rem', letterSpacing: '1px' }}>LEGAL</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <li><Link to="/terms" className="footer-link">Terms of Service</Link></li>
            <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
            <li><Link to="/cookies" className="footer-link">Cookie Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '0.9rem', letterSpacing: '1px' }}>STAY CONNECTED</h4>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginBottom: '1rem' }}>
            Subscribe to our newsletter for the latest updates.
          </p>
          <div style={{ display: 'flex', gap: '8px' }}>
            <input 
              type="email" 
              placeholder="Email address" 
              style={{ 
                background: 'rgba(255,255,255,0.05)', 
                border: '1px solid rgba(255,255,255,0.1)', 
                padding: '10px 16px', 
                borderRadius: '8px', 
                color: 'white',
                fontSize: '0.9rem',
                width: '100%'
              }} 
            />
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>
            © {new Date().getFullYear()} BOKMAX. Engineered for the modern professional.
          </p>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', fontStyle: 'italic' }}>
            Your Story, Your Style.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

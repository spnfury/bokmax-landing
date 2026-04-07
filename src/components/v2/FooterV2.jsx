import { Link } from 'react-router-dom'
import { Globe } from 'lucide-react'
import LogoV2 from './LogoV2'

function FooterV2() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer v2-theme" style={{ backgroundColor: 'var(--v2-navy)', color: 'white', padding: '100px 0 40px' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem' }}>
        <div style={{ gridColumn: 'span 2' }}>
          <LogoV2 variant="white" style={{ marginBottom: '2rem' }} />
          <p style={{ 
            color: 'rgba(255, 255, 255, 0.6)', 
            maxWidth: '400px', 
            marginTop: '1.5rem',
            lineHeight: '1.7',
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.95rem'
          }}>
            The elite referral network designed for the modern grooming industry. Secure, transparent, and built for growth.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem' }}>
            <a href="#" className="v2-footer-social"><Globe size={22} /></a>
            <a href="#" className="v2-footer-social"><Globe size={22} /></a>
            <a href="#" className="v2-footer-social"><Globe size={22} /></a>
          </div>
          <style>{`
            .v2-footer-social { 
              color: rgba(255, 255, 255, 0.5); 
              transition: all 0.3s ease; 
              width: 44px;
              height: 44px;
              background: rgba(255, 255, 255, 0.05);
              border-radius: 12px;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .v2-footer-social:hover { 
              color: white; 
              background: var(--v2-blue);
              transform: translateY(-5px);
            }
          `}</style>
        </div>

        <div>
          <h4 style={{ 
            fontSize: '0.9rem', 
            fontWeight: '800', 
            textTransform: 'uppercase', 
            marginBottom: '1.75rem',
            letterSpacing: '0.05em'
          }}>Quick Links</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li><Link to="/v1" className="v2-footer-link">Version 1</Link></li>
            <li><a href="#how-it-works" className="v2-footer-link">Process</a></li>
            <li><a href="#pricing" className="v2-footer-link">Membership</a></li>
            <li><a href="#features" className="v2-footer-link">Features</a></li>
          </ul>
        </div>

        <div>
          <h4 style={{ 
            fontSize: '0.9rem', 
            fontWeight: '800', 
            textTransform: 'uppercase', 
            marginBottom: '1.75rem',
            letterSpacing: '0.05em'
          }}>Legal</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li><Link to="/privacy" className="v2-footer-link">Privacy Policy</Link></li>
            <li><Link to="/terms" className="v2-footer-link">Terms of Use</Link></li>
            <li><Link to="/cookies" className="v2-footer-link">Cookies Info</Link></li>
          </ul>
        </div>
      </div>

      <div className="container" style={{ marginTop: '100px', paddingTop: '40px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', textAlign: 'center' }}>
        <p style={{ 
          fontSize: '0.85rem', 
          color: 'rgba(255, 255, 255, 0.4)', 
          fontFamily: "'Inter', sans-serif"
        }}>
          &copy; {currentYear} BOKMAX NETWORK. ALL RIGHTS RESERVED.
        </p>
      </div>
      <style>{`
        .v2-footer-link {
          color: rgba(255, 255, 255, 0.6);
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }
        .v2-footer-link:hover {
          color: var(--v2-blue-light);
          padding-left: 5px;
        }
      `}</style>
    </footer>
  )
}

export default FooterV2

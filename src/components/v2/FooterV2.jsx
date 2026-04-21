import { Link } from 'react-router-dom'
import LogoV2 from './LogoV2'

function FooterV2() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer v2-theme" style={{ backgroundColor: 'var(--v2-navy)', color: 'white', padding: '100px 0 40px' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem' }}>

        {/* Left column: logo + description + store buttons */}
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
            The booking app built for barbershops. Manage appointments, retain clients and grow your customer base with a powerful built-in referral system.
          </p>

          <div style={{ display: 'flex', gap: '12px', marginTop: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <a
              href="#"
              aria-label="Download on the App Store"
              style={{ display: 'inline-block', transition: 'transform 0.2s, opacity 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.opacity = '0.85' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.opacity = '1' }}
            >
              <img
                src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"
                alt="Download on the App Store"
                style={{ height: '46px', width: 'auto', display: 'block' }}
              />
            </a>
            <a
              href="#"
              aria-label="Get it on Google Play"
              style={{ display: 'inline-block', transition: 'transform 0.2s, opacity 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.opacity = '0.85' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.opacity = '1' }}
            >
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                style={{ height: '62px', width: 'auto', display: 'block', marginTop: '-8px', marginBottom: '-8px' }}
              />
            </a>
          </div>
        </div>

        {/* Legal */}
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

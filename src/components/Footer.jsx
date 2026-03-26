import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-brand-name">BOKMAX</div>
            <p className="footer-brand-desc">
              Connecting barbershops and clients. Book appointments, refer friends, 
              and generate passive income — all in one app.
            </p>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/terms">Terms of Use</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:noelia@actualizatec.com">noelia@actualizatec.com</a></li>
              <li><a href="mailto:bernat@actualizatec.com">bernat@actualizatec.com</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Bokmax. All rights reserved.
          </p>
          <p className="footer-tagline">Your Story Your Style</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

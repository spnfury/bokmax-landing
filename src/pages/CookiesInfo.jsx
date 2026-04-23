import { Link } from 'react-router-dom'
import LogoV2 from '../components/v2/LogoV2'

const pageStyle = {
  backgroundColor: 'var(--bg-soft)',
  minHeight: '100vh',
  paddingTop: '80px',
  paddingBottom: '80px',
  fontFamily: "'Inter', sans-serif",
  color: 'var(--v2-navy)'
}

const wrapperStyle = {
  maxWidth: '820px',
  margin: '0 auto',
  padding: '0 1.5rem'
}

const backLinkStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  color: 'var(--v2-blue)',
  fontSize: '0.9rem',
  fontWeight: 600,
  marginBottom: '2rem'
}

const h1Style = {
  fontFamily: "'Lexend Giga', sans-serif",
  fontSize: 'clamp(2rem, 4vw, 2.75rem)',
  fontWeight: 800,
  textTransform: 'uppercase',
  lineHeight: 1.1,
  marginBottom: '1rem',
  color: 'var(--v2-navy)'
}

const metaStyle = {
  color: 'var(--text-muted)',
  fontSize: '0.9rem',
  marginBottom: '3rem',
  borderBottom: '1px solid var(--border-light)',
  paddingBottom: '2rem'
}

const h2Style = {
  fontFamily: "'Lexend Giga', sans-serif",
  fontSize: '1.5rem',
  fontWeight: 800,
  textTransform: 'uppercase',
  marginTop: '3rem',
  marginBottom: '1rem',
  color: 'var(--v2-navy)',
  letterSpacing: '-0.01em'
}

const pStyle = {
  fontSize: '1rem',
  lineHeight: 1.75,
  color: 'rgba(2, 8, 51, 0.85)',
  marginBottom: '1rem'
}

const ulStyle = {
  listStyle: 'disc',
  paddingLeft: '1.5rem',
  marginBottom: '1.25rem',
  color: 'rgba(2, 8, 51, 0.85)'
}

const liStyle = {
  fontSize: '1rem',
  lineHeight: 1.75,
  marginBottom: '0.5rem'
}

const strongStyle = { color: 'var(--v2-navy)', fontWeight: 700 }

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginBottom: '1.5rem',
  fontSize: '0.95rem'
}

const thStyle = {
  textAlign: 'left',
  padding: '12px 16px',
  backgroundColor: 'rgba(32, 75, 180, 0.08)',
  color: 'var(--v2-navy)',
  fontFamily: "'Lexend Giga', sans-serif",
  fontWeight: 700,
  fontSize: '0.8rem',
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
  borderBottom: '2px solid var(--border-light)'
}

const tdStyle = {
  padding: '12px 16px',
  borderBottom: '1px solid var(--border-light)',
  verticalAlign: 'top',
  lineHeight: 1.6
}

export default function CookiesInfo() {
  return (
    <div className="v2-theme" style={pageStyle}>
      <div style={wrapperStyle}>
        <div style={{ marginBottom: '1.5rem' }}>
          <LogoV2 variant="primary" />
        </div>

        <Link to="/" style={backLinkStyle}>← Back to home</Link>

        <h1 style={h1Style}>Cookies Policy</h1>
        <p style={metaStyle}>Published on 1 April 2026</p>

        <p style={pStyle}>
          This Cookies Policy explains how BOKMAX APP LLC ("BOKMAX", "we", "us") uses cookies and similar technologies when you visit our website or use the BOKMAX application. By continuing to browse or use our services, you agree to the use of cookies as described below, except where your consent is required by applicable law, in which case we will request it before placing non-essential cookies.
        </p>

        <h2 style={h2Style}>What are cookies?</h2>
        <p style={pStyle}>
          Cookies are small text files that a website stores on your device (computer, tablet, or mobile phone) when you visit it. They allow the website to remember your actions and preferences (such as login, language, or other display settings) over a period of time, so you don't have to re-enter them each time you return or browse between pages.
        </p>
        <p style={pStyle}>
          We also use similar technologies such as local storage, pixels, and SDKs inside the mobile application, which operate under the same principles as cookies.
        </p>

        <h2 style={h2Style}>Types of cookies we use</h2>
        <ul style={ulStyle}>
          <li style={liStyle}><span style={strongStyle}>Strictly necessary cookies:</span> essential to operate the site and the app (authentication, session management, security). Without them, the service cannot function properly.</li>
          <li style={liStyle}><span style={strongStyle}>Preference cookies:</span> remember choices you make (such as language or region) to provide a more personalized experience.</li>
          <li style={liStyle}><span style={strongStyle}>Analytics cookies:</span> help us understand how visitors interact with the site and the app so we can measure performance and improve our service. Data is aggregated and anonymized where possible.</li>
          <li style={liStyle}><span style={strongStyle}>Functional cookies:</span> enable enhanced functionality, such as integrations with third-party services (e.g., Google Calendar, Stripe) when you choose to connect them.</li>
          <li style={liStyle}><span style={strongStyle}>Marketing cookies:</span> may be used, subject to your consent where required, to deliver relevant content and measure the effectiveness of our campaigns.</li>
        </ul>

        <h2 style={h2Style}>First-party and third-party cookies</h2>
        <p style={pStyle}>
          <span style={strongStyle}>First-party cookies</span> are set by BOKMAX directly. <span style={strongStyle}>Third-party cookies</span> are set by our service providers, which may include:
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Provider</th>
                <th style={thStyle}>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>Google Analytics</td>
                <td style={tdStyle}>Site usage statistics and performance measurement</td>
              </tr>
              <tr>
                <td style={tdStyle}>Stripe</td>
                <td style={tdStyle}>Secure payment processing and fraud prevention</td>
              </tr>
              <tr>
                <td style={tdStyle}>Google Calendar</td>
                <td style={tdStyle}>Appointment synchronization (only when the user connects it)</td>
              </tr>
              <tr>
                <td style={tdStyle}>Brevo (SendinBlue)</td>
                <td style={tdStyle}>Transactional email delivery and engagement tracking</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={pStyle}>
          Third-party providers have their own privacy and cookies policies, which we encourage you to review.
        </p>

        <h2 style={h2Style}>How long do cookies stay on your device?</h2>
        <ul style={ulStyle}>
          <li style={liStyle}><span style={strongStyle}>Session cookies:</span> deleted automatically when you close your browser.</li>
          <li style={liStyle}><span style={strongStyle}>Persistent cookies:</span> remain on your device for a defined period or until you delete them manually.</li>
        </ul>

        <h2 style={h2Style}>How to manage or disable cookies</h2>
        <p style={pStyle}>
          You can accept, decline, or manage cookies at any time through the cookie banner displayed on our site (where applicable) or through your browser settings. Most browsers allow you to:
        </p>
        <ul style={ulStyle}>
          <li style={liStyle}>View which cookies are stored and delete them individually.</li>
          <li style={liStyle}>Block third-party cookies.</li>
          <li style={liStyle}>Block cookies from specific sites.</li>
          <li style={liStyle}>Block all cookies.</li>
          <li style={liStyle}>Delete all cookies when you close the browser.</li>
        </ul>
        <p style={pStyle}>
          Please note that disabling strictly necessary cookies may prevent parts of the site or app from functioning correctly.
        </p>
        <p style={pStyle}>
          For instructions specific to your browser, please refer to its help section (Chrome, Safari, Firefox, Edge, etc.).
        </p>

        <h2 style={h2Style}>Your rights</h2>
        <p style={pStyle}>
          To the extent applicable under U.S. federal or state law, you have rights in relation to the personal data collected through cookies, including the right to access, correct, or delete your data, and to opt out of the sale or sharing of personal information where applicable. Further details are available in our <Link to="/privacy" style={{ color: 'var(--v2-blue)', fontWeight: 600 }}>Privacy Policy</Link>.
        </p>

        <h2 style={h2Style}>Changes to this policy</h2>
        <p style={pStyle}>
          BOKMAX reserves the right to modify this Cookies Policy at any time to adapt it to legislative or operational changes. The updated version will always be available on this page, indicating the date of last publication.
        </p>

        <h2 style={h2Style}>Contact</h2>
        <p style={pStyle}>
          If you have any questions about this Cookies Policy, please contact us at:
        </p>
        <ul style={ulStyle}>
          <li style={liStyle}><span style={strongStyle}>Email:</span> <a href="mailto:bokmax@bokmax.com" style={{ color: 'var(--v2-blue)', fontWeight: 600 }}>bokmax@bokmax.com</a></li>
          <li style={liStyle}><span style={strongStyle}>Address:</span> BOKMAX APP LLC, Chicago, USA</li>
          <li style={liStyle}><span style={strongStyle}>Telephone:</span> +1 773 882 9674</li>
        </ul>

        <p style={{ ...pStyle, marginTop: '3rem', color: 'var(--text-muted)', fontSize: '0.9rem', borderTop: '1px solid var(--border-light)', paddingTop: '2rem' }}>
          This Cookies Policy was published on 1 April 2026.
        </p>
      </div>
    </div>
  )
}

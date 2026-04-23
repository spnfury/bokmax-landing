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

const h3Style = {
  fontFamily: "'Lexend Giga', sans-serif",
  fontSize: '1.05rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  marginTop: '2rem',
  marginBottom: '0.75rem',
  color: 'var(--v2-blue)',
  letterSpacing: '0.02em'
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

export default function PrivacyPolicy() {
  return (
    <div className="v2-theme" style={pageStyle}>
      <div style={wrapperStyle}>
        <div style={{ marginBottom: '1.5rem' }}>
          <LogoV2 variant="primary" />
        </div>

        <Link to="/" style={backLinkStyle}>← Back to home</Link>

        <h1 style={h1Style}>Privacy Policy</h1>
        <p style={metaStyle}>Published on 1 April 2026</p>

        <p style={pStyle}>
          At BOKMAX APP, operating under the brand name "BOKMAX," we are committed to protecting privacy and ensuring the proper use of personal data. We make this information available to you so that you may have detailed knowledge of how your data is processed.
        </p>
        <p style={pStyle}>
          Bokmax processes personal data relating to the various natural and legal persons with whom it interacts in order to carry out different activities. Such data may be used in different ways and shared with different persons depending on the purposes for which we need it. In any event, the company will not assign or sell personal data to any other person or company under any circumstances.
        </p>

        <h2 style={h2Style}>Who is responsible for processing your data?</h2>
        <ul style={ulStyle}>
          <li style={liStyle}><span style={strongStyle}>Data Controller:</span> BOKMAX APP LLC</li>
          <li style={liStyle}><span style={strongStyle}>ZIP Code:</span> 60804</li>
          <li style={liStyle}><span style={strongStyle}>Telephone:</span> +1 773 882 9674</li>
          <li style={liStyle}><span style={strongStyle}>Email:</span> bokmax@bokmax.com</li>
        </ul>

        <h2 style={h2Style}>What data do we collect / access? (including Google data)</h2>

        <h3 style={h3Style}>For professional users</h3>
        <ul style={ulStyle}>
          <li style={liStyle}><span style={strongStyle}>Identification data:</span> name, email address, password (securely stored), ID number, telephone number, profile photo.</li>
          <li style={liStyle}><span style={strongStyle}>Contact data:</span> full address (country, state/province, city, street address, ZIP/postal code).</li>
          <li style={liStyle}><span style={strongStyle}>Integration data:</span> Google Calendar access tokens (if they connect their calendar), Stripe identifiers for payments.</li>
          <li style={liStyle}><span style={strongStyle}>Business data:</span> name, logo, barbershop description, barbershop address, employees, list of services offered, service prices, contact telephone number, business hours, banking details.</li>
          <li style={liStyle}><span style={strongStyle}>Subscription data:</span> plan, status, start and end dates, cancellation information.</li>
        </ul>

        <h3 style={h3Style}>For customers</h3>
        <ul style={ulStyle}>
          <li style={liStyle}><span style={strongStyle}>Personal data:</span> first name, last name(s), email address, telephone number, Stripe identifiers for payments, referral code.</li>
          <li style={liStyle}><span style={strongStyle}>Full address:</span> street, city, state/province, ZIP/postal code, country.</li>
          <li style={liStyle}><span style={strongStyle}>Invoices:</span> number, date, amounts, concepts/items, generated PDFs.</li>
        </ul>

        <h2 style={h2Style}>For what purposes and on what legal basis do we process your personal data?</h2>
        <p style={pStyle}>
          As a general rule, Bokmax will process your data for the following purposes, as permitted by applicable law:
        </p>
        <ul style={ulStyle}>
          <li style={liStyle}><span style={strongStyle}>Management of your relationship with Bokmax:</span> Bokmax may process your data in order to manage your relationship with the App, including any operations necessary for its maintenance.</li>
          <li style={liStyle}><span style={strongStyle}>Measurement of content performance:</span> in order to provide better content, Bokmax may measure how users interact with it in order to prepare reports and analyze use of the App so as to improve its content.</li>
          <li style={liStyle}><span style={strongStyle}>Improvement of your user experience</span> and the further development, customization, and enhancement of our services, in accordance with users' general or individual preferences, experiences, and common or personal difficulties. Such improvements may be made for both online and offline use.</li>
          <li style={liStyle}>We may collect analytics data regarding online and offline browsing, the purchases made by the user, and the user's interests and preferences.</li>
        </ul>

        <h2 style={h2Style}>With whom do we share the data?</h2>
        <p style={pStyle}>The application uses external services for its operation. Data is shared with:</p>
        <ul style={ulStyle}>
          <li style={liStyle}><span style={strongStyle}>Stripe:</span> payment processing and subscription management. Data relating to subscriptions necessary for the service is shared.</li>
          <li style={liStyle}><span style={strongStyle}>Google Calendar:</span> appointment synchronization when the user connects their Bokmax account to Google Calendar. Access tokens are shared to read and create events.</li>
          <li style={liStyle}><span style={strongStyle}>Brevo (SendinBlue):</span> sending production emails (password recovery, invoices, receipts, etc.). Email addresses and message content are shared (including clinic and customer data).</li>
          <li style={liStyle}><span style={strongStyle}>Google Cloud Storage (production):</span> file storage (images, PDFs, documents). Files are stored on Google Cloud servers.</li>
        </ul>
        <p style={pStyle}>Data is not shared with third parties for marketing or advertising purposes.</p>

        <h2 style={h2Style}>How do we safeguard your data?</h2>
        <p style={pStyle}>
          Bokmax maintains personal data security measures consistent with applicable U.S. law and industry-standard security practices, and has established all technical means reasonably available to it to prevent the loss, misuse, alteration, unauthorized access to, and theft of the data you provide to us.
        </p>
        <p style={pStyle}>
          All of the foregoing takes into account the state of technological development, the nature of the data stored, and the risks to which such data is exposed, whether arising from human action, automated action or robots, or the physical or natural environment.
        </p>
        <p style={pStyle}>
          Likewise, users' personal data will be processed in strict confidence. The company will not disclose personal data to third parties outside the App except where required by law.
        </p>

        <h2 style={h2Style}>How long will we retain your data?</h2>
        <p style={pStyle}>
          Without prejudice to the foregoing regarding the respective data processing activities, personal data accessed by virtue of your relationship with Bokmax will be processed for as long as necessary to manage the purposes set out above.
        </p>
        <p style={pStyle}>
          In this regard, Bokmax will retain personal data after the end of its relationship with you, appropriately restricted where applicable, for the statute of limitations period applicable to any actions or claims that may arise from the relationship maintained with the data subject.
        </p>

        <h2 style={h2Style}>What rights do you have in relation to the processing of your data?</h2>
        <ul style={ulStyle}>
          <li style={liStyle}><span style={strongStyle}>Right of access:</span> you may ask us what personal data we are processing and may request a copy of such data.</li>
          <li style={liStyle}><span style={strongStyle}>Right to rectification:</span> you may request the correction of inaccurate, changed, or incomplete personal data, including by means of an additional statement.</li>
          <li style={liStyle}><span style={strongStyle}>Right to erasure (right to be forgotten):</span> you may request the deletion of your personal data when it is no longer necessary for the purposes for which it was collected, when you withdraw your consent, where the data has been processed unlawfully, or where deletion is required to comply with a legal obligation.</li>
          <li style={liStyle}><span style={strongStyle}>Right to restriction of processing:</span> you may request that we restrict the processing of your data, in which case we will retain it only for the exercise or defense of legal claims.</li>
          <li style={liStyle}><span style={strongStyle}>Right to data portability:</span> you may request that we return your personal data to you (or to a third party indicated by you) in a structured, commonly used, and machine-readable format.</li>
          <li style={liStyle}><span style={strongStyle}>Right to object:</span> you may object to the processing of your data where such processing is based on the controller's legitimate interest or is carried out for advertising purposes.</li>
        </ul>
        <p style={pStyle}>
          To exercise any of these rights, you may contact us at the following email address: <a href="mailto:bokmax@bokmax.com" style={{ color: 'var(--v2-blue)', fontWeight: 600 }}>bokmax@bokmax.com</a>. In the event of any change to your personal information, you must notify us at the same address. BOKMAX APP shall not be held liable for any consequences arising from your failure to do so.
        </p>
        <p style={pStyle}>
          Once we receive any of the above requests, we will respond within a maximum period of 1 month.
        </p>

        <h2 style={h2Style}>Before which authority can you file a complaint?</h2>
        <p style={pStyle}>
          Depending on applicable law, you may have the right to lodge a complaint with the Federal Trade Commission (FTC), the Attorney General of your state of residence, or another competent U.S. regulatory authority.
        </p>

        <h2 style={h2Style}>Revocation of Google permissions</h2>
        <p style={pStyle}>
          If you have granted permissions to Google, you may revoke access from your Google Account under Security {'>'} Third-party access / apps with access. Upon revocation, the app will no longer be able to access that data.
        </p>
        <ul style={ulStyle}>
          <li style={liStyle}>Access to Google APIs (Drive, Calendar, Gmail, etc.)</li>
        </ul>

        <h2 style={h2Style}>Account deletion in the app</h2>
        <ul style={ulStyle}>
          <li style={liStyle}><span style={strongStyle}>Technical process:</span> when a user requests deletion of their account from the mobile application, the system marks the account as disabled (<code style={{ background: 'rgba(2,8,51,0.06)', padding: '2px 6px', borderRadius: 4 }}>enabled: false</code>) instead of permanently deleting the data. This is a "soft delete."</li>
          <li style={liStyle}><span style={strongStyle}>Current status:</span> the data is not physically deleted from the database. The account is deactivated, but the information remains stored.</li>
          <li style={liStyle}><span style={strongStyle}>Pending:</span> define the final data deletion policy, especially in relation to compliance with applicable privacy laws and deletion rights.</li>
        </ul>

        <h2 style={h2Style}>Spam</h2>
        <p style={pStyle}>
          Bokmax does not approve the practice of "spamming." This term means the massive and repeated sending of unsolicited email messages, usually of a commercial nature, to persons with whom the sender has had no prior contact, or to persons who have expressed their wish not to receive such messages.
        </p>
        <p style={pStyle}>
          If Bokmax considers that certain information may be of interest to users, it reserves the right to provide such information by email or App notification, subject to the user's consent and always offering the possibility to opt out of that information service.
        </p>

        <h2 style={h2Style}>Sales funnels and advertising</h2>
        <p style={pStyle}>
          Bokmax may use advertising campaigns and sales techniques through which it may request certain personal data in order to provide the requested service, such as delivering a quotation. In all cases, interested persons may exercise their rights at any time with respect to their personal data.
        </p>

        <h2 style={h2Style}>Disclaimer</h2>
        <p style={pStyle}>
          Bokmax shall not be responsible for opinions and comments published by persons outside the organization on social networks, websites, forums, reviews, or apps about Bokmax or any of its services, staff, or facilities, the author thereof being solely responsible for their accuracy.
        </p>

        <h2 style={h2Style}>Exercise of privacy rights</h2>
        <p style={pStyle}>
          To the extent provided under applicable U.S. federal or state law, you may have the right to request access to, correction of, deletion of, or portability of your Personal Information, and to object to or request restriction of certain processing activities. Exercising any such rights will not result in discriminatory treatment or otherwise adversely affect your status as a customer of BOKMAX APP, except to the extent that certain services necessarily require the processing of specific Personal Information.
        </p>
        <p style={pStyle}>
          If you wish to exercise any privacy rights available to you under applicable law, you may submit your request in writing to BOKMAX APP at Chicago, USA, or by email using the contact information provided in this Privacy Policy. We may take reasonable steps to verify your identity before processing your request and may deny or limit your request to the extent permitted by applicable law.
        </p>
        <p style={pStyle}>
          If you have any questions, concerns, or complaints regarding this Privacy Policy or the manner in which we collect, use, disclose, store, or otherwise process your Personal Information, you may contact BOKMAX APP in writing at Chicago, USA.
        </p>
        <p style={pStyle}>
          If you believe that your rights under applicable privacy law have been violated, you may also have the right to lodge a complaint with the appropriate regulatory authority, attorney general, or other competent governmental body in your jurisdiction, to the extent permitted by applicable law.
        </p>

        <h2 style={h2Style}>Modification of the Privacy Policy</h2>
        <p style={pStyle}>
          Bokmax reserves the right to modify this policy at any time in order to adapt it to legislative developments, and successive versions will be published on the website.
        </p>
        <p style={pStyle}>
          Changes will be communicated on our website as far in advance as necessary, without prejudice to requesting the consent required from affected persons as a result of any regulatory change, where such consent is not deemed to have been granted under the terms of this policy.
        </p>
        <p style={pStyle}>
          If you have any questions, concerns, or comments regarding this policy, please do not hesitate to contact BOKMAX APP in writing at Chicago, USA.
        </p>

        <p style={{ ...pStyle, marginTop: '3rem', color: 'var(--text-muted)', fontSize: '0.9rem', borderTop: '1px solid var(--border-light)', paddingTop: '2rem' }}>
          This Privacy Policy was published on 1 April 2026.
        </p>
      </div>
    </div>
  )
}

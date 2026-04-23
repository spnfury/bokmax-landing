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

export default function TermsOfUse() {
  return (
    <div className="v2-theme" style={pageStyle}>
      <div style={wrapperStyle}>
        <div style={{ marginBottom: '1.5rem' }}>
          <LogoV2 variant="primary" />
        </div>

        <Link to="/" style={backLinkStyle}>← Back to home</Link>

        <h1 style={h1Style}>Terms and Conditions of Use</h1>
        <p style={metaStyle}>Published on 1 April 2026</p>

        <h2 style={h2Style}>1. Introduction</h2>
        <p style={pStyle}>
          At BOKMAX APP, operating under the "BOKMAX" brand, we are committed to protecting privacy and ensuring the proper use of personal data, and we provide you with the following information so that you may have detailed knowledge of the processing of your data.
        </p>
        <p style={pStyle}>
          BOKMAX processes personal data of the various natural and legal persons with whom it interacts in order to carry out various activities, and such data may be used in different ways and shared with different persons depending on the purposes for which we need them.
        </p>
        <p style={pStyle}>
          Under no circumstances will the company transfer or sell personal data to any other person or company.
        </p>

        <h3 style={h3Style}>Who is responsible for processing your data?</h3>
        <ul style={ulStyle}>
          <li style={liStyle}><span style={strongStyle}>Data Controller:</span> BOKMAX APP LLC</li>
          <li style={liStyle}><span style={strongStyle}>ZIP Code:</span> 60804</li>
          <li style={liStyle}><span style={strongStyle}>Telephone:</span> +1 773 882 9674</li>
          <li style={liStyle}><span style={strongStyle}>Email:</span> bokmax@bokmax.com</li>
        </ul>

        <h3 style={h3Style}>For what purposes and on what legal basis do we process your personal data?</h3>
        <p style={pStyle}>As a general rule, your data will be processed by BOKMAX for the following purposes:</p>
        <ul style={ulStyle}>
          <li style={liStyle}><span style={strongStyle}>Management of your relationship with BOKMAX:</span> BOKMAX may process your data in order to manage your relationship with the App, including any operations necessary for its maintenance.</li>
          <li style={liStyle}><span style={strongStyle}>Measuring content performance:</span> in order to provide better content, BOKMAX may measure how users interact with the App in order to prepare reports and study use of the App so as to improve its content.</li>
          <li style={liStyle}><span style={strongStyle}>Improving the user experience</span> and developing, customizing, and further improving our services, in accordance with users' preferences, experiences, and common or individual difficulties. These improvements may be made for both online and offline environments.</li>
          <li style={liStyle}><span style={strongStyle}>Conducting opinion and/or satisfaction surveys</span> regarding our activities, courses, products and/or services (including advertising and/or commercial communications in accordance with applicable U.S. federal and state laws, including, where applicable, the CAN-SPAM Act), or regarding any of BOKMAX's collaborating persons and companies, although we will never disclose your personal data to them; rather, such communications will always be made through our own means.</li>
          <li style={liStyle}>We may collect analytics data relating to online and offline browsing, purchases made by the user, and the user's interests and preferences.</li>
          <li style={liStyle}>Managing our social media channels and sending the user information about our activities and products.</li>
        </ul>

        <h3 style={h3Style}>How do we ensure the security of your data?</h3>
        <p style={pStyle}>
          BOKMAX maintains personal data security measures in accordance with applicable U.S. federal and state privacy, consumer protection, and data security laws, and has implemented all technical means within its reach to prevent the loss, misuse, alteration, unauthorized access to, and theft of the data you provide to us.
        </p>
        <p style={pStyle}>
          All of the foregoing takes into account the state of technological development, the nature of the stored data, and the risks to which such data are exposed, whether arising from human action, automated action or bots, or the physical or natural environment.
        </p>
        <p style={pStyle}>
          Likewise, users' personal data will be processed with the utmost confidentiality. The company will not disclose personal data to third parties unrelated to the App, except where required by law.
        </p>

        <h3 style={h3Style}>How long will we retain your data?</h3>
        <p style={pStyle}>
          Without prejudice to the foregoing with respect to the relevant data processing activities, the personal data accessed in connection with your relationship with BOKMAX will be processed for as long as necessary to manage the purposes described above.
        </p>
        <p style={pStyle}>
          In this regard, BOKMAX will retain personal data after the end of its relationship with you, duly blocked or restricted as appropriate, for the statute of limitations period applicable to any actions that may arise from the relationship maintained with the data subject.
        </p>

        <h3 style={h3Style}>What rights do you have in relation to the processing of your data?</h3>
        <ul style={ulStyle}>
          <li style={liStyle}><span style={strongStyle}>Right of access:</span> you may ask us what personal data we are processing and may request a copy thereof.</li>
          <li style={liStyle}><span style={strongStyle}>Right of rectification:</span> you may request the correction of inaccurate personal data, data that has changed, or incomplete data, including by means of an additional statement.</li>
          <li style={liStyle}><span style={strongStyle}>Right to erasure (right to be forgotten):</span> you may request the deletion of your personal data when it is no longer necessary for the purposes for which it was collected, when you withdraw your consent, when the data has been processed unlawfully, or in compliance with a legal obligation.</li>
          <li style={liStyle}><span style={strongStyle}>Right to restriction of processing:</span> you may request restriction of the processing of your data, in which case we will only retain it for the exercise or defense of legal claims.</li>
          <li style={liStyle}><span style={strongStyle}>Right to data portability:</span> you may request that we return your personal data (to you or to a third party designated by you) in a structured, commonly used, and machine-readable format.</li>
          <li style={liStyle}><span style={strongStyle}>Right to object:</span> you may object to the processing of your data if such processing is based on the legitimate interest of the data controller or is carried out for advertising purposes.</li>
        </ul>
        <p style={pStyle}>
          To exercise all these rights, you may contact us at the following email address: <a href="mailto:bokmax@bokmax.com" style={{ color: 'var(--v2-blue)', fontWeight: 600 }}>bokmax@bokmax.com</a>. If your data changes, you must notify us at the same address, and the company disclaims all liability if you fail to do so.
        </p>
        <p style={pStyle}>
          Once we receive any of the foregoing requests, we will respond within a maximum period of 10 days.
        </p>

        <h3 style={h3Style}>Before which authority may you lodge your complaints?</h3>
        <p style={pStyle}>
          You have the right to lodge a complaint with the Federal Trade Commission, your State Attorney General, or, where applicable, the California Privacy Protection Agency or any other competent U.S. supervisory authority. If you would like more information about the rights you may exercise and sample request forms, you should consult the website of the competent authority applicable to your case.
        </p>

        <h3 style={h3Style}>Spam</h3>
        <p style={pStyle}>
          BOKMAX does not approve the practice of "spamming." This term means the massive and repeated sending of unsolicited email messages, usually of a commercial nature, to persons with whom the sender has had no prior contact, or to persons who have expressed their wish not to receive such messages.
        </p>
        <p style={pStyle}>
          If BOKMAX considers that certain information may be of interest to users, it reserves the right to provide such information by email or by in-app notification, subject to your prior consent where required by applicable law and always offering the possibility to opt out of that information service.
        </p>

        <h3 style={h3Style}>Disclaimer</h3>
        <p style={pStyle}>
          BOKMAX shall not be responsible for opinions and comments published by persons unrelated to the organization on social networks, websites, forums, reviews, or apps regarding BOKMAX or any of its services, staff, or facilities, the author being solely responsible for their truthfulness.
        </p>

        <h3 style={h3Style}>Exercise of rights</h3>
        <p style={pStyle}>
          At any time you may object to any of the processing activities indicated above without any consequence for your status as a BOKMAX customer.
        </p>
        <p style={pStyle}>
          Likewise, you may exercise your rights of access, rectification, erasure, objection, restriction, or portability by written communication to BOKMAX APP, Chicago USA.
        </p>
        <p style={pStyle}>
          If you have any doubt, question, or complaint regarding the manner in which we process your personal data, you may contact us in writing at BOKMAX APP, Chicago USA.
        </p>
        <p style={pStyle}>
          If you do not receive a response within a reasonable period (1 month), you may lodge a complaint with the Federal Trade Commission, your State Attorney General, or, where applicable, another competent U.S. authority.
        </p>

        <h3 style={h3Style}>Modification of the Privacy Policy</h3>
        <p style={pStyle}>
          BOKMAX reserves the right to modify this policy at any time in order to adapt it to legislative developments, and successive versions shall be published on the website.
        </p>
        <p style={pStyle}>
          Changes will be communicated on our website with such advance notice as may be necessary, without prejudice to requesting the consent required from the persons affected by the legal change when such consent is not deemed granted under the terms of this policy.
        </p>
        <p style={pStyle}>
          If you have any doubt, question, or comment regarding these rules, please do not hesitate to contact us in writing at BOKMAX APP, Chicago USA.
        </p>

        {/* Legal Notice */}
        <h1 style={{ ...h1Style, marginTop: '5rem' }}>Legal Notice</h1>

        <h2 style={h2Style}>Introduction</h2>
        <p style={pStyle}>
          This Legal Notice governs the use of this "BOKMAX" app. Access to the website is generally free of charge, except for the cost of the connection through the telecommunications network supplied by the access provider contracted by users and for the services that the user may expressly contract through the app.
        </p>

        <h2 style={h2Style}>Acceptance of legal conditions of use</h2>
        <p style={pStyle}>
          Use of the "BOKMAX" app grants the status of user and implies full and unreserved acceptance of each and every provision included in this Legal Notice from the moment the user accesses the "BOKMAX" app. Consequently, the user must carefully read this Legal Notice, which is permanently made available.
        </p>

        <h2 style={h2Style}>Responsible party — Who is legally responsible for the website?</h2>
        <p style={pStyle}>
          In accordance with applicable U.S. federal and state laws, users are informed that the company responsible for the management and operation of the App is:
        </p>
        <ul style={ulStyle}>
          <li style={liStyle}><span style={strongStyle}>Data Controller:</span> BOKMAX APP LLC</li>
          <li style={liStyle}><span style={strongStyle}>ZIP Code:</span> 60804</li>
          <li style={liStyle}><span style={strongStyle}>Telephone:</span> +1 773 882 9674</li>
          <li style={liStyle}><span style={strongStyle}>Email:</span> bokmax@bokmax.com</li>
          <li style={liStyle}><span style={strongStyle}>Domain name:</span> bokmax.com</li>
          <li style={liStyle}><span style={strongStyle}>App name:</span> "Bokmax"</li>
          <li style={liStyle}><span style={strongStyle}>Business Activity:</span> Aesthetic Services</li>
        </ul>

        <h2 style={h2Style}>Applicable law</h2>
        <ul style={ulStyle}>
          <li style={liStyle}>Federal Trade Commission Act, including Section 5 prohibiting unfair or deceptive acts or practices, as applicable.</li>
          <li style={liStyle}>Applicable U.S. federal and state privacy and consumer protection laws, including, where applicable, state privacy laws such as the California Consumer Privacy Act, as amended by the California Privacy Rights Act.</li>
          <li style={liStyle}>CAN-SPAM Act and any other applicable laws governing electronic communications, e-commerce, and digital services.</li>
        </ul>
        <p style={pStyle}>
          The website complies with and is committed to complying with the foregoing laws, without prejudice to the obligation to comply with any other specific or sectoral regulations not mentioned herein.
        </p>

        <h2 style={h2Style}>Do not share your personal information</h2>
        <p style={pStyle}>
          BOKMAX will never send you an email or call you to ask you to disclose or verify your bank account password. At BOKMAX, we will never request your bank account numbers, credit card numbers, or any other similar personal information. If anyone contacts you or you receive an unsolicited email asking for any of the foregoing data, do not respond and notify BOKMAX immediately so that the incident may be investigated.
        </p>

        <h3 style={h3Style}>Identify fake emails (spoofing or phishing attempts)</h3>
        <p style={pStyle}>
          Ignore any email that you receive, when you are not carrying out any purchase or subscription process, requesting personal or banking information, redirecting you to a webpage that is not owned by BOKMAX, asking you to verify your banking details, or requiring payment by a means other than one authorized by BOKMAX, since it could be an attempt at identity spoofing or phishing and must be treated as fraudulent.
        </p>
        <p style={pStyle}>
          Some phishing emails contain links to websites whose URL includes the word of the domain they intend to impersonate, but which will direct you to a completely different website. If you hover your cursor over the link, you will be able to see the associated URL, which will probably have a format different from the URLs linked in the BOKMAX app.
        </p>
        <p style={pStyle}>
          Even so, if you click on a phishing email and are redirected to a page that impersonates another identity for presumably unlawful purposes, or to any page that asks you to verify or modify your personal information, ignore it and treat it as fraudulent.
        </p>
        <p style={pStyle}>
          In that event, send an email to the appropriate authorities attaching the email that you consider to be false. By attaching that fraudulent email, you help trace its origin. If you cannot attach the false email, forward it to the appropriate authorities and include as much information as possible about it.
        </p>
        <p style={pStyle}>
          BOKMAX APP is a U.S. entity domiciled in Chicago, Illinois 60601, and its contact email address is <a href="mailto:bokmax@bokmax.com" style={{ color: 'var(--v2-blue)', fontWeight: 600 }}>bokmax@bokmax.com</a>.
        </p>
        <p style={pStyle}>
          BOKMAX APP is the owner of all intellectual property rights and any other rights in the BOKMAX application. These Terms of Use govern users' access to and use of the application and shall be supplemented by any legal texts governing any functionality, service, process, application, platform, or means necessary for the use of the application or included therein.
        </p>

        <h2 style={h2Style}>2. Purpose and scope of application</h2>
        <p style={pStyle}>
          BOKMAX APP is intended to regulate the making available to the general public, free of charge, of the services offered by BOKMAX APP that may be of interest to the user.
        </p>
        <p style={pStyle}>
          The user is subject to the policies and conditions in force at the time of using this application, except where the law or a decision of the competent authority requires the appropriate changes to be made retroactively to such policies or conditions. In this regard, BOKMAX APP reserves the right, at any time and without prior notice, to make modifications and updates to the information contained in the app, to its configuration and presentation, and to the conditions of access. Users are therefore advised to consult the conditions set out in this Legal Notice regularly.
        </p>
        <p style={pStyle}>
          Downloading and using the application implies acceptance of and compliance with these Terms of Use.
        </p>

        <h2 style={h2Style}>3. Provision of the service</h2>
        <p style={pStyle}>
          As regards technical aspects beyond its control and responsibility, BOKMAX APP does not guarantee the absence of interruptions or errors in access to the application, nor that it is free from viruses or any other element that may cause alterations to the user's computer system, although it does undertake to use its best efforts to prevent this from occurring.
        </p>
        <p style={pStyle}>
          BOKMAX APP shall not be liable for damages that may arise from interferences, omissions, interruptions, computer viruses, breakdowns and/or disconnections in the operation of this electronic system or in users' devices and computer equipment, caused by circumstances beyond BOKMAX APP's control, which prevent or delay the provision of services or browsing in the app; nor for delays or blocks in use caused by deficiencies or overloads of the Internet or other electronic systems; nor for the impossibility of providing the service or allowing access for causes not attributable to BOKMAX, whether due to the user, third parties, or force majeure.
        </p>

        <h2 style={h2Style}>4. Intellectual and industrial property</h2>
        <p style={pStyle}>
          The owner of the content and elements comprising this App is BOKMAX APP, which therefore owns the intellectual property therein and, in particular, all source code, texts, images, design, logos, software, animations, databases, trademarks, trade names or distinctive signs, sounds, and other graphic or sound elements of the application. This list is not exhaustive but merely illustrative, and such elements are duly protected in accordance with applicable U.S. and international intellectual property laws.
        </p>
        <p style={pStyle}>
          The user undertakes to use the content diligently and correctly, in accordance with the law, morality, and public order. BOKMAX APP authorizes users to view the information contained in this application and to make private reproductions (simple downloading and storage activity on their computer systems), provided that the elements are intended solely for personal use. Their use is also authorized exclusively for journalistic purposes, provided that, in both cases, the integrity thereof is respected, that the original source is identified as this App belonging to BOKMAX APP, and that "BOKMAX" is expressly cited. Under no circumstances is the use, reproduction, or downloading by any person unrelated to BOKMAX APP authorized for economic, advertising, or commercial purposes.
        </p>
        <p style={pStyle}>
          The possible download of paid content may eliminate any right of withdrawal, cancellation, or similar right to the extent permitted by applicable law, since once downloaded the user or company will have a copy of the product or service on the relevant device or terminal.
        </p>

        <h2 style={h2Style}>5. Hyperlinks and/or "links"</h2>
        <p style={pStyle}>
          Among its contents, the BOKMAX app includes links to other websites managed by third parties in order to facilitate the user's access to information exchanged over the Internet. However, BOKMAX APP is not responsible for the existence of links between third parties and websites unrelated to BOKMAX. The links provided in the BOKMAX app are for informational purposes only, and in no event do they place BOKMAX APP in a position of guarantor and/or provider of the services and/or information that may be offered to third parties through such links.
        </p>
        <p style={pStyle}>
          Accordingly, BOKMAX APP assumes no responsibility whatsoever for linked sites and is not liable for their operation, or for the content and services hosted on them, or for any links contained therein.
        </p>
        <p style={pStyle}>
          We strongly recommend reading the corresponding Legal Notices and, especially, the Privacy Policies of such pages before entering your personal data therein, and if in doubt, we recommend contacting such sites directly for more information about their privacy policies.
        </p>
        <p style={pStyle}>
          If the user becomes aware of any illegality or inadequacy in the content, services, or any other activities carried out through a linked site, the user must immediately notify BOKMAX APP so that it may, if appropriate, take such measures as it deems advisable.
        </p>

        <h2 style={h2Style}>6. Liability for the contents of hyperlinks</h2>
        <p style={pStyle}>BOKMAX APP assumes no liability for damages that may arise from:</p>
        <ul style={ulStyle}>
          <li style={liStyle}>The operation, availability, accessibility, or continuity of linked sites.</li>
          <li style={liStyle}>The maintenance of the information, content, or services existing on linked sites.</li>
          <li style={liStyle}>The provision or transmission of the information, content, or services existing in such places.</li>
          <li style={liStyle}>The quality, legality, and reliability of the content and services existing on linked sites.</li>
          <li style={liStyle}>Any breach of law, morality, or accepted standards as a consequence of the dissemination, storage, and making available of content supplied by third parties.</li>
          <li style={liStyle}>Any infringement of intellectual or industrial property rights, rights of honor, personal or family privacy, image rights, or the communication of personal information by third parties.</li>
          <li style={liStyle}>Any acts of unfair competition or unlawful advertising.</li>
          <li style={liStyle}>Lack of truthfulness, accuracy, or timeliness of such content.</li>
          <li style={liStyle}>The operation, availability, or accessibility of the App, both online and offline, in its free version.</li>
        </ul>

        <h2 style={h2Style}>7. Registration</h2>
        <p style={pStyle}>
          Registration and profile customization shall be carried out in the manner expressly indicated in the service, and the data shall be processed only for the purposes and with the guarantees indicated in the legal notices of the forms.
        </p>
        <p style={pStyle}>
          For such purposes, the user shall be obliged to provide his or her own, true, accurate, and lawful information regarding the data requested in the user registration form and to keep it updated. The user shall be solely responsible for any false or inaccurate statements made. Therefore, BOKMAX shall not be responsible for the truthfulness or accuracy of the data provided by the user.
        </p>
        <p style={pStyle}>
          In addition, if as a result of registration the user is provided with a specific username, key, and/or password, the user undertakes to make diligent use thereof and to keep them secret and safeguarded, since they are personal and confidential in nature, and also undertakes not to transfer their use to third parties, whether temporarily or permanently, nor to allow access by unauthorized persons. The user shall be responsible for the use of the services by any illegitimate third party using a password as a result of a lack of diligence or loss thereof by the user.
        </p>
        <p style={pStyle}>
          BOKMAX APP shall at all times observe the principles governing the legislation in force regarding personal data protection and shall collect only the data that are strictly necessary to provide the portal's services. It guarantees at all times the appropriate measures to achieve the security and integrity legally required for each type of file.
        </p>

        <h2 style={h2Style}>8. Data protection</h2>
        <p style={pStyle}>
          BOKMAX APP will protect users' personal data and will use it only to the extent permitted by law or where users have provided their consent. Users can find more information on this subject in the <Link to="/privacy" style={{ color: 'var(--v2-blue)', fontWeight: 600 }}>Privacy Policy</Link>.
        </p>

        <h2 style={h2Style}>9. Inquiries, suggestions, complaints or claims</h2>
        <p style={pStyle}>
          For any suggestion, inquiry, complaint, or claim, the user may contact BOKMAX through the current or future communication channels determined from time to time, such as:
        </p>
        <ul style={ulStyle}>
          <li style={liStyle}><span style={strongStyle}>ZIP Code:</span> 60804</li>
          <li style={liStyle}><span style={strongStyle}>Telephone:</span> +1 773 882 9674</li>
          <li style={liStyle}><span style={strongStyle}>Email:</span> bokmax@bokmax.com</li>
        </ul>

        <h2 style={h2Style}>10. Severability and integration of clauses</h2>
        <p style={pStyle}>
          The illegality, invalidity, or unenforceability of any of the clauses of these Terms of Use shall not affect the effectiveness of the remaining clauses, provided that the rights and obligations of the parties arising from the Terms of Use are not materially affected. Material shall mean any situation that seriously harms the interests of either party, or affects the very subject matter of these Terms of Use. Such clauses shall be replaced or supplemented by others that, being lawful, respond to the purpose of the replaced clauses.
        </p>

        <h2 style={h2Style}>11. Applicable law and jurisdiction</h2>
        <ul style={ulStyle}>
          <li style={liStyle}>These Terms of Use shall be governed by the laws of the State of Illinois and applicable federal laws of the United States, without regard to conflict-of-laws rules. If the user acts as a consumer, any mandatory rights granted by applicable consumer protection laws shall remain unaffected.</li>
          <li style={liStyle}>Any applicable state or local legislation shall also apply.</li>
          <li style={liStyle}>If acting as a consumer, the user may also submit any dispute arising from or related to the use of this app to the relevant consumer protection authority or Attorney General's office in the user's state of residence, where applicable.</li>
          <li style={liStyle}>In addition, the user may submit these Terms of Use to an alternative dispute resolution ("ADR") procedure, where available.</li>
        </ul>

        <p style={{ ...pStyle, marginTop: '3rem', color: 'var(--text-muted)', fontSize: '0.9rem', borderTop: '1px solid var(--border-light)', paddingTop: '2rem' }}>
          This Legal Notice was published on 1 April 2026.
        </p>
      </div>
    </div>
  )
}

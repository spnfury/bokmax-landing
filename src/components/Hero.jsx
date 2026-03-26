function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="mesh-bg">
        <div className="mesh-orb mesh-orb-1"></div>
        <div className="mesh-orb mesh-orb-2"></div>
        <div className="mesh-orb mesh-orb-3"></div>
      </div>
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-badge glass-card-premium">
            <span className="hero-badge-dot"></span>
            Coming Soon to iOS & Android
          </div>
          <h1 className="hero-title">
            <span className="hero-title-gradient animate-text-gradient">BOKMAX</span>
          </h1>
          <p className="hero-tagline">Your Story Your Style</p>
          <p className="hero-description">
            Barbers receive a commission for referring customers to a barbershop. 
            Barbershops get more customers thanks to these referrals. 
            Book, refer, and earn — all in one app.
          </p>
          <div className="hero-buttons">
            <a href="#download" className="store-badge glass-card-premium btn-premium" style={{padding: '12px 24px', gap: '12px'}} id="hero-appstore">
              <svg className="store-badge-icon" viewBox="0 0 24 24" fill="white">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="store-badge-text">
                <small>Download on the</small>
                <strong>App Store</strong>
              </div>
            </a>
            <a href="#download" className="store-badge glass-card-premium btn-premium" style={{padding: '12px 24px', gap: '12px'}} id="hero-playstore">
              <svg className="store-badge-icon" viewBox="0 0 24 24" fill="white">
                <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27m3.35-4.31c.34.27.59.69.59 1.19s-.22.9-.57 1.18l-2.29 1.32-2.5-2.5 2.5-2.5 2.27 1.31M6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z"/>
              </svg>
              <div className="store-badge-text">
                <small>Get it on</small>
                <strong>Google Play</strong>
              </div>
            </a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img 
            src="/hero-mockup.png" 
            alt="Bokmax App Preview" 
            className="hero-mockup animate-float-3d"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero

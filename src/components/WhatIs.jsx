import { useEffect, useRef } from 'react'

function WhatIs() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="section what-is" id="what-is" ref={sectionRef}>
      <div className="container">
        <div className="animate-on-scroll">
          <span className="section-label">
            <span className="section-label-line"></span>
            About
          </span>
          <h2 className="section-title">What is BOKMAX?</h2>
        </div>

        <div className="what-is-grid">
          <div className="what-is-content animate-on-scroll">
            <p>
              An appointment management system for barbershops that, through a unique 
              referral program and membership system, enables barbershop owners, employed 
              barbers, and customers to generate recurring passive income.
            </p>
            <p>
              The app, designed to assist barbers, barbershop owners, and customers, was 
              created as a solution to address the economic crisis by streamlining 
              professionals' workflows and leveraging technology to prevent the loss of customers.
            </p>
            <p style={{ fontWeight: 600, color: '#ffffff', opacity: 0.9, marginTop: '8px' }}>
              Generating recurring and scalable passive income for barbershop owners, employees, and customers, turning service costs into profit opportunities and ensuring business growth.
            </p>

            <div className="what-is-features">
              <div className="what-is-feature">
                <div className="what-is-feature-icon">📅</div>
                <div>
                  <h4>Smart Booking</h4>
                  <p>Book services with a specific professional, date, and time — instantly</p>
                </div>
              </div>
              <div className="what-is-feature">
                <div className="what-is-feature-icon">💰</div>
                <div>
                  <h4>Passive Income</h4>
                  <p>Earn recurring commissions by referring clients through the app</p>
                </div>
              </div>
              <div className="what-is-feature">
                <div className="what-is-feature-icon">📍</div>
                <div>
                  <h4>Geolocation</h4>
                  <p>Find nearby barbershops with real-time availability</p>
                </div>
              </div>
            </div>
          </div>

          <div className="what-is-visual animate-on-scroll">
            <div className="what-is-card">
              <div className="what-is-stats">
                <div className="stat-item">
                  <div className="stat-icon">✂️</div>
                  <div className="stat-value">3</div>
                  <div className="stat-label">User Types</div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">📱</div>
                  <div className="stat-value">iOS & Android</div>
                  <div className="stat-label">Platforms</div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">🔄</div>
                  <div className="stat-value">Recurring</div>
                  <div className="stat-label">Passive Income</div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">🏆</div>
                  <div className="stat-value">Unique</div>
                  <div className="stat-label">Referral System</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatIs

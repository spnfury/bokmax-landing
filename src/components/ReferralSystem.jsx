import { useEffect, useRef } from 'react'

function ReferralSystem() {
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
    elements?.forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.1}s`
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const cards = [
    {
      type: 'owner',
      icon: '🏪',
      tag: 'Barbershop Owners',
      title: 'Grow Your Business',
      description: 'Get more clients through referrals. Increase visibility and generate a significant additional income stream through subscriptions and referral commissions.',
      benefits: [
        'More customers via referrals',
        'Passive income from commissions',
        'Efficient booking management',
        'Business scaling tools',
        'Plans from $20/month'
      ]
    },
    {
      type: 'barber',
      icon: '✂️',
      tag: 'Employed Barbers',
      title: 'Boost Your Income',
      description: 'A mobile app that helps you get more clients and earn extra income. Generate recurring commissions by referring clients — no second job needed.',
      benefits: [
        'Complementary passive income',
        'Better schedule organization',
        'More client reach',
        'Personal brand building',
        'Premium plan at $5/month'
      ]
    },
    {
      type: 'client',
      icon: '🧔',
      tag: 'Customers',
      title: 'Save & Earn',
      description: 'Generate passive income — or even get free services — just by referring your favorite barbershop to friends. Easy booking with geolocation.',
      benefits: [
        'Earn by referring friends',
        'Easy mobile booking',
        'Geolocation-based search',
        'Offset service costs',
        'Free to use, premium at $5/month'
      ]
    }
  ]

  return (
    <section className="section referral" id="referral" ref={sectionRef}>
      <div className="container">
        <div className="referral-header text-center animate-on-scroll">
          <span className="section-label" style={{ justifyContent: 'center' }}>
            <span className="section-label-line"></span>
            Referral Program
            <span className="section-label-line"></span>
          </span>
          <h2 className="section-title">
            Everyone Earns with Bokmax
          </h2>
          <p className="section-subtitle mx-auto">
            Generate recurring passive income through a referral program designed 
            for barbershop owners, employed barbers, and their customers.
          </p>
        </div>

        <div className="referral-grid">
          {cards.map((card) => (
            <div className="referral-card glass-card-premium animate-on-scroll" key={card.type}>
              <div className={`referral-card-icon ${card.type}`}>
                {card.icon}
              </div>
              <span className={`referral-card-tag ${card.type}`}>
                {card.tag}
              </span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <ul>
                {card.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="referral-cta animate-on-scroll">
          <p className="referral-cta-text">
            The key feature is appointment management integrated with a unique referral 
            program that generates recurring passive income, addressing the industry's 
            financial challenges.
          </p>
          <a href="#download" className="cta-button btn-premium">
            Get Started
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ReferralSystem

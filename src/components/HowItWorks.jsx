import { useEffect, useRef } from 'react'

function HowItWorks() {
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
      el.style.transitionDelay = `${i * 0.15}s`
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const steps = [
    {
      number: '01',
      icon: '👤',
      title: 'Create Your Profile',
      description: 'Download the app and set up your profile in seconds. Whether you\'re a barbershop owner, barber, or customer — we\'ve got you covered.'
    },
    {
      number: '02',
      icon: '💈',
      title: 'Find & Book',
      description: 'Find your barbershop using geolocation and set up an appointment with your preferred professional, date, and time.'
    },
    {
      number: '03',
      icon: '🤝',
      title: 'Refer & Earn',
      description: 'If you enjoyed the service, refer the barbershop to your friends and start making money with every referral. Passive income, made simple.'
    }
  ]

  return (
    <section className="section" id="how-it-works" ref={sectionRef}>
      <div className="container">
        <div className="text-center animate-on-scroll">
          <span className="section-label" style={{ justifyContent: 'center' }}>
            <span className="section-label-line"></span>
            How It Works
            <span className="section-label-line"></span>
          </span>
          <h2 className="section-title">Three Simple Steps</h2>
          <p className="section-subtitle mx-auto">
            Getting started with Bokmax is easy. Download, book, and start earning 
            — all from your phone.
          </p>
        </div>

        <div className="how-it-works-steps">
          {steps.map((step) => (
            <div className="step-card glass-card-premium animate-on-scroll" key={step.number}>
              <div className="step-number">{step.number}</div>
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

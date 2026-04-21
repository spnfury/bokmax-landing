import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import screen1 from '../../assets/app-screen-1.png'
import screen2 from '../../assets/app-screen-2.png'
import screen3 from '../../assets/app-screen-3.png'
import screen4 from '../../assets/app-screen-4.png'

const screens = [screen1, screen2, screen3, screen4]
const screenLabels = ['Explore nearby', 'Book services', 'Pick your date', 'Manage profile']

function AppShowcase() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % screens.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="download"
      style={{
        background: 'linear-gradient(160deg, #020833 0%, #1a2f7a 60%, #020833 100%)',
        padding: '100px 0',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(32,75,180,0.35) 0%, transparent 70%)'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <div className="badge" style={{
            background: 'rgba(255,255,255,0.12)',
            color: 'white',
            fontFamily: "'Lexend Giga', sans-serif",
            fontSize: '0.65rem',
            display: 'inline-block',
            marginBottom: '1.25rem'
          }}>
            Available Now
          </div>
          <h2 style={{
            color: 'white',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '800',
            textTransform: 'uppercase',
            lineHeight: '1.1',
            marginBottom: '1rem'
          }}>
            Download <span style={{ color: '#4d8bff' }}>Bokmax</span><br />& Start Today
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.65)',
            fontSize: '1rem',
            maxWidth: '480px',
            margin: '0 auto',
            lineHeight: '1.7',
            fontFamily: "'Inter', sans-serif"
          }}>
            Book, refer, and earn — all from your pocket. Available on iOS and Android.
          </p>
        </motion.div>

        {/* Phone + badges layout */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'clamp(40px, 8vw, 120px)',
          flexWrap: 'wrap'
        }}>
          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ position: 'relative', flexShrink: 0 }}
          >
            {/* Glow behind phone */}
            <div style={{
              position: 'absolute',
              bottom: '-30px', left: '50%', transform: 'translateX(-50%)',
              width: '200px', height: '60px',
              background: 'rgba(77,139,255,0.4)',
              filter: 'blur(30px)',
              borderRadius: '50%'
            }} />

            {/* Phone shell */}
            <div style={{
              width: '280px',
              height: '580px',
              background: '#0a0a0a',
              borderRadius: '48px',
              border: '10px solid #1a1a1a',
              boxShadow: '0 0 0 1px #333, 0 40px 80px rgba(0,0,0,0.6), inset 0 0 0 1px #2a2a2a',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Notch */}
              <div style={{
                position: 'absolute', top: 0, left: '50%',
                transform: 'translateX(-50%)',
                width: '100px', height: '28px',
                background: '#0a0a0a',
                borderRadius: '0 0 20px 20px',
                zIndex: 10
              }} />

              {/* Screen area */}
              <div style={{
                width: '100%', height: '100%',
                borderRadius: '38px',
                overflow: 'hidden',
                position: 'relative',
                background: '#fff'
              }}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current}
                    src={screens[current]}
                    alt={screenLabels[current]}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top'
                    }}
                  />
                </AnimatePresence>
              </div>

              {/* Side buttons */}
              <div style={{
                position: 'absolute', right: '-12px', top: '120px',
                width: '4px', height: '60px', background: '#222',
                borderRadius: '0 4px 4px 0'
              }} />
              <div style={{
                position: 'absolute', left: '-12px', top: '100px',
                width: '4px', height: '36px', background: '#222',
                borderRadius: '4px 0 0 4px'
              }} />
              <div style={{
                position: 'absolute', left: '-12px', top: '150px',
                width: '4px', height: '60px', background: '#222',
                borderRadius: '4px 0 0 4px'
              }} />
            </div>

            {/* Dot indicators */}
            <div style={{
              display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '24px'
            }}>
              {screens.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  style={{
                    width: i === current ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: i === current ? '#4d8bff' : 'rgba(255,255,255,0.3)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    padding: 0
                  }}
                />
              ))}
            </div>

            {/* Screen label */}
            <p style={{
              textAlign: 'center', color: 'rgba(255,255,255,0.5)',
              fontSize: '0.75rem', marginTop: '10px',
              fontFamily: "'Inter', sans-serif", letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}>
              {screenLabels[current]}
            </p>
          </motion.div>

          {/* Download badges */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}
          >
            <div style={{ marginBottom: '12px' }}>
              <h3 style={{
                color: 'white', fontSize: '1.5rem', fontWeight: '800',
                textTransform: 'uppercase', marginBottom: '8px'
              }}>Get the App</h3>
              <p style={{
                color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem',
                fontFamily: "'Inter', sans-serif", lineHeight: '1.5'
              }}>
                Free to download.<br />Start growing your business today.
              </p>
            </div>

            {/* App Store badge — official Apple badge */}
            <a
              href="#"
              aria-label="Download on the App Store"
              style={{ display: 'inline-block', transition: 'transform 0.2s, opacity 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.opacity = '0.9' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.opacity = '1' }}
            >
              <img
                src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"
                alt="Download on the App Store"
                style={{ height: '54px', width: 'auto', display: 'block' }}
              />
            </a>

            {/* Google Play badge — official Google badge */}
            <a
              href="#"
              aria-label="Get it on Google Play"
              style={{ display: 'inline-block', transition: 'transform 0.2s, opacity 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.opacity = '0.9' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.opacity = '1' }}
            >
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                style={{ height: '54px', width: 'auto', display: 'block' }}
              />
            </a>

            {/* Trust badges */}
            <div style={{ display: 'flex', gap: '24px', marginTop: '8px' }}>
              {[
                { icon: '★', text: '4.9 Rating' },
                { icon: '🔒', text: 'Secure' },
                { icon: '⚡', text: 'Fast & Free' },
              ].map(({ icon, text }) => (
                <div key={text} style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px'
                }}>
                  <span style={{ fontSize: '1.2rem' }}>{icon}</span>
                  <span style={{
                    color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem',
                    fontFamily: "'Inter', sans-serif", textTransform: 'uppercase', letterSpacing: '0.05em'
                  }}>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AppShowcase

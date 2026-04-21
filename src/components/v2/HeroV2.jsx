import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import screen1 from '../../assets/app-screen-1.png'
import screen2 from '../../assets/app-screen-2.png'
import screen3 from '../../assets/app-screen-3.png'
import screen4 from '../../assets/app-screen-4.png'
import LogoV2 from './LogoV2'

const screens = [screen1, screen2, screen3, screen4]

function HeroV2() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % screens.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="hero v2-theme" id="hero" style={{ background: 'linear-gradient(180deg, #f8faff 0%, #ffffff 100%)', padding: '100px 0 100px' }}>
      <div className="container grid-2" style={{ alignItems: 'center' }}>

        {/* Text — left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hero-content"
        >
          <div style={{ marginBottom: '2rem' }}>
            <LogoV2 variant="primary" />
          </div>

          <div className="badge" style={{
            marginBottom: '1.5rem',
            background: 'var(--v2-blue)',
            color: 'white',
            fontFamily: "'Lexend Giga', sans-serif",
            fontSize: '0.65rem'
          }}>
            Barbershop Booking App
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            marginBottom: '1.5rem',
            color: 'var(--v2-navy)',
            fontWeight: '800',
            lineHeight: '1.1',
            textTransform: 'uppercase'
          }}>
            BOKMAX: <br />
            <span style={{ color: 'var(--v2-red)' }}>Your Barber</span> <br />
            <span style={{ color: 'var(--v2-blue)' }}>Your Business</span>
          </h1>

          <p style={{
            fontSize: '1rem',
            color: 'var(--text-muted)',
            maxWidth: '500px',
            marginBottom: '2.5rem',
            lineHeight: '1.7',
            fontWeight: '400',
            fontFamily: "'Inter', sans-serif"
          }}>
            The booking app built for barbershops. Manage appointments, retain clients and grow your customer base with a powerful built-in referral system.
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
            <motion.a
              whileHover={{ scale: 1.04, opacity: 0.9 }}
              whileTap={{ scale: 0.97 }}
              href="#"
              aria-label="Download on the App Store"
              style={{ display: 'inline-block' }}
            >
              <img
                src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"
                alt="Download on the App Store"
                style={{ height: '52px', width: 'auto', display: 'block' }}
              />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.04, opacity: 0.9 }}
              whileTap={{ scale: 0.97 }}
              href="#"
              aria-label="Get it on Google Play"
              style={{ display: 'inline-block' }}
            >
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                style={{ height: '70px', width: 'auto', display: 'block', marginTop: '-9px', marginBottom: '-9px' }}
              />
            </motion.a>
          </div>
        </motion.div>

        {/* Phone slider — right */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="hero-mockup-container"
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}
        >
          {/* Glow */}
          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '200px',
            height: '60px',
            background: 'rgba(32, 75, 180, 0.2)',
            filter: 'blur(30px)',
            borderRadius: '50%'
          }} />

          {/* Phone shell */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: '260px',
              height: '540px',
              background: '#0a0a0a',
              borderRadius: '48px',
              border: '10px solid #1a1a1a',
              boxShadow: '0 0 0 1px #333, 0 40px 80px rgba(2, 8, 51, 0.2), inset 0 0 0 1px #2a2a2a',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Notch */}
            <div style={{
              position: 'absolute', top: 0, left: '50%',
              transform: 'translateX(-50%)',
              width: '90px', height: '26px',
              background: '#0a0a0a',
              borderRadius: '0 0 18px 18px',
              zIndex: 10
            }} />

            {/* Screen */}
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
                  alt={`App screen ${current + 1}`}
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
            <div style={{ position: 'absolute', right: '-12px', top: '120px', width: '4px', height: '60px', background: '#222', borderRadius: '0 4px 4px 0' }} />
            <div style={{ position: 'absolute', left: '-12px', top: '100px', width: '4px', height: '36px', background: '#222', borderRadius: '4px 0 0 4px' }} />
            <div style={{ position: 'absolute', left: '-12px', top: '150px', width: '4px', height: '60px', background: '#222', borderRadius: '4px 0 0 4px' }} />
          </motion.div>

          {/* Dot indicators */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '20px' }}>
            {screens.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{
                  width: i === current ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: i === current ? 'var(--v2-blue)' : 'rgba(2, 8, 51, 0.2)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  padding: 0
                }}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default HeroV2

import { motion } from 'framer-motion'
import heroGuy from '../../assets/hero-guy-mobile.png'

function HeroV2() {
  return (
    <section className="hero v2-theme" id="hero" style={{ background: 'linear-gradient(180deg, #f8faff 0%, #ffffff 100%)', padding: '160px 0 100px' }}>
      <div className="container grid-2">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hero-content"
        >
          <div className="badge" style={{ 
            marginBottom: '1.5rem', 
            background: 'var(--v2-blue)', 
            color: 'white',
            fontFamily: "'Lexend Giga', sans-serif",
            fontSize: '0.65rem'
          }}>
            The Elite Referral Network
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
            <span style={{ color: 'var(--v2-red)' }}>Your Story</span> <br />
            <span style={{ color: 'var(--v2-blue)' }}>Your Style</span>
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
            The elite referral network designed to carve the economic crux in the grooming industry. 
            Connecting owners, barbers, and customers through a seamless ecosystem built on trust and style.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#download" 
              className="btn btn-primary"
              style={{ padding: '14px 32px', fontSize: '0.8rem', letterSpacing: '0.02em', textTransform: 'uppercase' }}
            >
              Get Started Now
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#how-it-works" 
              className="btn btn-outline"
              style={{ padding: '14px 32px', fontSize: '0.8rem', letterSpacing: '0.02em', textTransform: 'uppercase', borderColor: 'var(--v2-blue)', color: 'var(--v2-blue)' }}
            >
              How It Works
            </motion.a>
          </div>
          
          <div style={{ marginTop: '3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ display: 'flex' }}>
              {[1, 2, 3].map((i) => (
                <div key={i} style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '50%', 
                  background: `url(https://i.pravatar.cc/100?img=${i+10})`,
                  backgroundSize: 'cover',
                  border: '3px solid white',
                  marginLeft: i === 1 ? 0 : '-15px',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                }} />
              ))}
            </div>
            <span style={{ fontSize: '0.8rem', fontWeight: '500', color: 'var(--text-muted)', fontFamily: "'Inter', sans-serif" }}>
              Joined by <span style={{ color: 'var(--v2-navy)', fontWeight: '800' }}>9,000+</span> professionals
            </span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="hero-mockup-container"
          style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}
        >
          {/* Decorative element */}
          <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle, rgba(32, 75, 180, 0.1) 0%, rgba(255, 255, 255, 0) 70%)',
            zIndex: -1,
            top: 0
          }}></div>
          
          <motion.img 
            animate={{ 
              y: [0, -15, 0],
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            src={heroGuy} 
            alt="Bokmax App Experience" 
            className="hero-mockup-img"
            style={{ 
              maxWidth: '100%', 
              height: 'auto', 
              width: '400px',
              borderRadius: '32px',
              boxShadow: '0 30px 60px rgba(2, 8, 51, 0.15)'
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default HeroV2

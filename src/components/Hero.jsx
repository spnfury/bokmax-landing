import { motion } from 'framer-motion'
import heroGuy from '../assets/hero-guy-mobile.png'

function Hero() {
  return (
    <section className="hero" id="hero" style={{ background: 'linear-gradient(180deg, #f8faff 0%, #ffffff 100%)' }}>
      <div className="container grid-2">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hero-content"
        >
          <div className="badge" style={{ marginBottom: '1.5rem' }}>
            The Elite Referral Network
          </div>
          <h1 style={{ 
            fontSize: 'clamp(3rem, 6vw, 4.5rem)', 
            marginBottom: '1rem',
            color: 'var(--primary)'
          }}>
            BOKMAX: <br />
            <span className="text-gradient">Your Story</span> <br />
            Your Style
          </h1>
          <p style={{ 
            fontSize: '1.1rem', 
            color: 'var(--text-muted)', 
            maxWidth: '500px', 
            marginBottom: '2.5rem', 
            lineHeight: '1.8'
          }}>
            The elite referral network designed to carve the economic crux in the grooming industry. 
            Connecting owners, barbers, and customers through a seamless ecosystem.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#download" 
              className="btn btn-primary"
            >
              Get Started Now
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#how-it-works" 
              className="btn btn-outline"
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
                  marginLeft: i === 1 ? 0 : '-15px'
                }} />
              ))}
            </div>
            <span style={{ fontSize: '0.9rem', fontWeight: '500', color: 'var(--text-muted)' }}>
              Joined by <span style={{ color: 'var(--primary)', fontWeight: '700' }}>9,000+</span> professionals
            </span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="hero-mockup-container"
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <motion.img 
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            src={heroGuy} 
            alt="Bokmax Lifestyle - Barber using the app" 
            className="hero-mockup-img"
            style={{ 
              maxWidth: '100%', 
              height: 'auto', 
              width: '400px',
              borderRadius: '24px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

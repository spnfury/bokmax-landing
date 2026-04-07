import { motion } from 'framer-motion'
import { TrendingUp, ShieldCheck } from 'lucide-react'
import heroGuy from '../assets/hero-guy-mobile.png'

function FeaturesGallery() {
  return (
    <section className="section" id="features">
      <div className="container grid-2">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="features-visual"
          style={{ position: 'relative' }}
        >
          <img 
            src={heroGuy} 
            alt="Barber using Bokmax" 
            style={{ 
              borderRadius: 'var(--radius-xl)', 
              boxShadow: 'var(--shadow-lg)',
              width: '100%',
              objectFit: 'cover',
              aspectRatio: '1/1'
            }} 
          />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{
              position: 'absolute',
              bottom: '-20px',
              right: '-20px',
              background: 'white',
              padding: '1.5rem',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-lg)',
              borderLeft: '4px solid var(--accent)'
            }}
          >
            <span style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--primary)' }}>99%</span>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Professional Satisfaction</p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="features-content"
        >
          <div className="badge" style={{ marginBottom: '1rem' }}>Evolutionary Path</div>
          <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginBottom: '1.5rem', color: 'var(--primary)' }}>
            Revolutionizing the Industry
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: '1.8' }}>
            In an era of economic uncertainty, BOKMAX stands as a beacon of stability. 
            We don't just provide a booking platform; we've engineered a solution to the economic crisis affecting small businesses and creators.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
            <div className="feature-item">
              <div style={{ 
                width: '48px', 
                height: '48px', 
                background: 'rgba(32, 75, 180, 0.1)', 
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent)',
                marginBottom: '1rem'
              }}>
                <TrendingUp size={24} />
              </div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Combat Inflation</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                Innovative revenue streams that bypass traditional market stagnation.
              </p>
            </div>

            <div className="feature-item">
              <div style={{ 
                width: '48px', 
                height: '48px', 
                background: 'rgba(32, 75, 180, 0.1)', 
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent)',
                marginBottom: '1rem'
              }}>
                <ShieldCheck size={24} />
              </div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Sustainable Growth</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                Focus on long-term wealth creation for service providers and creators.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesGallery

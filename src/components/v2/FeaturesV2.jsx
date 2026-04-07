import { motion } from 'framer-motion'
import { TrendingUp, ShieldCheck } from 'lucide-react'
import barberImage from '../../assets/barber_shop_premium.png'

function FeaturesV2() {
  return (
    <section className="section v2-theme" id="features" style={{ backgroundColor: '#ffffff' }}>
      <div className="container grid-2">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="features-visual"
          style={{ position: 'relative' }}
        >
          <img 
            src={barberImage} 
            alt="Premium Barber Shop" 
            style={{ 
              borderRadius: '24px', 
              boxShadow: '0 20px 50px rgba(2, 8, 51, 0.1)',
              width: '100%',
              objectFit: 'cover',
              aspectRatio: '1/1',
              border: '1px solid var(--border-light)'
            }} 
          />
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            style={{
              position: 'absolute',
              top: '40px',
              left: '-20px',
              background: 'var(--v2-blue)',
              padding: '1.25rem',
              borderRadius: '16px',
              boxShadow: 'var(--shadow-lg)',
              color: 'white',
              zIndex: 2
            }}
          >
            <span style={{ fontSize: '1.5rem', fontWeight: '800', display: 'block', lineHeight: '1' }}>99%</span>
            <p style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '4px', opacity: 0.9 }}>Professional<br/>Satisfaction</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            style={{
              position: 'absolute',
              bottom: '40px',
              right: '-20px',
              background: 'var(--v2-red)',
              padding: '1.25rem',
              borderRadius: '16px',
              boxShadow: 'var(--shadow-lg)',
              color: 'white',
              zIndex: 2
            }}
          >
            <span style={{ fontSize: '1rem', fontWeight: '800', display: 'block', lineHeight: '1', textTransform: 'uppercase' }}>Elite</span>
            <p style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '4px', opacity: 0.9 }}>Performance<br/>Standard</p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="features-content"
        >
          <div className="badge" style={{ 
            marginBottom: '1rem',
            background: 'rgba(233, 50, 33, 0.1)',
            color: 'var(--v2-red)',
            fontFamily: "'Lexend Giga', sans-serif",
            fontSize: '0.65rem'
          }}>Evolutionary Path</div>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 4vw, 3rem)', 
            marginBottom: '1.5rem', 
            color: 'var(--v2-navy)',
            lineHeight: '1.1',
            textTransform: 'uppercase',
            fontWeight: '800'
          }}>
            Revolutionizing <br/> the Industry
          </h2>
          <p style={{ 
            fontSize: '1rem', 
            color: 'var(--text-muted)', 
            marginBottom: '2.5rem', 
            lineHeight: '1.7',
            fontFamily: "'Inter', sans-serif"
          }}>
            In an era of economic uncertainty, BOKMAX stands as a beacon of stability. 
            We have engineered a solution to the economic crisis affecting small businesses and creators through a modular and elegant ecosystem.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '1.5rem' }}>
            <div style={{ 
              display: 'flex', 
              gap: '1.25rem', 
              padding: '1.5rem', 
              borderRadius: '20px', 
              background: '#f8faff',
              border: '1px solid var(--border-light)'
            }}>
              <div style={{ 
                width: '44px', 
                height: '44px', 
                background: 'var(--v2-blue)', 
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                flexShrink: 0
              }}>
                <TrendingUp size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.9rem', marginBottom: '0.4rem', textTransform: 'uppercase', fontWeight: '800' }}>Combat Inflation</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5', fontFamily: "'Inter', sans-serif" }}>
                  Innovative revenue streams that bypass traditional market stagnation and empower creators.
                </p>
              </div>
            </div>

            <div style={{ 
              display: 'flex', 
              gap: '1.25rem', 
              padding: '1.5rem', 
              borderRadius: '20px', 
              background: '#f8faff',
              border: '1px solid var(--border-light)'
            }}>
              <div style={{ 
                width: '44px', 
                height: '44px', 
                background: 'var(--v2-red)', 
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                flexShrink: 0
              }}>
                <ShieldCheck size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.9rem', marginBottom: '0.4rem', textTransform: 'uppercase', fontWeight: '800' }}>Sustainable Growth</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5', fontFamily: "'Inter', sans-serif" }}>
                  Focus on long-term wealth creation for service providers through our elite referral network.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesV2

import { motion } from 'framer-motion'

function BrandStoryV2() {
  return (
    <section className="section v2-theme" id="brand-story" style={{ backgroundColor: '#f8faff', padding: '120px 0' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '5rem',
          alignItems: 'center' 
        }}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="badge" style={{ 
              marginBottom: '1rem', 
              background: 'var(--v2-blue)', 
              color: 'white',
              fontFamily: "'Lexend Giga', sans-serif",
              fontSize: '0.65rem'
            }}>Our Story</div>
            <h2 style={{ 
              fontSize: '3rem', 
              color: 'var(--v2-navy)', 
              textTransform: 'uppercase', 
              fontWeight: '800',
              lineHeight: '1.1',
              marginBottom: '2rem'
            }}>
              Elevating the Craft
            </h2>
            <p style={{ 
              fontSize: '1.1rem', 
              color: 'var(--text-muted)', 
              lineHeight: '1.8',
              fontFamily: "'Inter', sans-serif",
              marginBottom: '1.5rem'
            }}>
              BOKMAX was born from a simple belief: the grooming industry deserves a narrative as elite as the skills of its professionals.
            </p>
            <p style={{ 
              fontSize: '1rem', 
              color: 'rgba(2, 8, 51, 0.7)', 
              lineHeight: '1.7',
              fontFamily: "'Inter', sans-serif"
            }}>
              We have engineered an ecosystem that respects the tradition of the craft while providing the modern tools needed to thrive in a digital economy. Our network is a testament to the power of community, style, and sustainable growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, 1fr)', 
              gap: '1.5rem',
              position: 'relative'
            }}
          >
            <div style={{ 
              height: '350px', 
              background: 'linear-gradient(135deg, var(--v2-blue) 0%, #3b66cf 100%)',
              borderRadius: '32px',
              marginTop: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '3rem',
              fontFamily: "'Lexend Giga', sans-serif",
              fontWeight: '800',
              boxShadow: '0 20px 40px rgba(32, 75, 180, 0.2)'
            }}>
              BK
            </div>
            <div style={{ 
              height: '350px', 
              background: 'linear-gradient(135deg, var(--v2-red) 0%, #ff4d3d 100%)',
              borderRadius: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '3rem',
              fontFamily: "'Lexend Giga', sans-serif",
              fontWeight: '800',
              boxShadow: '0 20px 40px rgba(233, 50, 33, 0.2)'
            }}>
              MX
            </div>
            
            {/* Overlay badge image or logo */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '120px',
              height: '120px',
              background: 'var(--v2-white)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              zIndex: 3
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'var(--v2-navy)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontFamily: "'Lexend Giga', sans-serif",
                fontSize: '2rem',
                fontWeight: '900'
              }}>B</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BrandStoryV2

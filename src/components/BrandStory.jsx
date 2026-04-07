import { motion } from 'framer-motion'

function BrandStory() {
  return (
    <section className="section" id="brand-story" style={{ background: 'var(--white)' }}>
      <div className="container grid-2">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontSize: '3.5rem', color: 'var(--primary)', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            Elevating the Craft, One Referral at a Time.
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.8' }}>
            Our community isn't just about bookings; it's about building a legacy in the grooming world. 
            From the sharpest fades to the most robust business models, we are the engine behind the industry's next chapter.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <div>
              <span style={{ display: 'block', fontSize: '1.5rem', fontWeight: '800', color: 'var(--accent)' }}>EST. 2024</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Founded in Spain</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <img 
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=600" 
              alt="Barber Craft" 
              style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', paddingTop: '3rem' }}>
            <img 
              src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=600" 
              alt="Premium Shop" 
              style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', height: '250px', objectFit: 'cover' }}
            />
            <div style={{ 
              background: 'var(--primary)', 
              color: 'white', 
              padding: '2rem', 
              borderRadius: 'var(--radius-lg)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              boxShadow: 'var(--shadow-lg)'
            }}>
              <span style={{ fontSize: '2rem', fontWeight: '800' }}>100%</span>
              <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>Secure & Professional</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BrandStory

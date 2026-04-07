import { motion } from 'framer-motion'
import { UserPlus, Calendar, CreditCard } from 'lucide-react'

const steps = [
  {
    title: 'Create Your Profile',
    desc: 'Showcase your brand and unique style specifically designed for the industry.',
    icon: <UserPlus size={32} />,
    color: 'var(--v2-blue)'
  },
  {
    title: 'Seamless Booking',
    desc: 'Effortless scheduling and client management built for busy professionals.',
    icon: <Calendar size={32} />,
    color: 'var(--v2-red)'
  },
  {
    title: 'Refer & Earn',
    desc: 'Join the premier referral network and generate new revenue streams.',
    icon: <CreditCard size={32} />,
    color: 'var(--v2-navy)'
  }
]

function HowItWorksV2() {
  return (
    <section className="section v2-theme" id="how-it-works" style={{ backgroundColor: '#f8faff' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div className="badge" style={{ 
            marginBottom: '1rem', 
            background: 'var(--v2-red)', 
            color: 'white',
            fontFamily: "'Lexend Giga', sans-serif",
            fontSize: '0.6rem'
          }}>Process</div>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 5vw, 3rem)', 
            color: 'var(--v2-navy)', 
            textTransform: 'uppercase', 
            fontWeight: '800',
            lineHeight: '1.2'
          }}>
            How BOKMAX Works
          </h2>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2.5rem' 
        }}>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              style={{
                background: 'white',
                padding: '3rem 2rem',
                borderRadius: '24px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(2, 8, 51, 0.05)',
                border: '1px solid var(--border-light)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Step number on background */}
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-10px',
                fontSize: '8rem',
                fontWeight: '900',
                color: 'rgba(2, 8, 51, 0.03)',
                zIndex: 0,
                lineHeight: '1',
                fontFamily: "'Lexend Giga', sans-serif"
              }}>
                {index + 1}
              </div>

              <div style={{ 
                width: '72px', 
                height: '72px', 
                backgroundColor: step.color,
                color: 'white',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 2rem',
                position: 'relative',
                zIndex: 1,
                boxShadow: `0 8px 20px -5px ${step.color}66`
              }}>
                {step.icon}
              </div>
              
              <h3 style={{ 
                fontSize: '1.1rem', 
                marginBottom: '1rem', 
                color: 'var(--v2-navy)', 
                textTransform: 'uppercase', 
                fontWeight: '800',
                position: 'relative',
                zIndex: 1
              }}>
                {step.title}
              </h3>
              
              <p style={{ 
                fontSize: '0.9rem', 
                color: 'var(--text-muted)', 
                lineHeight: '1.6',
                fontFamily: "'Inter', sans-serif",
                position: 'relative',
                zIndex: 1
              }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorksV2

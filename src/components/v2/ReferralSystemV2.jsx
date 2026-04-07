import { motion } from 'framer-motion'
import { Store, Scissors, Users } from 'lucide-react'

const targets = [
  {
    title: 'For Owners',
    desc: 'Stabilize your business with recurring revenue streams through our elite referral framework.',
    icon: <Store size={28} />,
    color: 'var(--v2-blue)'
  },
  {
    title: 'For Barbers',
    desc: 'Take control of your financial destiny and grow your professional community with ease.',
    icon: <Scissors size={28} />,
    color: 'var(--v2-red)'
  },
  {
    title: 'For Customers',
    desc: 'Enjoy a seamless booking experience and premium services through the industry elite.',
    icon: <Users size={28} />,
    color: 'var(--v2-navy)'
  }
]

function ReferralSystemV2() {
  return (
    <section className="section referral-section v2-theme" id="referral-system" style={{ background: 'var(--v2-navy)', color: 'white' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <div className="badge" style={{ 
            marginBottom: '1rem', 
            background: 'var(--v2-red)', 
            color: 'white',
            fontFamily: "'Lexend Giga', sans-serif",
            fontSize: '0.65rem'
          }}>The Ultimate Network</div>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
            color: 'white', 
            textTransform: 'uppercase', 
            fontWeight: '800',
            lineHeight: '1.1'
          }}>
            Designed for <br/> the Industry Elite
          </h2>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2.5rem' 
        }}>
          {targets.map((target, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '3rem 2rem',
                borderRadius: '24px',
                textAlign: 'left',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.4s ease'
              }}
              whileHover={{ 
                translateY: -10, 
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderColor: target.color
              }}
            >
              <div style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: target.color,
                color: 'white',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '2rem'
              }}>
                {target.icon}
              </div>
              
              <h3 style={{ 
                fontSize: '1.1rem', 
                marginBottom: '1rem', 
                color: 'white', 
                textTransform: 'uppercase', 
                fontWeight: '800'
              }}>
                {target.title}
              </h3>
              
              <p style={{ 
                fontSize: '0.9rem', 
                color: 'rgba(255, 255, 255, 0.65)', 
                lineHeight: '1.7',
                fontFamily: "'Inter', sans-serif"
              }}>
                {target.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReferralSystemV2

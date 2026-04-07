import { motion } from 'framer-motion'
import { Store, Scissors, Users, CheckCircle2 } from 'lucide-react'

const cards = [
  {
    type: 'owners',
    icon: <Store size={32} />,
    title: 'FOR OWNERS',
    benefits: [
      'Earn commissions from every service performed in your shop.',
      'Automatic referral tracking for walk-in or repeat clients.',
      'Inventory and staff management integrated into one dashboard.'
    ]
  },
  {
    type: 'barbers',
    icon: <Scissors size={32} />,
    title: 'FOR BARBERS',
    benefits: [
      'Keep 100% of your tips and 10% referral bonus on new clients.',
      'Build your personal brand with a custom checkout profile.',
      'Financial tools to track earnings and project growth.'
    ]
  },
  {
    type: 'customers',
    icon: <Users size={32} />,
    title: 'FOR CUSTOMERS',
    benefits: [
      'Cashback on every service you book through the app.',
      'Refer friends and earn service credits instantly.',
      'Access to elite barber network with verified reviews.'
    ]
  }
]

function ReferralSystem() {
  return (
    <section className="section referral-section" id="referral">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}
          >
            The Ultimate Referral Network
          </motion.h2>
          <div style={{ width: '80px', height: '4px', background: 'var(--danger)', margin: '0 auto' }}></div>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '2rem' 
        }}>
          {cards.map((card, index) => (
            <motion.div
              key={card.type}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="card referral-card"
              style={{ padding: '3rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            >
              <div style={{ color: 'var(--accent)' }}>
                {card.icon}
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', letterSpacing: '1px' }}>
                {card.title}
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {card.benefits.map((benefit, i) => (
                  <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', fontSize: '0.95rem' }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--danger)', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ lineHeight: '1.5' }}>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReferralSystem

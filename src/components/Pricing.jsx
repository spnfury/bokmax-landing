import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Barbers & Customers',
    price: '$5',
    period: '/month',
    features: [
      'Full referral access',
      'Basic Analytics',
      'Community Hub Access'
    ],
    cta: 'Join Now',
    featured: false
  },
  {
    name: 'Shop Basic',
    price: '$20',
    period: '/month',
    features: [
      'Up to 3 Barbers',
      'Shop Dashboard',
      'Integrated Payments',
      'Priority Support'
    ],
    cta: 'Select Plan',
    featured: true
  },
  {
    name: 'Shop Elite',
    price: '$50',
    period: '/month',
    features: [
      'Unlimited Barbers',
      'Custom Branding',
      'Advanced API Access',
      'Multi-location'
    ],
    cta: 'Get Started',
    featured: false
  }
]

function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="badge" style={{ marginBottom: '1rem' }}>Pricing</div>
          <h2 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '1rem' }}>
            Membership Plans
          </h2>
          <p style={{ color: 'var(--text-muted)' }}>Choose the path that fits your professional journey.</p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2.5rem',
          alignItems: 'center'
        }}>
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`card membership-card ${plan.featured ? 'featured' : ''}`}
              style={{ 
                padding: '3rem 2.5rem',
                borderWidth: plan.featured ? '2px' : '1px'
              }}
            >
              <h4 style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: '800', textTransform: 'uppercase', marginBottom: '1rem' }}>
                {plan.name}
              </h4>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '2rem' }}>
                <span style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--primary)' }}>{plan.price}</span>
                <span style={{ color: 'var(--text-muted)' }}>{plan.period}</span>
              </div>
              
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem', minHeight: '180px' }}>
                {plan.features.map((feature, i) => (
                  <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'center', fontSize: '0.95rem' }}>
                    <Check size={18} style={{ color: 'var(--accent)' }} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`btn ${plan.featured ? 'btn-primary' : 'btn-outline'}`} style={{ width: '100%' }}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing

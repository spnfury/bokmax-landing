import { motion } from 'framer-motion'
import { UserPlus, Calendar, Share2 } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: <UserPlus size={32} />,
    title: 'Create your profile',
    description: 'Set up your professional identity or personal preferences in minutes. High-impact visuals meet intuitive setup.'
  },
  {
    number: '02',
    icon: <Calendar size={32} />,
    title: 'Seamless booking',
    description: 'Real-time availability and instant confirmations. No more back-and-forth, just premium service guarantee.'
  },
  {
    number: '03',
    icon: <Share2 size={32} />,
    title: 'Refer & Earn',
    description: 'Activate our unique referral engine. Earn passive income by growing the network you love.'
  }
]

function HowItWorks() {
  return (
    <section className="section" id="how-it-works" style={{ background: 'var(--bg-soft)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="badge" style={{ marginBottom: '1rem' }}>Process</div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--primary)', marginBottom: '1rem' }}>
            How BOKMAX Works
          </h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--accent)', margin: '0 auto' }}></div>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2.5rem' 
        }}>
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card"
              style={{ textAlign: 'center', padding: '3rem 2rem' }}
            >
              <div style={{ 
                width: '64px', 
                height: '64px', 
                background: 'var(--white)',
                color: 'var(--accent)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 2rem',
                fontSize: '1.2rem',
                fontWeight: '800',
                boxShadow: 'var(--shadow-md)',
                position: 'relative'
              }}>
                {step.number}
              </div>
              <div style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>
                {step.icon}
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--primary)' }}>
                {step.title}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

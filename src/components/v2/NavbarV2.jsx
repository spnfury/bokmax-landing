import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import LogoV2 from './LogoV2'

const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Process', href: '#how-it-works' },
  { name: 'Membership', href: '#pricing' },
]

function NavbarV2() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`navbar v2-theme ${scrolled ? 'glass-morphism' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? '10px 0' : '20px 0',
        transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="/">
          <LogoV2 className="navbar-logo" variant="primary" />
        </a>

        {/* Desktop Menu */}
        <div style={{ display: 'none', gap: '32px', alignItems: 'center' }} className="desktop-nav">
          <style>{`
            @media (min-width: 968px) {
              .desktop-nav { display: flex !important; }
              .mobile-toggle { display: none !important; }
            }
          `}</style>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                fontSize: '0.75rem',
                fontWeight: '700',
                color: scrolled ? 'var(--v2-navy)' : 'rgba(2, 8, 51, 0.9)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--v2-blue)'}
              onMouseLeave={(e) => e.target.style.color = scrolled ? 'var(--v2-navy)' : 'rgba(2, 8, 51, 0.9)'}
            >
              {link.name}
            </a>
          ))}
          
          <div style={{ width: '1px', height: '20px', background: 'var(--border-light)' }}></div>
          
          <a href="/login" style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--v2-navy)', textTransform: 'uppercase' }}>
            Login
          </a>
          
          <button className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '0.75rem', textTransform: 'uppercase' }}>
            Get Started
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--v2-navy)' }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'white',
              borderBottom: '1px solid var(--border-light)',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              textAlign: 'center',
              boxShadow: 'var(--v2-shadow-md)',
              fontFamily: "'Lexend Giga', sans-serif"
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{ fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase' }}
              >
                {link.name}
              </a>
            ))}
            <div style={{ height: '1px', background: 'var(--border-light)', margin: '5px 0' }}></div>
            <a href="/login" style={{ fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase' }}>Login</a>
            <button className="btn btn-primary" style={{ textTransform: 'uppercase' }}>Get Started</button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default NavbarV2

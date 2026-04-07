import React from 'react'

function LogoV2({ className = '', variant = 'primary' }) {
  // variants: 
  // 'primary': blue background, white text
  // 'accent': red background, white text
  // 'dark': white background, dark text
  
  const bg = variant === 'primary' ? 'var(--v2-blue)' : variant === 'accent' ? 'var(--v2-red)' : 'var(--v2-white)';
  const text = variant === 'dark' ? 'var(--v2-navy)' : 'var(--v2-white)';
  const dot = variant === 'accent' ? 'var(--v2-blue)' : 'var(--v2-red)';

  return (
    <div className={`brand-logo-v2 ${className}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
      <div 
        style={{ 
          backgroundColor: bg, 
          width: '44px', 
          height: '44px', 
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}
      >
        <span style={{
          color: text,
          fontFamily: "'Lexend Giga', sans-serif",
          fontWeight: '800',
          fontSize: '24px',
          lineHeight: '1',
          marginLeft: '-1px'
        }}>B</span>
        <div style={{
          backgroundColor: dot,
          width: '7px',
          height: '7px',
          borderRadius: '50%',
          position: 'absolute',
          bottom: '9px',
          right: '8px',
          border: `1.5px solid ${bg}`
        }}></div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ 
          fontFamily: "'Lexend Giga', sans-serif", 
          fontWeight: '800', 
          fontSize: '18px', 
          color: variant === 'primary' ? 'var(--v2-navy)' : text,
          lineHeight: '1',
          letterSpacing: '-0.02em'
        }}>
          BOKMAX
        </span>
        <span style={{ 
          fontFamily: "'Lexend Giga', sans-serif",
          fontSize: '8px', 
          letterSpacing: '0.1em', 
          color: variant === 'primary' ? 'rgba(2, 8, 51, 0.6)' : 'rgba(255, 255, 255, 0.7)',
          textTransform: 'uppercase',
          lineHeight: '1',
          fontWeight: '500',
          marginTop: '1px'
        }}>
          your story your style
        </span>
      </div>
    </div>
  )
}

export default LogoV2

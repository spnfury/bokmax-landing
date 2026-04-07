import React from 'react'

function Logo({ className = '', secondary = false }) {
  const circleColor = secondary ? 'var(--accent)' : 'var(--primary)';
  const textColor = 'var(--text-main)';
  
  return (
    <div className={`brand-logo ${className}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
      <div 
        className="brand-logo-mark"
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          backgroundColor: circleColor, 
          width: '42px', 
          height: '42px', 
          borderRadius: '12px',
          position: 'relative',
          flexShrink: 0,
          boxShadow: '0 8px 16px rgba(2, 8, 51, 0.15)'
        }}
      >
        <span style={{
          color: '#ffffff',
          fontFamily: 'Outfit',
          fontWeight: '900',
          fontSize: '24px',
          lineHeight: '1',
          marginLeft: '-2px'
        }}>B</span>
        <div style={{
          backgroundColor: 'var(--danger)',
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          position: 'absolute',
          bottom: '8px',
          right: '6px',
          border: '2px solid' + circleColor
        }}></div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <span style={{ 
          fontFamily: 'Outfit', 
          fontWeight: '800', 
          fontSize: '20px', 
          color: textColor,
          lineHeight: '1',
          letterSpacing: '1px',
          textTransform: 'uppercase'
        }}>
          Bokmax
        </span>
        <span style={{ 
          fontFamily: 'Inter',
          fontSize: '9px', 
          letterSpacing: '1.5px', 
          color: 'var(--text-muted)',
          textTransform: 'uppercase',
          lineHeight: '1',
          fontWeight: '600',
          marginTop: '2px'
        }}>
          Network
        </span>
      </div>
    </div>
  )
}

export default Logo

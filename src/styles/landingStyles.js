// styles/landingStyles.js
export const pageStyles = {
  main: {
    minHeight: '100vh',
    background: `
      linear-gradient(135deg, 
        rgba(59, 130, 246, 0.1) 0%, 
        rgba(139, 92, 246, 0.05) 25%, 
        rgba(16, 185, 129, 0.08) 50%, 
        rgba(245, 158, 11, 0.05) 75%, 
        rgba(239, 68, 68, 0.1) 100%
      ),
      radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 40%),
      radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.2) 0%, transparent 40%),
      linear-gradient(135deg, #f8fafc 0%, #e0f2fe 30%, #f0f9ff 70%, #e0e7ff 100%)
    `,
    fontFamily: '"Oswald", sans-serif'
  },
  
  navigation: {
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
    position: 'sticky',
    top: 0,
    zIndex: 50,
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
  },

  navContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1.5rem'
  },

  navContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '5rem'
  },

  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },

  logoIcon: {
    width: '3rem',
    height: '3rem',
    background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
    borderRadius: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 8px 25px rgba(59, 130, 246, 0.3)'
  },

  logoText: {
    fontWeight: 800,
    fontSize: '1.5rem',
    color: '#111827',
    margin: 0,
    fontFamily: '"Oswald", sans-serif'
  },

  logoSubtext: {
    fontSize: '0.75rem',
    color: '#6b7280',
    margin: 0,
    fontWeight: 400
  },

  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem'
  },

  navLink: {
    color: '#6b7280',
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: '0.95rem',
    transition: 'all 0.3s ease',
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem'
  },

  ctaButton: {
    background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
    color: 'white',
    padding: '0.75rem 1.5rem',
    borderRadius: '50px',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '0.875rem',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)',
    border: 'none',
    cursor: 'pointer'
  }
}

export const heroStyles = {
  section: {
    padding: '8rem 1.5rem',
    textAlign: 'center',
    position: 'relative',
    minHeight: '90vh',
    display: 'flex',
    alignItems: 'center',
    background: `
      linear-gradient(rgba(248, 250, 252, 0.7), rgba(224, 242, 254, 0.7)),
      url("/VOXHero.webp")
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  },

  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%'
  },

  title: {
    fontSize: 'clamp(3rem, 8vw, 6rem)',
    fontWeight: 900,
    color: '#111827',
    marginBottom: '2rem',
    lineHeight: 1.1,
    fontFamily: '"Oswald", sans-serif',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  },

  gradient: {
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },

  subtitle: {
    fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
    color: '#374151',
    marginBottom: '3rem',
    maxWidth: '60rem',
    margin: '0 auto 3rem auto',
    lineHeight: 1.7,
    fontWeight: 400
  },

  buttonContainer: {
    display: 'flex',
    gap: '1.5rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '2rem'
  },

  primaryButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.75rem',
    background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
    color: 'white',
    padding: '1.2rem 2.5rem',
    borderRadius: '50px',
    textDecoration: 'none',
    fontWeight: 700,
    fontSize: '1.125rem',
    transition: 'all 0.3s ease',
    boxShadow: '0 15px 35px rgba(59, 130, 246, 0.4)',
    border: 'none',
    cursor: 'pointer',
    fontFamily: '"Oswald", sans-serif'
  },

  secondaryButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.75rem',
    background: 'rgba(255, 255, 255, 0.9)',
    color: '#374151',
    padding: '1.2rem 2.5rem',
    borderRadius: '50px',
    border: '2px solid rgba(59, 130, 246, 0.2)',
    fontWeight: 600,
    fontSize: '1.125rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    fontFamily: '"Oswald", sans-serif'
  }
}

export const sectionStyles = {
  stats: {
    padding: '5rem 1.5rem',
    background: `
      linear-gradient(135deg, 
        rgba(255, 255, 255, 0.8) 0%, 
        rgba(248, 250, 252, 0.9) 100%
      )
    `,
    backdropFilter: 'blur(20px)',
    borderTop: '1px solid rgba(255, 255, 255, 0.3)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.3)'
  },

  mission: {
    padding: '8rem 1.5rem',
    background: `
      linear-gradient(135deg, 
        rgba(239, 246, 255, 0.6) 0%, 
        rgba(248, 250, 252, 0.8) 50%,
        rgba(240, 249, 255, 0.6) 100%
      )
    `
  },

  services: {
    padding: '8rem 1.5rem',
    background: `
      linear-gradient(135deg, 
        rgba(255, 255, 255, 0.4) 0%, 
        rgba(248, 250, 252, 0.6) 100%
      )
    `,
    backdropFilter: 'blur(10px)'
  },

  testimonials: {
    padding: '8rem 1.5rem',
    background: `
      linear-gradient(135deg, 
        rgba(239, 246, 255, 0.5) 0%, 
        rgba(255, 255, 255, 0.7) 100%
      )
    `
  },

  cta: {
    padding: '8rem 1.5rem',
    textAlign: 'center',
    background: `
      linear-gradient(135deg, 
        rgba(59, 130, 246, 0.05) 0%, 
        rgba(139, 92, 246, 0.03) 50%,
        rgba(16, 185, 129, 0.05) 100%
      )
    `
  }
}

export const cardStyles = {
  service: {
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(20px)',
    borderRadius: '1.5rem',
    padding: '2.5rem',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    height: '100%'
  },

  testimonial: {
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    borderRadius: '1.5rem',
    padding: '2.5rem',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    height: '100%'
  },

  organization: {
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(20px)',
    borderRadius: '1.5rem',
    padding: '3rem',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)'
  }
}

export const gridStyles = {
  responsive: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem',
    alignItems: 'stretch'
  },

  services: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
    gap: '2.5rem',
    alignItems: 'stretch'
  },

  stats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '3rem',
    textAlign: 'center'
  },

  organizations: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4rem'
  }
}

export const textStyles = {
  sectionTitle: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: 800,
    color: '#111827',
    marginBottom: '1.5rem',
    fontFamily: '"Oswald", sans-serif',
    textAlign: 'center'
  },

  sectionSubtitle: {
    fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
    color: '#6b7280',
    maxWidth: '50rem',
    margin: '0 auto',
    lineHeight: 1.6,
    textAlign: 'center'
  },

  cardTitle: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#111827',
    marginBottom: '1rem',
    fontFamily: '"Oswald", sans-serif'
  }
}

export const containerStyles = {
  main: {
    maxWidth: '1200px',
    margin: '0 auto'
  },

  narrow: {
    maxWidth: '800px',
    margin: '0 auto'
  },

  wide: {
    maxWidth: '1400px',
    margin: '0 auto'
  }
}
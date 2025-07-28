// components/landing/Navigation.jsx
import { Heart, Menu, X, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Navigation({ showBackButton = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav style={{
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '4rem'
        }}>
          {/* Logo */}
          <Link href="/" style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(0.5rem, 2vw, 0.75rem)',
            textDecoration: 'none'
          }}>
            <div style={{
              width: 'clamp(2rem, 4vw, 2.5rem)',
              height: 'clamp(2rem, 4vw, 2.5rem)',
              background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
              borderRadius: 'clamp(0.5rem, 1.5vw, 0.75rem)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 25px rgba(59, 130, 246, 0.3)',
              flexShrink: 0
            }}>
              <Heart style={{ 
                width: 'clamp(1rem, 2.5vw, 1.25rem)', 
                height: 'clamp(1rem, 2.5vw, 1.25rem)', 
                color: 'white' 
              }} />
            </div>
            <div>
              <h1 style={{
                fontWeight: 800,
                fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                color: '#111827',
                margin: 0,
                fontFamily: '"Oswald", sans-serif',
                lineHeight: 1.2
              }}>
                Our Family Support Hub
              </h1>
              <p style={{
                fontSize: 'clamp(0.6rem, 1.5vw, 0.65rem)',
                color: '#6b7280',
                margin: 0,
                fontWeight: 400,
                display: 'none',
                lineHeight: 1.3
              }} className="tagline">
                Breaking the cycle of poverty through comprehensive family support
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div style={{
            display: 'none',
            alignItems: 'center',
            gap: 'clamp(1rem, 3vw, 2rem)'
          }} className="desktop-nav">
            {!showBackButton ? (
              <>
                <Link
                  href="#services"
                  style={{
                    color: '#6b7280',
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                    transition: 'all 0.3s ease',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#3b82f6'
                    e.target.style.backgroundColor = 'rgba(59, 130, 246, 0.1)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#6b7280'
                    e.target.style.backgroundColor = 'transparent'
                  }}
                >
                  Services
                </Link>
                <Link
                  href="#mission"
                  style={{
                    color: '#6b7280',
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                    transition: 'all 0.3s ease',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#3b82f6'
                    e.target.style.backgroundColor = 'rgba(59, 130, 246, 0.1)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#6b7280'
                    e.target.style.backgroundColor = 'transparent'
                  }}
                >
                  Our Mission
                </Link>
                <Link
                  href="/signup"
                  style={{
                    background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                    color: 'white',
                    padding: 'clamp(0.6rem, 1.5vw, 0.75rem) clamp(1rem, 3vw, 1.5rem)',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: 'clamp(0.8rem, 2vw, 0.875rem)',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)',
                    whiteSpace: 'nowrap'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)'
                    e.target.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.5)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)'
                    e.target.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.4)'
                  }}
                >
                  Get Support Now
                </Link>
              </>
            ) : (
              <Link 
                href="/"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#6b7280',
                  textDecoration: 'none',
                  fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                  fontWeight: 500,
                  transition: 'color 0.3s ease',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#3b82f6'
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#6b7280'
                }}
              >
                <ArrowLeft style={{ width: '1rem', height: '1rem' }} />
                <span>Back to Home</span>
              </Link>
            )}
          </div>

          {/* Mobile Navigation */}
          <div style={{ display: 'block' }} className="mobile-nav">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.5rem',
                color: '#6b7280',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {isMenuOpen ? (
                <X style={{ width: '1.5rem', height: '1.5rem' }} />
              ) : (
                <Menu style={{ width: '1.5rem', height: '1.5rem' }} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderTop: 'none',
            borderRadius: '0 0 1rem 1rem',
            padding: '1rem',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
            zIndex: 100
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              {!showBackButton ? (
                <>
                  <Link
                    href="#services"
                    onClick={() => setIsMenuOpen(false)}
                    style={{
                      color: '#6b7280',
                      textDecoration: 'none',
                      fontWeight: 500,
                      fontSize: '1rem',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.5rem',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Services
                  </Link>
                  <Link
                    href="#mission"
                    onClick={() => setIsMenuOpen(false)}
                    style={{
                      color: '#6b7280',
                      textDecoration: 'none',
                      fontWeight: 500,
                      fontSize: '1rem',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.5rem',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Our Mission
                  </Link>
                  <Link
                    href="/signup"
                    onClick={() => setIsMenuOpen(false)}
                    style={{
                      background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                      color: 'white',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '50px',
                      textDecoration: 'none',
                      fontWeight: 600,
                      fontSize: '1rem',
                      textAlign: 'center',
                      boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)'
                    }}
                  >
                    Get Support Now
                  </Link>
                </>
              ) : (
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#6b7280',
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontSize: '1rem',
                    padding: '0.75rem 1rem',
                    borderRadius: '0.5rem',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <ArrowLeft style={{ width: '1rem', height: '1rem' }} />
                  <span>Back to Home</span>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-nav {
            display: none !important;
          }
          .tagline {
            display: block !important;
          }
        }

        @media (min-width: 1024px) {
          h1 {
            font-size: 1.5rem !important;
          }
          .tagline {
            font-size: 0.75rem !important;
          }
        }
      `}</style>
    </nav>
  )
}
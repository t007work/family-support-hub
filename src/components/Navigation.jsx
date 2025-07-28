// components/Navigation.jsx
import { Heart, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { navStyle } from '../styles/signupStyles'

export default function Navigation() {
  return (
    <nav style={navStyle}>
      <div style={{
        maxWidth: '80rem',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '4rem'
        }}>
          <Link href="/" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            textDecoration: 'none'
          }}>
            <div style={{
              width: '2rem',
              height: '2rem',
              background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
              borderRadius: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Heart style={{ width: '1.25rem', height: '1.25rem', color: 'white' }} />
            </div>
            <span style={{
              fontWeight: 700,
              fontSize: '1.25rem',
              color: '#111827'
            }}>
              Family Support Hub
            </span>
          </Link>
          
          <Link 
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#6b7280',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
          >
            <ArrowLeft style={{ width: '1rem', height: '1rem' }} />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}
// components/ConfirmationPage.jsx
import { motion } from 'framer-motion'
import { CheckCircle, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { confirmationAnimations } from '../constants/animations'
import { confirmationStyle, pageStyle } from '../styles/signupStyles'
import { formatServiceName } from '../utils/formUtils'

export default function ConfirmationPage({ formData, countdown }) {
  return (
    <div style={{
      ...pageStyle,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    }}>
      <motion.div 
        style={confirmationStyle}
        {...confirmationAnimations.container}
      >
        <motion.div 
          style={{
            width: '5rem',
            height: '5rem',
            background: 'linear-gradient(135deg, #10b981, #059669)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 2rem auto'
          }}
          {...confirmationAnimations.icon}
        >
          <CheckCircle style={{ width: '2.5rem', height: '2.5rem', color: 'white' }} />
        </motion.div>
        
        <motion.h1 
          style={{
            fontSize: '2.25rem',
            fontWeight: 700,
            color: '#111827',
            marginBottom: '1.5rem'
          }}
          {...confirmationAnimations.title}
        >
          Application Submitted Successfully!
        </motion.h1>
        
        <motion.p 
          style={{
            fontSize: '1rem',
            color: '#374151',
            marginBottom: '1.5rem',
            lineHeight: 1.6
          }}
          {...confirmationAnimations.text}
        >
          Our team will review your application and contact you within{' '}
          <strong>3-5 working days</strong>. We'll discuss your selected services 
          and schedule an initial consultation.
        </motion.p>

        {formData.services.length > 0 && (
          <motion.div
            style={{
              background: '#fef3c7',
              borderRadius: '0.75rem',
              padding: '1rem',
              marginBottom: '2rem',
              border: '1px solid #fbbf24'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <p style={{
              fontSize: '0.875rem',
              color: '#92400e',
              marginBottom: '0.5rem'
            }}>
              <strong>Services you requested:</strong>
            </p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              justifyContent: 'center'
            }}>
              {formData.services.map((service, index) => (
                <span 
                  key={index}
                  style={{
                    background: '#fbbf24',
                    color: '#92400e',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: 500
                  }}
                >
                  {formatServiceName(service)}
                </span>
              ))}
            </div>
          </motion.div>
        )}
        
        <motion.div
          style={{
            background: '#f3f4f6',
            borderRadius: '0.75rem',
            padding: '1rem',
            marginBottom: '2rem'
          }}
          {...confirmationAnimations.countdown}
        >
          <p style={{
            fontSize: '0.875rem',
            color: '#6b7280',
            marginBottom: '0.5rem'
          }}>
            Redirecting to homepage in:
          </p>
          <div style={{
            fontSize: '2rem',
            fontWeight: 700,
            color: '#2563eb'
          }}>
            {countdown}
          </div>
        </motion.div>
        
        <motion.div {...confirmationAnimations.button}>
          <Link 
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'linear-gradient(135deg, #2563eb, #6366f1)',
              color: 'white',
              padding: '0.75rem 2rem',
              borderRadius: '9999px',
              fontWeight: 600,
              fontSize: '1rem',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 15px -3px rgba(37, 99, 235, 0.3)'
            }}
          >
            <ArrowLeft style={{ width: '1rem', height: '1rem' }} />
            <span>Return to Home Now</span>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
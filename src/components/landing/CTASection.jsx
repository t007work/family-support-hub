// components/landing/CTASection.jsx
import { motion } from 'framer-motion'
import { Shield, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { sectionStyles, containerStyles, textStyles, heroStyles } from '../../styles/landingStyles'

export default function CTASection() {
  return (
    <section style={sectionStyles.cta}>
      <div style={containerStyles.narrow}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 style={{
            ...textStyles.sectionTitle,
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            marginBottom: '2rem'
          }}>
            Ready to Break the Cycle?
          </h2>
          
          <p style={{
            fontSize: '1.3rem',
            color: '#6b7280',
            marginBottom: '3rem',
            lineHeight: 1.7,
            textAlign: 'center'
          }}>
            Take the first step towards transforming your family's future. 
            Our comprehensive support services are designed to help you overcome challenges 
            and build lasting stability for your children.
          </p>

          <motion.div
            style={{
              background: 'rgba(59, 130, 246, 0.1)',
              borderRadius: '1.5rem',
              padding: '2.5rem',
              marginBottom: '3rem',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              backdropFilter: 'blur(10px)'
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '1.5rem'
            }}>
              <Shield style={{ width: '1.75rem', height: '1.75rem', color: '#3b82f6' }} />
              <span style={{
                fontSize: '1.3rem',
                fontWeight: 700,
                color: '#3b82f6',
                fontFamily: '"Oswald", sans-serif'
              }}>
                100% Confidential & Judgment-Free
              </span>
            </div>
            <p style={{
              color: '#6b7280',
              margin: 0,
              fontSize: '1.1rem',
              lineHeight: 1.6,
              textAlign: 'center'
            }}>
              All your information is kept strictly confidential. We believe every family deserves 
              support without stigma or judgment. You are not alone in this journey.
            </p>
          </motion.div>

          <motion.div
            style={{ textAlign: 'center' }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/signup"
              style={{
                ...heroStyles.primaryButton,
                fontSize: '1.3rem',
                padding: '1.5rem 3rem'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px) scale(1.02)'
                e.target.style.boxShadow = '0 20px 40px rgba(59, 130, 246, 0.5)'
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)'
                e.target.style.boxShadow = '0 15px 35px rgba(59, 130, 246, 0.4)'
              }}
            >
              <span>Start Your Application Today</span>
              <ArrowRight style={{ width: '1.5rem', height: '1.5rem' }} />
            </Link>
          </motion.div>

          <p style={{
            fontSize: '0.95rem',
            color: '#9ca3af',
            marginTop: '2rem',
            textAlign: 'center',
            fontWeight: 500
          }}>
            Application takes 5-10 minutes • Free consultation included • No obligation
          </p>
        </motion.div>
      </div>
    </section>
  )
}
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navigation from '../../components/landing/Navigation'
import ConfirmationPage from '../../components/ConfirmationPage'
import { 
  PersonalInfoSection, 
  HouseholdInfoSection, 
  FinancialInfoSection, 
  AddressInfoSection, 
  ServicesSection 
} from '../../components/FormSections'
import { pageStyle, formContainerStyle, buttonStyle } from '../../styles/signupStyles'
import { fadeInUp, staggerContainer, formAnimations } from '../../constants/animations'
import { initialFormData, requiredFields } from '../../constants/formData'
import { calculateAge, validateForm } from '../../utils/formUtils'

export default function SignUpPage() {
  const [formData, setFormData] = useState(initialFormData)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [countdown, setCountdown] = useState(10)

  // Countdown timer effect
  useEffect(() => {
    if (showConfirmation && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
      return () => clearTimeout(timer)
    } else if (showConfirmation && countdown === 0) {
      window.location.href = '/'
    }
  }, [showConfirmation, countdown])

  // Auto-calculate age from date of birth
  useEffect(() => {
    if (formData.dob) {
      const age = calculateAge(formData.dob)
      setFormData(prev => ({ ...prev, age }))
    }
  }, [formData.dob])

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target

    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        services: checked 
          ? [...prev.services, value]
          : prev.services.filter(service => service !== value)
      }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    const validation = validateForm(formData, requiredFields)
    if (!validation.isValid) {
      alert(validation.message)
      setIsLoading(false)
      return
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsLoading(false)
    setShowConfirmation(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (showConfirmation) {
    return <ConfirmationPage formData={formData} countdown={countdown} />
  }

  return (
    <>
      {/* Import Inter Font & Global Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: #ffffff;
          min-height: 100vh;
        }

        html {
          scroll-behavior: smooth;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      <div style={{
        ...pageStyle,
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
      }}>
        <Navigation showBackButton={true} />

        {/* Main Content */}
        <div style={{
          maxWidth: '64rem',
          margin: '0 auto',
          padding: '3rem 1rem'
        }}>
          <motion.div 
            style={{ textAlign: 'center', marginBottom: '3rem' }}
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.h1 
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 3rem)',
                fontWeight: 700,
                color: '#111827',
                marginBottom: '1rem',
                fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
              }}
              variants={fadeInUp}
            >
              Join Our Support Network
            </motion.h1>
            <motion.p 
              style={{
                fontSize: '1.25rem',
                color: '#6b7280',
                marginBottom: '0.5rem',
                fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
              }}
              variants={fadeInUp}
            >
              You&apos;re not alone. Let us help support your family&apos;s journey.
            </motion.p>
            <motion.p 
              style={{ 
                color: '#9ca3af',
                fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
              }}
              variants={fadeInUp}
            >
              All information is kept confidential and secure
            </motion.p>
          </motion.div>

          <motion.div 
            style={formContainerStyle}
            {...formAnimations.container}
          >
            <form onSubmit={handleSubmit} style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '2.5rem' 
            }}>
              
              <PersonalInfoSection 
                formData={formData} 
                handleInputChange={handleInputChange} 
              />
              
              <HouseholdInfoSection 
                formData={formData} 
                handleInputChange={handleInputChange} 
              />
              
              <FinancialInfoSection 
                formData={formData} 
                handleInputChange={handleInputChange} 
              />
              
              <AddressInfoSection 
                formData={formData} 
                handleInputChange={handleInputChange} 
              />
              
              <ServicesSection 
                formData={formData} 
                handleInputChange={handleInputChange} 
              />

              {/* Submit Button */}
              <div style={{ paddingTop: '2rem' }}>
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  style={{
                    ...buttonStyle,
                    cursor: isLoading ? 'not-allowed' : 'pointer',
                    opacity: isLoading ? 0.5 : 1,
                    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
                  }}
                  {...(!isLoading ? formAnimations.button : {})}
                >
                  {isLoading ? (
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem'
                    }}>
                      <div style={{
                        width: '1.25rem',
                        height: '1.25rem',
                        border: '2px solid rgba(255, 255, 255, 0.3)',
                        borderTop: '2px solid white',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite'
                      }}></div>
                      <span>Submitting Application...</span>
                    </div>
                  ) : (
                    'Submit Application'
                  )}
                </motion.button>

                <p style={{
                  textAlign: 'center',
                  fontSize: '0.875rem',
                  color: '#6b7280',
                  marginTop: '1rem',
                  fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
                }}>
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  )
}

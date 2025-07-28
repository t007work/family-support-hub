// components/landing/HeroSection.jsx
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { heroStyles } from '../../styles/landingStyles'
import { fadeInUp, staggerContainer } from '../../constants/animations'

export default function HeroSection() {
  return (
    <section style={heroStyles.section}>
      <div style={heroStyles.container}>
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h1
            style={heroStyles.title}
            variants={fadeInUp}
          >
            Breaking the Cycle of
            <br />
            <span style={heroStyles.gradient}>
              Intergenerational Poverty
            </span>
          </motion.h1>

          <motion.p
            style={heroStyles.subtitle}
            variants={fadeInUp}
          >
            When families are trapped in cycles of poverty, children suffer the most. 
            We provide comprehensive support to break these cycles and give every child 
            the opportunity to thrive, regardless of their family's circumstances.
          </motion.p>

          <motion.div
            style={heroStyles.buttonContainer}
            variants={fadeInUp}
          >
            <Link
              href="/signup"
              style={heroStyles.primaryButton}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px) scale(1.02)'
                e.target.style.boxShadow = '0 20px 40px rgba(59, 130, 246, 0.5)'
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)'
                e.target.style.boxShadow = '0 15px 35px rgba(59, 130, 246, 0.4)'
              }}
            >
              <span>Apply for Support</span>
              <ArrowRight style={{ width: '1.25rem', height: '1.25rem' }} />
            </Link>

            <button
              onClick={() => document.getElementById('mission').scrollIntoView({ behavior: 'smooth' })}
              style={heroStyles.secondaryButton}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)'
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 1)'
                e.target.style.borderColor = '#3b82f6'
                e.target.style.color = '#3b82f6'
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)'
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'
                e.target.style.borderColor = 'rgba(59, 130, 246, 0.2)'
                e.target.style.color = '#374151'
              }}
            >
              <span>Learn About Our Mission</span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
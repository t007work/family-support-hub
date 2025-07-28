// components/landing/StatsSection.jsx
import { motion } from 'framer-motion'
import { sectionStyles, containerStyles, gridStyles } from '../../styles/landingStyles'

const stats = [
  { number: "3,200+", label: "Families Supported" },
  { number: "18,500+", label: "Children Helped" },
  { number: "95%", label: "Job Placement Success" },
  { number: "24/7", label: "Emergency Support" }
]

export default function StatsSection() {
  return (
    <section style={sectionStyles.stats}>
      <div style={containerStyles.main}>
        <div style={gridStyles.stats}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div 
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  fontWeight: 900,
                  color: '#3b82f6',
                  marginBottom: '0.5rem',
                  fontFamily: '"Oswald", sans-serif'
                }}
                whileInView={{ scale: [0.8, 1.1, 1] }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>
              <div style={{
                fontSize: '1.125rem',
                color: '#6b7280',
                fontWeight: 600,
                fontFamily: '"Oswald", sans-serif'
              }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
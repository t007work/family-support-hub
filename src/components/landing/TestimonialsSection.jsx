// components/landing/TestimonialsSection.jsx
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { 
  sectionStyles, containerStyles, gridStyles, 
  cardStyles, textStyles 
} from '../../styles/landingStyles'

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Single Mother of 2",
    service: "After School Care & Job Placement",
    content: "The after-school program was a lifesaver. My children were safe, fed, and getting homework help while I worked. When I lost my job, they helped me find flexible work that fits around school hours. We went from struggling to thriving.",
    rating: 5
  },
  {
    name: "Ahmad Rahman", 
    role: "Father of 3",
    service: "Financial Assistance & Budgeting",
    content: "When we faced eviction, Our Family Support Hub provided emergency financial assistance and taught us budgeting skills. Their financial literacy program helped us become debt-free and save for our children's future.",
    rating: 5
  },
  {
    name: "Maria Santos",
    role: "Working Mother",
    service: "Mental Health & Anti-Bullying Support",
    content: "My daughter was being bullied at school and lost all confidence. The anti-bullying workshops and confidence-building programs transformed her. She's now a happy, confident child who loves going to school.",
    rating: 5
  },
  {
    name: "Jennifer Lim",
    role: "Single Parent",
    service: "Childcare & Educational Support",
    content: "The free childcare allowed me to attend job interviews without worry. My son received tutoring that improved his grades dramatically. The staff treated us like family, not charity cases.",
    rating: 5
  },
  {
    name: "David Tan",
    role: "Widowed Father of 2",
    service: "Emergency Support & Parenting Programs",
    content: "After my wife passed away, I was lost trying to raise two young children alone. The 24/7 emergency support helped during crisis moments, and the parenting workshops gave me confidence and practical skills.",
    rating: 5
  }
]

const cardHover = {
  whileHover: { 
    scale: 1.02, 
    y: -8,
    transition: { duration: 0.3 } 
  }
}

export default function TestimonialsSection() {
  return (
    <section 
      style={{
        padding: 'clamp(4rem, 8vw, 8rem) 1rem',
        background: `
          linear-gradient(135deg, 
            rgba(239, 246, 255, 0.5) 0%, 
            rgba(255, 255, 255, 0.7) 100%
          )
        `
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <motion.div
          style={{ 
            textAlign: 'center', 
            marginBottom: 'clamp(3rem, 6vw, 5rem)' 
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            fontWeight: 800,
            color: '#111827',
            marginBottom: '1.5rem',
            fontFamily: '"Oswald", sans-serif',
            textAlign: 'center'
          }}>
            Lives Transformed, Cycles Broken
          </h2>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.35rem)',
            color: '#6b7280',
            maxWidth: '70rem',
            margin: '0 auto',
            lineHeight: 1.6,
            textAlign: 'center'
          }}>
            Real families sharing how our services helped them break free from poverty cycles
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(300px, 40vw, 350px), 1fr))',
          gap: 'clamp(1.5rem, 4vw, 2rem)',
          alignItems: 'stretch'
        }}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(20px)',
                borderRadius: 'clamp(1rem, 2vw, 1.5rem)',
                padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                height: '100%'
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              {...cardHover}
            >
              <div style={{
                display: 'flex',
                gap: '0.25rem',
                marginBottom: 'clamp(1rem, 2vw, 1.5rem)'
              }}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    style={{ 
                      width: '1.25rem', 
                      height: '1.25rem', 
                      color: '#fbbf24',
                      fill: '#fbbf24'
                    }} 
                  />
                ))}
              </div>

              <div style={{
                background: 'linear-gradient(135deg, #eff6ff, #dbeafe)',
                borderRadius: 'clamp(0.5rem, 1vw, 0.75rem)',
                padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1rem, 2.5vw, 1.25rem)',
                marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
                border: '1px solid #bfdbfe'
              }}>
                <span style={{
                  fontSize: 'clamp(0.8rem, 1.8vw, 0.9rem)',
                  color: '#1e40af',
                  fontWeight: 600,
                  fontFamily: '"Oswald", sans-serif'
                }}>
                  Service: {testimonial.service}
                </span>
              </div>
              
              <p style={{
                fontSize: 'clamp(1rem, 2.2vw, 1.1rem)',
                color: '#374151',
                marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
                lineHeight: 1.7,
                fontStyle: 'italic'
              }}>
                "{testimonial.content}"
              </p>
              
              <div>
                <div style={{
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.2rem)',
                  fontWeight: 700,
                  color: '#111827',
                  marginBottom: 'clamp(0.25rem, 1vw, 0.5rem)',
                  fontFamily: '"Oswald", sans-serif'
                }}>
                  {testimonial.name}
                </div>
                <div style={{
                  fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                  color: '#6b7280',
                  fontWeight: 500
                }}>
                  {testimonial.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
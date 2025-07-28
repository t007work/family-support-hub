// components/landing/ServicesSection.jsx
import { motion } from 'framer-motion'
import { 
  Baby, Clock, GraduationCap, Brain, Briefcase, 
  DollarSign, UserCheck, AlertCircle 
} from 'lucide-react'
import { 
  sectionStyles, containerStyles, gridStyles, 
  cardStyles, textStyles 
} from '../../styles/landingStyles'

const services = [
  {
    icon: Baby,
    title: "Free Childcare & Daycare",
    description: "Safe, nurturing care for children ages 3-12 with qualified caregivers who understand the unique needs of vulnerable families",
    color: "linear-gradient(135deg, #3b82f6, #1d4ed8)"
  },
  {
    icon: Clock,
    title: "After School Care Programs",
    description: "Comprehensive after-school support until 7-8 PM including homework help, free nutritious meals, and engaging activities for working parents",
    color: "linear-gradient(135deg, #10b981, #059669)"
  },
  {
    icon: GraduationCap,
    title: "Educational Support & Tutoring",
    description: "One-on-one tutoring, homework assistance, school supplies, and educational resources to help children succeed academically",
    color: "linear-gradient(135deg, #8b5cf6, #7c3aed)"
  },
  {
    icon: Brain,
    title: "Mental Health & Wellbeing",
    description: "Professional counseling, therapy sessions, anti-bullying workshops, and confidence-building programs for children and families",
    color: "linear-gradient(135deg, #f59e0b, #d97706)"
  },
  {
    icon: Briefcase,
    title: "Job Placement Assistance",
    description: "Specialized job placement focused on flexible hours and family-friendly positions that accommodate single parents' schedules",
    color: "linear-gradient(135deg, #ef4444, #dc2626)"
  },
  {
    icon: DollarSign,
    title: "Financial Assistance & Guidance",
    description: "Direct financial aid, budgeting workshops, financial literacy education, and emergency assistance when families need it most",
    color: "linear-gradient(135deg, #6366f1, #4f46e5)"
  },
  {
    icon: UserCheck,
    title: "Parenting Support Programs",
    description: "Parent support groups, parenting workshops, skill development programs, and peer mentorship opportunities",
    color: "linear-gradient(135deg, #10b981, #059669)"
  },
  {
    icon: AlertCircle,
    title: "24/7 Emergency Support",
    description: "Round-the-clock crisis intervention, emergency childcare, and immediate assistance during family emergencies",
    color: "linear-gradient(135deg, #8b5cf6, #7c3aed)"
  }
]

const cardHover = {
  whileHover: { 
    scale: 1.03, 
    y: -8,
    transition: { duration: 0.3 } 
  }
}

export default function ServicesSection() {
  return (
    <section 
      id="services" 
      style={{
        padding: 'clamp(4rem, 8vw, 8rem) 1rem',
        background: `
          linear-gradient(135deg, 
            rgba(255, 255, 255, 0.4) 0%, 
            rgba(248, 250, 252, 0.6) 100%
          )
        `,
        backdropFilter: 'blur(10px)'
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
            Comprehensive Support Services
          </h2>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.35rem)',
            color: '#6b7280',
            maxWidth: '70rem',
            margin: '0 auto',
            lineHeight: 1.6,
            textAlign: 'center'
          }}>
            Targeted interventions designed to address the root causes of intergenerational poverty
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 40vw, 380px), 1fr))',
          gap: 'clamp(1.5rem, 4vw, 2.5rem)',
          alignItems: 'stretch'
        }}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(20px)',
                borderRadius: 'clamp(1rem, 2vw, 1.5rem)',
                padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                textAlign: 'center',
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
              <motion.div 
                style={{
                  width: 'clamp(3.5rem, 8vw, 4.5rem)',
                  height: 'clamp(3.5rem, 8vw, 4.5rem)',
                  background: service.color,
                  borderRadius: 'clamp(0.75rem, 2vw, 1.25rem)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
                  margin: '0 auto clamp(1rem, 2vw, 1.5rem) auto'
                }}
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <service.icon style={{ 
                  width: 'clamp(1.75rem, 4vw, 2.25rem)', 
                  height: 'clamp(1.75rem, 4vw, 2.25rem)', 
                  color: 'white' 
                }} />
              </motion.div>
              
              <h3 style={{
                fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                fontWeight: 700,
                color: '#111827',
                marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
                fontFamily: '"Oswald", sans-serif'
              }}>
                {service.title}
              </h3>
              
              <p style={{
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                color: '#6b7280',
                lineHeight: 1.7,
                margin: 0
              }}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
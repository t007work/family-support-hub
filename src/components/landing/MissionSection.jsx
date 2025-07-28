// components/landing/MissionSection.jsx
import { motion } from 'framer-motion'

export default function MissionSection() {
  return (
    <section 
      id="mission" 
      style={{
        padding: 'clamp(4rem, 8vw, 8rem) 1rem',
        background: `
          linear-gradient(135deg, 
            rgba(239, 246, 255, 0.6) 0%, 
            rgba(248, 250, 252, 0.8) 50%,
            rgba(240, 249, 255, 0.6) 100%
          )
        `
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        {/* Section Header */}
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
            Our Collective Mission
          </h2>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.35rem)',
            color: '#6b7280',
            maxWidth: '70rem',
            margin: '0 auto',
            lineHeight: 1.6,
            textAlign: 'center'
          }}>
            <strong>Our Family Support Hub</strong> exists to break the devastating cycle of intergenerational poverty 
            that traps vulnerable families. We recognize that when parents struggle with unemployment, lack of education, 
            or insufficient support systems, their children often inherit these same challenges, perpetuating cycles 
            of disadvantage across generations.
          </p>
        </motion.div>

        {/* Organizations Container */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(3rem, 6vw, 5rem)',
          marginBottom: 'clamp(3rem, 6vw, 5rem)'
        }}>
          
          {/* VOX Children's Society */}
          <motion.div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 'clamp(2rem, 4vw, 3rem)',
              alignItems: 'center'
            }}
            className="organization-grid"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* VOX Content Card */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(20px)',
              borderRadius: 'clamp(1rem, 2vw, 1.5rem)',
              padding: 'clamp(1.5rem, 4vw, 3rem)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
              order: 1
            }}>
              <h3 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 700,
                color: '#111827',
                marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
                fontFamily: '"Oswald", sans-serif'
              }}>
                VOX @ Children's Society
              </h3>
              
              <p style={{
                fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                color: '#6b7280',
                lineHeight: 1.6,
                marginBottom: 'clamp(1.5rem, 3vw, 2rem)'
              }}>
                VOX @ Children's Society is a youth drop-in centre that serves youth aged between 13 and 18, 
                focusing on empowering youth voices and putting their aspirations at the centre of all discussions. 
                The centre uses the Positive Youth Development Framework, emphasizing the 5Cs: Caring, Character, 
                Competence, Confidence and Connection.
              </p>

              <div style={{
                background: 'linear-gradient(135deg, #eff6ff, #dbeafe)',
                borderRadius: 'clamp(0.5rem, 1vw, 1rem)',
                padding: 'clamp(1rem, 2vw, 1.5rem)',
                marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
                border: '1px solid #bfdbfe'
              }}>
                <h4 style={{
                  fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                  fontWeight: 600,
                  color: '#1e40af',
                  marginBottom: 'clamp(0.75rem, 1.5vw, 1rem)',
                  fontFamily: '"Oswald", sans-serif'
                }}>
                  Key Programs:
                </h4>
                <ul style={{
                  fontSize: 'clamp(0.8rem, 1.5vw, 0.95rem)',
                  color: '#1e40af',
                  margin: 0,
                  paddingLeft: 'clamp(1rem, 2vw, 1.5rem)',
                  lineHeight: 1.5
                }}>
                  <li style={{ marginBottom: '0.5rem' }}>Project Vantage - Youth-led interest groups and initiatives</li>
                  <li style={{ marginBottom: '0.5rem' }}>VOX Café - Skills development through simulated work experience</li>
                  <li style={{ marginBottom: '0.5rem' }}>Counselling and casework for youth with presenting issues</li>
                  <li>Community outreach and giving projects</li>
                </ul>
              </div>

              <p style={{
                fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)',
                color: '#6b7280',
                fontStyle: 'italic',
                margin: 0
              }}>
                In 2018, the centre engaged 396 youth members with an average of 548 visits each month, 
                providing a place where youth can gather, express themselves, be heard, and build friendships.
              </p>
            </div>

            {/* VOX Image */}
            <motion.div 
              style={{
                borderRadius: 'clamp(1rem, 2vw, 1.5rem)',
                overflow: 'hidden',
                minHeight: 'clamp(200px, 40vw, 350px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: 'url("/childrensociety.png")',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundColor: '#f8fafc',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
                order: 2
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* TOUCH Community Services */}
          <motion.div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 'clamp(2rem, 4vw, 3rem)',
              alignItems: 'center'
            }}
            className="organization-grid"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* TOUCH Image */}
            <motion.div 
              style={{
                borderRadius: 'clamp(1rem, 2vw, 1.5rem)',
                overflow: 'hidden',
                minHeight: 'clamp(200px, 40vw, 350px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: 'url("/touch.png")',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundColor: '#f8fafc',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
                order: 1
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />

            {/* TOUCH Content Card */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(20px)',
              borderRadius: 'clamp(1rem, 2vw, 1.5rem)',
              padding: 'clamp(1.5rem, 4vw, 3rem)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
              order: 2
            }}>
              <h3 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 700,
                color: '#111827',
                marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
                fontFamily: '"Oswald", sans-serif'
              }}>
                TOUCH Community Services
              </h3>
              
              <p style={{
                fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                color: '#6b7280',
                lineHeight: 1.6,
                marginBottom: 'clamp(1.5rem, 3vw, 2rem)'
              }}>
                Since 1992, TOUCH Community Services has served people of all ages, races and religions to see 
                sustainable change and transformation in their lives. Their Vision 2030 is to see Strong Families, 
                Caring Generations and Enabled Communities established in Singapore.
              </p>

              <div style={{
                background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
                borderRadius: 'clamp(0.5rem, 1vw, 1rem)',
                padding: 'clamp(1rem, 2vw, 1.5rem)',
                marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
                border: '1px solid #bbf7d0'
              }}>
                <h4 style={{
                  fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                  fontWeight: 600,
                  color: '#166534',
                  marginBottom: 'clamp(0.75rem, 1.5vw, 1rem)',
                  fontFamily: '"Oswald", sans-serif'
                }}>
                  Comprehensive Services:
                </h4>
                <ul style={{
                  fontSize: 'clamp(0.8rem, 1.5vw, 0.95rem)',
                  color: '#166534',
                  margin: 0,
                  paddingLeft: 'clamp(1rem, 2vw, 1.5rem)',
                  lineHeight: 1.5
                }}>
                  <li style={{ marginBottom: '0.5rem' }}>Integrated Family Group - Holistic family support programs</li>
                  <li style={{ marginBottom: '0.5rem' }}>Youth Services - Leadership development and cyber wellness</li>
                  <li style={{ marginBottom: '0.5rem' }}>Special Needs Group - Empowerment and independence programs</li>
                  <li style={{ marginBottom: '0.5rem' }}>Senior Services - Home care and Active Ageing Centres</li>
                  <li>Mental Wellness - Therapy and counselling services</li>
                </ul>
              </div>

              <p style={{
                fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)',
                color: '#6b7280',
                fontStyle: 'italic',
                margin: 0
              }}>
                TOUCH believes in the worth and potential of every child, youth at-risk, family in need, caregiver, 
                senior and person with special needs to grow, participate and contribute in the community.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA Card */}
        <motion.div
          style={{
            background: 'linear-gradient(135deg, #eff6ff, #dbeafe)',
            borderRadius: 'clamp(1.25rem, 3vw, 2rem)',
            padding: 'clamp(2rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3rem)',
            textAlign: 'center',
            border: '1px solid #bfdbfe',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)'
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 800,
            color: '#1e40af',
            marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
            fontFamily: '"Oswald", sans-serif'
          }}>
            Together, We Break the Cycle
          </h3>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: '#1e40af',
            lineHeight: 1.7,
            maxWidth: '60rem',
            margin: '0 auto'
          }}>
            By addressing the root causes of poverty through comprehensive family support, 
            quality childcare, educational assistance, job placement, and mental health services, 
            we ensure that children have the stable foundation they need to succeed. 
            <strong> Our goal is simple: every child deserves the opportunity to break free 
            from the circumstances they were born into and build a brighter future.</strong>
          </p>
        </motion.div>
      </div>

      {/* Mobile-specific styles */}
      <style jsx>{`
        @media (min-width: 768px) {
          .organization-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          
          .organization-grid:nth-child(2) > div:first-child {
            order: 1;
          }
          
          .organization-grid:nth-child(2) > div:last-child {
            order: 2;
          }
          
          .organization-grid:nth-child(3) > div:first-child {
            order: 2;
          }
          
          .organization-grid:nth-child(3) > div:last-child {
            order: 1;
          }
        }
        
        @media (max-width: 767px) {
          .organization-grid > div {
            order: unset !important;
          }
        }
      `}</style>
    </section>
  )
}
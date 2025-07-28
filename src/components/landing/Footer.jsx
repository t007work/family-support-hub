// components/landing/Footer.jsx
import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{
      background: `
        linear-gradient(135deg, 
          rgba(17, 24, 39, 0.95) 0%, 
          rgba(31, 41, 55, 0.95) 100%
        )
      `,
      backdropFilter: 'blur(10px)',
      color: 'white',
      padding: '4rem 1.5rem 2.5rem 1.5rem',
      fontFamily: '"Oswald", sans-serif'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{
                width: '2.5rem',
                height: '2.5rem',
                background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                borderRadius: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Heart style={{ width: '1.25rem', height: '1.25rem', color: 'white' }} />
              </div>
              <span style={{
                fontWeight: 700,
                fontSize: '1.4rem'
              }}>
                Our Family Support Hub
              </span>
            </div>
            <p style={{
              color: '#d1d5db',
              lineHeight: 1.7,
              fontSize: '1rem',
              margin: 0
            }}>
              Breaking the cycle of intergenerational poverty through comprehensive family support, 
              one family at a time. Together, we build stronger communities and brighter futures for our children.
            </p>
          </div>

          <div>
            <h3 style={{
              fontWeight: 700,
              marginBottom: '1.5rem',
              fontSize: '1.2rem'
            }}>
              Core Services
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}>
              <span style={{ color: '#d1d5db', fontSize: '0.95rem' }}>• Free Childcare & After-School Programs</span>
              <span style={{ color: '#d1d5db', fontSize: '0.95rem' }}>• Job Placement & Career Support</span>
              <span style={{ color: '#d1d5db', fontSize: '0.95rem' }}>• Mental Health & Anti-Bullying Programs</span>
              <span style={{ color: '#d1d5db', fontSize: '0.95rem' }}>• Financial Assistance & Education</span>
              <span style={{ color: '#d1d5db', fontSize: '0.95rem' }}>• Educational Support & Tutoring</span>
              <span style={{ color: '#d1d5db', fontSize: '0.95rem' }}>• 24/7 Emergency Support</span>
            </div>
          </div>

          <div>
            <h3 style={{
              fontWeight: 700,
              marginBottom: '1.5rem',
              fontSize: '1.2rem'
            }}>
              Our Divisions
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              <div>
                <div style={{ color: '#f3f4f6', fontWeight: 600, fontSize: '1rem' }}>VOX Children's Society</div>
                <div style={{ color: '#d1d5db', fontSize: '0.9rem' }}>Child advocacy & protection services</div>
              </div>
              <div>
                <div style={{ color: '#f3f4f6', fontWeight: 600, fontSize: '1rem' }}>TOUCH Community Services</div>
                <div style={{ color: '#d1d5db', fontSize: '0.9rem' }}>Community outreach & partnerships</div>
              </div>
            </div>
            
            <h4 style={{
              fontWeight: 600,
              marginBottom: '1rem',
              fontSize: '1rem'
            }}>
              Contact Information
            </h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              color: '#d1d5db',
              fontSize: '0.9rem'
            }}>
              <span>📧 support@ourfamilysupporthub.sg</span>
              <span>📞 +65 6123 4567 (24/7 Emergency)</span>
              <span>🏢 123 Community Street, Singapore 123456</span>
              <span>⏰ Mon-Fri: 7AM-8PM, Sat-Sun: 9AM-6PM</span>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '2.5rem',
          textAlign: 'center',
          color: '#d1d5db'
        }}>
          <p style={{ 
            margin: '0 0 1.5rem 0',
            fontSize: '0.95rem'
          }}>
            © 2025 Our Family Support Hub. All rights reserved. | Privacy Policy | Terms of Service
          </p>
          <p style={{ 
            margin: 0, 
            fontSize: '1rem',
            fontStyle: 'italic',
            color: '#3b82f6',
            fontWeight: 500
          }}>
            <em>"Every child deserves the opportunity to break free from the circumstances they were born into."</em>
          </p>
        </div>
      </div>
    </footer>
  )
}
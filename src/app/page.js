'use client'

import Navigation from '../components/landing/Navigation'
import HeroSection from '../components/landing/HeroSection'
import StatsSection from '../components/landing/StatsSection'
import MissionSection from '../components/landing/MissionSection'
import ServicesSection from '../components/landing/ServicesSection'
import TestimonialsSection from '../components/landing/TestimonialsSection'
import CTASection from '../components/landing/CTASection'
import Footer from '../components/landing/Footer'
import { motion } from 'framer-motion'

export default function LandingPage() {
  return (
    <>
      {/* Import Oswald Font & Global Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700;800;900&display=swap');

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
          font-family: 'Oswald', sans-serif;
          background: #ffffff;
          min-height: 100vh;
        }

        html {
          scroll-behavior: smooth;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 640px) {
          .hero-buttons {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }

          .hero-buttons > * {
            width: 100%;
            max-width: 280px;
            justify-content: center;
          }
        }

        .grid-responsive {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          align-items: stretch;
        }

        @media (min-width: 640px) {
          .grid-responsive {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
          }
        }

        .grid-services {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          align-items: stretch;
        }

        @media (min-width: 640px) {
          .grid-services {
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 2rem;
          }
        }

        @media (min-width: 1024px) {
          .grid-services {
            grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
            gap: 2.5rem;
          }
        }

        .grid-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          text-align: center;
        }

        @media (min-width: 768px) {
          .grid-stats {
            grid-template-columns: repeat(4, 1fr);
            gap: 3rem;
          }
        }

        .organization-card {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          align-items: center;
        }

        @media (min-width: 768px) {
          .organization-card {
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            gap: 3rem;
          }
        }

        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-top: none;
          border-radius: 0 0 1rem 1rem;
          padding: 1rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          z-index: 100;
        }

        .hero-bg {
          background-attachment: scroll;
        }

        @media (min-width: 768px) {
          .hero-bg {
            background-attachment: fixed;
          }
        }

        .photo-gallery-bg {
          background-attachment: scroll;
        }

        @media (min-width: 768px) {
          .photo-gallery-bg {
            background-attachment: fixed;
          }
        }

        .section-white {
          background: #ffffff;
        }

        .section-light-gray {
          background: #f8fafc;
        }

        .section-lighter-gray {
          background: #f1f5f9;
        }
      `}</style>

      <div style={{
        minHeight: '100vh',
        fontFamily: '"Oswald", sans-serif',
        position: 'relative'
      }}>
        <div className="section-white">
          <Navigation />
        </div>

        <div className="section-light-gray">
          <HeroSection />
        </div>

        <div className="section-white">
          <StatsSection />
        </div>

        <div className="section-lighter-gray">
          <MissionSection />
        </div>

        <section 
          className="photo-gallery-bg"
          style={{
            padding: '4rem 1rem',
            background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("/Vox2.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'scroll',
            color: 'white',
            textAlign: 'center',
            position: 'relative'
          }}
        >
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 2
          }}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 style={{
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                fontWeight: 800,
                marginBottom: '1.5rem',
                fontFamily: '"Oswald", sans-serif',
                textShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
                color: 'white'
              }}>
                A Safe Haven for Families
              </h2>
              <p style={{
                fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                opacity: 0.95,
                maxWidth: '50rem',
                margin: '0 auto',
                lineHeight: 1.6,
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
              }}>
                Our Family Support Hub is more than just a building – it&apos;s a warm, 
                welcoming space where families find hope, children discover their potential, 
                and communities come together to support one another.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="section-white">
          <ServicesSection />
        </div>

        <div className="section-light-gray">
          <TestimonialsSection />
        </div>

        <div className="section-lighter-gray">
          <CTASection />
        </div>

        <div style={{ background: '#1e293b' }}>
          <Footer />
        </div>
      </div>
    </>
  )
}

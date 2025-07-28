// src/app/layout.js
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Family Support Hub - Supporting Lower-Income Families',
  description: 'Free childcare, financial aid, and wellness support for lower-income families. A collaboration between TOUCH Community Services and VOX Children\'s Society.',
  keywords: 'family support, childcare, financial aid, wellness, TOUCH, VOX, Singapore',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
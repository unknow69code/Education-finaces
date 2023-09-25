import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import About from './pages/about/about'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Educacion Financiera',
  description: 'Education, finances, learnig finances',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <About />
        {children}
        </body>
        <Footer />
    </html>
  )
}

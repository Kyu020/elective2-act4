import { Inter } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aaron Jan - Portfolio',
  description: 'Full Stack Developer & Creative Problem Solver',
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AJ
              </Link>
              <div className="flex space-x-8">
                <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
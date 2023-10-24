import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/header/page'
import SidebarLeft from '@/components/sidebar-left/page'
import SidebarRight from '@/components/sidebar-right/page'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fotobook',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>

      </head>
      <body className={inter.className}>
        <main className='flex flex-col items-center  w-full overflow-hidden min-h-screen text-white bg-[#18191A] '>
          <Header theme='dark' />
          <div className='w-full h-full grid grid-cols-12 '>
            <SidebarLeft/>
            <div className='content col-span-6'>
              {children}
            </div>
            <SidebarRight/>
          </div>
        </main>
          
      </body>
    </html>
  )
}

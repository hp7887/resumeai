import { SessionProvider } from 'next-auth/react'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Toaster } from 'sonner'
import '../globals.css'

export const metadata: Metadata = {
  title: 'CareerMind - Free AI Resume Checker',
  description:
    'Get your resume score and feedback in seconds with our free AI-powered checker by CareerMind.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body>
        {/* SessionProvider теперь оборачивает все приложение */}
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster richColors position="top-center" />
            <div className="flex flex-col h-screen">
              <Header />
              <main className="main-scroller flex-grow">
                {children}
                <Footer />
              </main>
            </div>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  )
}

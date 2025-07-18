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
      </body>
    </html>
  )
}
// // src/app/(frontend)/layout.tsx (ИЗМЕНЕННАЯ ВЕРСИЯ)
// import React from 'react'
// import { GeistSans } from 'geist/font/sans'
// import { GeistMono } from 'geist/font/mono'
// // --- 1. ИМПОРТИРУЕМ SCRIPT ---
// import Script from 'next/script'
// import { ThemeProvider } from '@/components/theme-provider'
// import { SessionProvider } from 'next-auth/react'
// import { Toaster } from '@/components/ui/sonner'
// import { GuildProvider } from '@/context/GuildContext'
// import Navbar from '@/components/Navbar'
// import '../globals.css'

// export const metadata = {
//   title: 'discord.by',
//   description: 'Красивые ссылки для вашего Discord сервера',
// }

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html
//       lang="ru"
//       className={`${GeistSans.variable} ${GeistMono.variable}`}
//       suppressHydrationWarning
//     >
//       <body>
//         <SessionProvider>
//           <GuildProvider>
//             <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
//               <div className="flex flex-col min-h-screen">
//                 <Navbar />
//                 <main className="flex-grow flex flex-col">{children}</main>
//               </div>
//               <Toaster richColors position="top-center" />
//             </ThemeProvider>
//           </GuildProvider>
//         </SessionProvider>

//         {/* Скрипты Google Analytics */}
//         <Script
//           strategy="afterInteractive"
//           src="https://www.googletagmanager.com/gtag/js?id=G-N58YQJ3MD1"
//         />
//         <Script id="google-analytics" strategy="afterInteractive">
//           {`
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', 'G-N58YQJ3MD1');
//           `}
//         </Script>

//         {/* --- 2. ДОБАВЛЯЕМ СКРИПТ COOKIEBOT --- */}
//         <Script
//           id="Cookiebot"
//           src="https://consent.cookiebot.com/uc.js"
//           data-cbid="3506d6dc-3fbd-46ab-972f-9fe3351ac098"
//           strategy="afterInteractive"
//         />
//         {/* Атрибут async не нужен, так как strategy="afterInteractive" уже обеспечивает асинхронную загрузку */}
//       </body>
//     </html>
//   )
// }

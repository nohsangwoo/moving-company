import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "이사 서비스 | 안전하고 신뢰할 수 있는 이사",
  description:
    "전문적인 이사 서비스를 제공합니다. 가정 이사, 사무실 이전, 장거리 이사 등 다양한 서비스를 이용해보세요.",
  keywords: "이사, 이사 서비스, 가정 이사, 사무실 이전, 장거리 이사, 이사 예약",
    generator: 'ludgi'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
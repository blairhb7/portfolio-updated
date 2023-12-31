import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
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
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Archivo+Black&family=Monoton&display=swap" rel="stylesheet"/>
        <title>Blair Chappell Portfolio</title>
        <link rel="icon" href="/waveicon.png" />
      </head>
      <body >{children}</body>
    </html>
  )
}

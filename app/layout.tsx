import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'XICT - Home',
  description:
    'XICT is a platform that connects people with technology, providing resources and support for innovation and collaboration.',
  keywords: ['XICT', 'technology'],
  authors: [
    {
      name: 'XICT Team',
      url: 'https://xict.vn',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

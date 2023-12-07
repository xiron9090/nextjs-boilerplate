import type { Metadata } from 'next'
import { Suspense } from 'react'


export const metadata: Metadata = {
  title: 'Boilerplate Version 1.0',
  description: 'Boilerplate Version 1.0',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{margin:0}} >
        <Suspense>

        {children}
        </Suspense>
        </body>
    </html>
  )
}

import { Header } from '@/components/Header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Devstore',
}

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Header />

      {children}
    </div>
  )
}

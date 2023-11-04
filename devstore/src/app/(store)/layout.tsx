import { Header } from '@/components/header'
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
    <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-app gap-5 px-8 py-8">
      <Header />

      {children}
    </div>
  )
}

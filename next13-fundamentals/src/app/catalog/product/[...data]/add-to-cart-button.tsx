'use client'

import { ReactNode, useState } from 'react'
import { TestBoundaries } from './testBoundaries'

interface Props {
  children: ReactNode
}

export function AddToCartButton({ children }: Props) {
  const [count, setCount] = useState(0)

  function addToCart() {
    setCount((state) => state + 1)
  }

  return (
    <div className="flex flex-col gap-2">
      <button type="button" onClick={addToCart}>
        Add to cart ({count})
      </button>
      <TestBoundaries />
      {children} {/* This component will be server component */}
    </div>
  )
}

// Client Boundaries
// every component here will be a client component

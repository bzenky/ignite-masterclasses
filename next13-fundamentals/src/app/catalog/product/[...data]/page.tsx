import { AddToCartButton } from './add-to-cart-button'
import { TestServerComponent } from './testServerComponent'

interface ProductProps {
  params: {
    data: string[]
  }
}

// Server Components => don't use JavaScript on client side
// Client Components => interactivity / send and use JavaScript on client side

// Even being a client component, the component still being created by node server and not by react traditional way
// hydration => pure html -> html with js

// Streaming SSR => Read/write data by partial method + Server-side rendering

export default async function Product({ params }: ProductProps) {
  const response = await fetch('https://api.github.com/users/bzenky')
  const user = await response.json()

  const [productId, size, color] = params.data

  return (
    <div>
      <p>ProductId: {productId}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>

      <AddToCartButton>
        <TestServerComponent />
      </AddToCartButton>
    </div>
  )
}

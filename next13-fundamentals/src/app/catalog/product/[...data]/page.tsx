'use client'

interface ProductProps {
  params: {
    data: string[]
  }
}

// Server Components => don't use JavaScript on client side
// Client Components => interactivity / send and use JavaScript on client side

// Even being a client component, the component still being created by node server and not by react traditional way
// hydration - pure html -> html with js

export default function Product({ params }: ProductProps) {
  const [productId, size, color] = params.data

  function addToCart() {
    console.log('Done')
  }

  return (
    <div>
      <p>ProductId: {productId}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>

      <button type="button" onClick={addToCart}>
        Add to cart
      </button>
    </div>
  )
}

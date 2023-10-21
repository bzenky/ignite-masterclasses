export async function TestServerComponent() {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return <h1>Server component</h1>
}

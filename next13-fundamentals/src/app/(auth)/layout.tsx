export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <h1 className="text-xl font-bold">Logo do App</h1>
        {children}
      </body>
    </html>
  )
}

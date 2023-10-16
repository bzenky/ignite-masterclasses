export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <h2>Admin content</h2>
      </body>
    </html>
  )
}

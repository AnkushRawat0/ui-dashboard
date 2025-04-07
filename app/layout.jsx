import "./globals.css"

export const metadata = {
  title: "Financial Dashboard",
  description: "A financial document management dashboard",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}



import './globals.css'
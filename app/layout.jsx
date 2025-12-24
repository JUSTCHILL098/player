import "./globals.css"
import { GeistMono } from "geist/font/mono"

export const metadata = {
  title: "MegaPlay API",
  description: "Hianime Video API"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={GeistMono.className}>
      <body>
        {children}
      </body>
    </html>
  )
}

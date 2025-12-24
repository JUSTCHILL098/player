import "./globals.css"
import { GeistMono } from "geist/font/mono"

export const metadata = {
  title: "Hianime Video API - MegaPlay",
  description: "Embed Hianime videos easily"
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

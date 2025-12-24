import "./globals.css"
import { Geist_Mono } from "next/font/google"

const geistMono = Geist_Mono({
  subsets: ["latin"],
})

export const metadata = {
  title: "MegaPlay API",
  description: "Hianime Video API",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={geistMono.className}>
        {children}
      </body>
    </html>
  )
}

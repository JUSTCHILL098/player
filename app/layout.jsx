import "./globals.css"
import { Mono } from 'geist/font/mono';

const geist = GeistMono({
  subsets: ["latin"],
})

export const metadata = {
  title: "MegaPlay API",
  description: "Hianime Video API",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={geist.className}>
        {children}
      </body>
    </html>
  )
}

import { Footer, Navbar } from '../components/'
import './globals.css'


export const metadata = {
  title: 'Morse translator',
  description: 'Web Morse translator ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

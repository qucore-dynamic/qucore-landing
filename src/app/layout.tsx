// Styles
import './global.css'
import './variables.scss'

// Font
import { Prosto_One, Afacad, Coda } from 'next/font/google'

// Types
import { LayoutT } from '@shared-types/layouts'

const prosto = Prosto_One({
  subsets: ['latin', 'cyrillic', 'latin-ext'],
  weight: '400',
  display: 'swap',
})

const afacad = Afacad({
  subsets: ['latin', 'latin-ext'],
  weight: '400',
  display: 'swap',
})

const coda = Coda({
  subsets: ['latin', 'latin-ext'],
  weight: '400',
  display: 'swap',
})

const RootLayout = async ({ children }: LayoutT) => {
  return (
    <html lang='en'>
      <body className={`${prosto.className} ${afacad.className} ${coda.className}`}>
        {children}
      </body>
    </html>
  )
}

export default RootLayout

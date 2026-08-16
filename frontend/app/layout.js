import './globals.css'
import { LangProvider } from '@/components/LangProvider'
import { ThemeProvider } from '@/components/ThemeProvider'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Nguyen Cat Tuong · Portfolio',
  description: 'Portfolio von Nguyen Cat Tuong – angehende Applikationsentwicklerin, IMS Bern. Projekte, Skills und Kontakt.',
}

const themeScript = `(function(){try{var t=localStorage.getItem('theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`

export default function RootLayout({ children }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ThemeProvider>
          <LangProvider>
            <Nav />
            <main>{children}</main>
            <Footer />
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

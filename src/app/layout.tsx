// Components
import { Header } from '@/components';
// Theme Provider
import Providers from './Providers';
// Styles
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Providers>
          <div className='px-4 md:max-w-5xl mx-auto'>
          {/* Header */}
            <Header />
            <main>
              {children}
            </main>
          </div>
          {/* Footer */}
        </Providers>
      </body>
    </html>
  )
}

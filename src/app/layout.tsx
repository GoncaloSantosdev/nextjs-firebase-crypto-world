// Components
import { Footer, Header } from '@/components';
// Auth
import SessionProvider from '@/components/SessionProvider';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
// Theme Provider
import Providers from './Providers';
// Styles
import './globals.css'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);

  console.log(session);

  return (
    <html lang="en">
      <head />
      <body>
        <SessionProvider session={session}>
        <Providers>
          <div className='px-4 md:max-w-5xl mx-auto'>
            <Header />
            <main>
              {children}
            </main>
          </div>
          <Footer />
        </Providers>
        </SessionProvider>
      </body>
    </html>
  )
}

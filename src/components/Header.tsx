/* eslint-disable @next/next/no-img-element */
'use client';
import Link from "next/link";
// Auth
import { useSession, signOut } from "next-auth/react";
// Components
import { SwitchTheme } from './';
// Icons
import { CurrencyDollarIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const { data: session } = useSession();

  return (
    <header className="flex items-center justify-between py-4 border-b">
            <div>
                <Link href={'/'} className='flex items-center space-x-2'>
                    <CurrencyDollarIcon className='h-4 w-4 md:h-5 md:w-5'/>
                    <h3 className='md:text-lg'>Crypto World</h3>
                </Link>
            </div>

            <div>
                {/* Dark Mode */}
                <SwitchTheme />
            </div>

            <div>
                {session ? (
                  <Link href={'/account'}>
                  <div className='flex items-center space-x-5'>
                    <img 
                      src={session.user?.image!} 
                      alt="profile" 
                      className="h-8 w-8 rounded-full cursor-pointer hover:opacity-50"
                    />
                  </div>
                  </Link>
                ) : (
                  <Link href={'/login'} className='bg-[#206BDC] text-white text-sm px-5 py-2 rounded'>Sign In</Link>
                )}
            </div>
    </header>
  )
}

export default Header
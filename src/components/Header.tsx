import Link from "next/link";
// Components
import { SwitchTheme } from './';
// Icons
import { CurrencyDollarIcon } from '@heroicons/react/24/outline';

const Header = () => {
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
                <button className='bg-[#206BDC] text-white text-sm px-5 py-2 rounded'>Sign In</button>
            </div>
    </header>
  )
}

export default Header
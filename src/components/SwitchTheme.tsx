'use client';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
// Icons
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline"

const SwitchTheme = () => {
  const { systemTheme ,theme, setTheme } = useTheme();
  const [ mounted, setMounted ] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, [])

  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <>
      {mounted && (
      currentTheme === 'dark' ? (
      <div className='flex items-center space-x-2'>
        <p className='hidden md:inline-flex text-sm'>Light Mode</p>
        <SunIcon onClick={() => setTheme('light')} className='cursor-pointer text-xl hover:text-[#206BDC] transition-al h-5 w-5'/>
      </div>
      ) : (
      <div className='flex items-center space-x-2 text-sm'>
        <p className='hidden md:inline-flex text-sm'>Dark Mode</p>
        <MoonIcon onClick={() => setTheme('dark')} className='cursor-pointer text-xl hover:text-[#206BDC] transition-al  h-5 w-5'/>
      </div>
    ))}
    </>
  )
}

export default SwitchTheme
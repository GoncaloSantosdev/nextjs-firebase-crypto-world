'use client'
import { ThemeProvider } from "next-themes";

const Providers = ({ children } : any) => {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <div className='select-none'>
        {children}
      </div>
    </ThemeProvider>
  )
}

export default Providers
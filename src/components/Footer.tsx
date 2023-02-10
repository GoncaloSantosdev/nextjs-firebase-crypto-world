import Link from "next/link"

const Footer = () => {
  return (
    <footer className='text-center flex flex-col space-y-4 md:space-y-0 md:flex-row items-center justify-center md:space-x-6 mt-20 bg-[#1d1d1d] text-white p-8'>
      <p className='underline'>
        <Link href='mailto: goncalosantosprofissional@gmail.com'>goncalosantosprofissional@gmail.com</Link>
      </p> 
      <div />
      <p className="underline">
      <Link href='https://goncalosantosdev.netlify.app/' target='_blank'>https://goncalosantosdev.netlify.app/</Link>
      </p>
    </footer>
  )
}

export default Footer
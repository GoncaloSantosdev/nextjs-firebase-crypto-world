'use client';
import { useRouter } from "next/navigation";
// Components
import { SavedCoins, Title } from "@/components";
// Auth
import { useSession, signOut } from "next-auth/react"
// Sparkline
import { Sparklines, SparklinesLine } from 'react-sparklines';

const Account = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if(!session){
    router.push('/');
  }
    
  return (
    <section className='mt-20'>
        <div className='flex flex-col md:flex-row md:items-center justify-between'>
            <Title title={`Welcome, ${session?.user?.name}`}/>
            <button 
                className='bg-[#206BDC] text-white text-sm px-5 py-2 rounded mt-12 md:mt-0'
                onClick={() => signOut()}
            >
                Sign Out
            </button>
        </div>

        <div className='mt-16'>
            <SavedCoins />
        </div>
    </section>
  )
}

export default Account
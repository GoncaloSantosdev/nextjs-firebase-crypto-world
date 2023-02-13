/* eslint-disable @next/next/no-img-element */
'use client';
import { useEffect, useState } from "react";
import Link from "next/link";
// Auth
import { useSession } from "next-auth/react";
// Firebase
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from "@/firebase";
// Icon
import { TrashIcon } from "@heroicons/react/24/outline";

const SavedCoins = () => {
  const { data: session } = useSession();
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    onSnapshot(doc(db, 'users', `${session?.user?.email!}`), (doc) => {
        setCoins(doc.data()?.watchList);
    })
  }, [session?.user?.email!]);

   const path = doc(db, 'users', `${session?.user?.email!}`);

   const removeCoin = async (passedId : any)  => {
        try{
            const result = coins.filter((item) => item.id !== passedId)
            await updateDoc(path, {
                watchList: result,
            })
        } catch (err : any){
            console.log(err.message);
        }
   }  

  return (
    <div>
        {coins.length === 0 ? (
        <div className='flex flex-col items-center'>
            <p className='text-2xl font-bold'>You dont have any coins saved.</p>
            <Link href={'/'} className='mt-8 bg-[#206BDC] text-white text-sm px-5 py-2 rounded'>Go Back</Link> 
         </div>
        ): (
            <>
            <div className='flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-8'>
                <div className='bg-gray-800 p-4 rounded'>
                    <h3 className='text-xl font-bold'>$0.00</h3>
                    <span className='text-sm text-slate-400'>Total Balance</span>
                </div>
                <div className='bg-gray-800 p-4 rounded'>
                    <h3 className='text-xl font-bold'>$0.00</h3>
                    <span className='text-sm text-slate-400'>24h Portfolio Change (+0%)</span>
                </div>
                <div className='bg-gray-800 p-4 rounded'>
                    <h3 className='text-xl font-bold'>$0.00</h3>
                    <span className='text-sm text-slate-400'>Total Profit Loss (-)</span>
                </div>
            </div>
            <table className='w-full text-sm text-left mt-12'>
            <thead className='text-xs uppercase'>
                <tr className='border-b text-center'>
                    <th scope="col" className="px-6 py-3">Rank</th>
                    <th scope="col" className="px-6 py-3">Coin</th>
                    <th scope="col" className="px-6 py-3">Remove</th>
                </tr>
            </thead>
            <tbody className='border-b '>
                {coins.map((coin : any) => (
                    <>
                        <tr className='h-[80px] border-b overflow-hidden text-center' key={coin.id}>
                            <td>{coin?.rank}</td>
                            <td>
                                <Link href={`/coin/${coin.id}`}>
                                    <div className='flex items-center justify-center space-x-3'>
                                        <img className='h-6 w-6' src={coin.image} alt="coin image" />
                                        <div className="text-left ">
                                            <p>{coin?.name}</p>
                                            <p>{coin?.symbol.toUpperCase()}</p>
                                        </div>
                                    </div>
                                </Link>
                            </td>
                            <td className='flex justify-center items-center h-[80px]'>
                                <TrashIcon onClick={() => removeCoin(coin.id)} className='h-4 w-4 cursor-pointer'/>
                            </td>
                        </tr>
                    </>
                ))}
            </tbody>
        </table>
        </>
        )}

    </div>
  )
}

export default SavedCoins
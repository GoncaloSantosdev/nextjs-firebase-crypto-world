/* eslint-disable @next/next/no-img-element */
'use client';
import Link from "next/link";
import { useState } from "react";
// Auth
import { useSession } from "next-auth/react";
// Firebase
import { arrayUnion, updateDoc , doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";
// Icons
import { StarIcon } from "@heroicons/react/24/outline";
// Sparkline
import { Sparklines, SparklinesLine } from 'react-sparklines';

const CoinItem = ({ topCoin } : any) => {
  const { data: session } = useSession();
    const [savedCoin, setSavedCoin] = useState(false);

    const path = doc(db, 'users', `${session?.user?.email!}`);

    const saveCoin = async () => {
        setSavedCoin(true);
        if(session?.user?.email!){
            await updateDoc(path, {
                watchList: arrayUnion({
                    id: topCoin.id,
                    name: topCoin.name,
                    image: topCoin.image,
                    rank: topCoin.market_cap_rank,
                    symbol: topCoin.symbol,
                })
            }); 
        } else {
            alert('Please sign in to save a coin.');
        }
    }

  return (
    <tr className='h-[80px] border-b overflow-hidden'>
            <td><StarIcon onClick={saveCoin} className={savedCoin ? 'h-4 w-4 cursor-pointer fill-yellow-500' : 'h-4 w-4 cursor-pointer'}/></td>
            <td className='text-center'>{topCoin.market_cap_rank}</td>
            <td>
                <div className='flex items-center'>
                    <img 
                        src={topCoin.image} 
                        alt={topCoin.id} 
                        className='w-6 mr-2 rounded-full'
                    />
                    <Link href={`/coin/${topCoin.id}`}>
                        <p className='hidden sm:table-cell'>{topCoin.name}</p>
                    </Link>
                </div>
            </td>
            <td>{topCoin.symbol.toUpperCase()}</td>
            <td>${topCoin.current_price.toLocaleString()}</td>
            <td>
                {topCoin.price_change_percentage_24h > 0 ? (
                    <p className='text-green-600'>{topCoin.price_change_percentage_24h.toFixed(2)}%</p>
                ) : (
                    <p className='text-red-600'>{topCoin.price_change_percentage_24h.toFixed(2)}%</p>
                )}
            </td>
            <td className='w-[180px] hidden md:table-cell'>${topCoin.total_volume.toLocaleString()}</td>
            <td className='w-[180px] hidden sm:table-cell'>${topCoin.market_cap.toLocaleString()}</td>
            <td>
                <Sparklines data={topCoin.sparkline_in_7d.price}>
                    <SparklinesLine color='red' />
                </Sparklines>
            </td>
    </tr>
  )
}

export default CoinItem
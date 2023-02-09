/* eslint-disable @next/next/no-img-element */
'use client';
// Icons
import { StarIcon } from "@heroicons/react/24/outline";
// Sparkline
import { Sparklines, SparklinesLine } from 'react-sparklines';

const CoinItem = ({ coin } : any) => {
  return (
    <tr className='h-[80px] border-b overflow-hidden'>
        <td><StarIcon className='h-4 w-4'/></td>
        <td>{coin.market_cap_rank}</td>
        <td>
            <div className='flex items-center'>
                <img 
                    src={coin.image} 
                    alt={coin.id} 
                    className='w-6 mr-2 rounded-full'
                />
                <p className='hidden sm:table-cell'>{coin.name}</p>
            </div>
        </td>
        <td>{coin.symbol.toUpperCase()}</td>
        <td>${coin.current_price.toLocaleString()}</td>
        <td>
            {coin.price_change_percentage_24h > 0 ? (
                <p className='text-green-600'>{coin.price_change_percentage_24h.toFixed(2)}%</p>
            ) : (
                <p className='text-red-600'>{coin.price_change_percentage_24h.toFixed(2)}%</p>
            )}
        </td>
        <td className='w-[180px] hidden md:table-cell'>${coin.total_volume.toLocaleString()}</td>
        <td className='w-[180px] hidden sm:table-cell'>${coin.market_cap.toLocaleString()}</td>
        <td>
            <Sparklines data={coin.sparkline_in_7d.price}>
                <SparklinesLine color='red' />
            </Sparklines>
        </td>
    </tr>
  )
}

export default CoinItem
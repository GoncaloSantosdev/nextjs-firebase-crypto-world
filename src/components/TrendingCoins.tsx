/* eslint-disable @next/next/no-img-element */
'use client';
import Link from 'next/link';
// Components
import { Title } from './';

const TrendingCoins = ({ trendingCoins } : any) => {
  const { coins } = trendingCoins;

  return (
    <div className='mt-16'>
        <Title title='Trending Coins'/>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-12'>
            {coins.map((coin : any) => (
                <div key={coin.item.id} className='dark:bg-[#1D1D1D] dark:text-white rounded text-black shadow-md py-8 px-6'>
                    <Link href={`coin/${coin.item.id}`}>
                        <div className='flex items-center justify-between'>
                            <img src={coin.item.small} alt={coin.item.name} className='h-8 w-8' />
                            <h3 className='font-semibold'>{coin.item.name}</h3>
                        </div>
                        <div className='mt-8'>
                            <p className='text-sm'><span className='font-bold'>Market Cap Rank:</span> {coin.item.market_cap_rank}</p>
                        </div>
                        <div className='mt-4'>
                            <p className='text-sm'><span className='font-bold'>Price:</span> ${coin.item.price_btc}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TrendingCoins
'use client';
import { useState } from 'react';
// Components
import { CoinItem } from './'

type Props = {
    
}

const CoinsList = ({ coins } : any) => {
  const [search, setSearch] = useState('');

  return (
    <div className='mt-20'>
        <form className='w-full'>
            <input 
                type='text' 
                placeholder='Search Coin'
                className='px-5 py-2 rounded w-full'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>

        <table className='w-full border-collapse text-center mt-12'>
            <thead>
                <tr className='border-b'>
                    <th></th>
                    <th className='px-4'>#</th>
                    <th className='text-left'>Coin</th>
                    <th></th>
                    <th>Price</th>
                    <th>24h</th>
                    <th className='hidden md:table-cell'>24h Volume</th>
                    <th className='hidden sm:table-cell'>Mkt</th>
                    <th>Last 7 Days</th>
                </tr>
            </thead>
            <tbody>
                {coins.filter((value : any)  => {
                    if(search === ''){
                        return value;
                    } else if (
                        value.name.toLowerCase().includes(search.toLowerCase())
                    ) {
                        return value
                    }
                }).map((coin : any) => (
                    <>
                    <CoinItem coin={coin} key={coin.id}/>
                    </>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default CoinsList
'use client';
import { useState } from 'react';
// Components
import { CoinItem, Title } from './'

type Props = {
    
}

const CoinsList = ({ topCoins } : any) => {
  const [search, setSearch] = useState('');

  return (
    <div className='mt-16'>
        <Title title='Top Coins'/>

        <form className='w-full mt-12'>
            <input 
                type='text' 
                placeholder='Search Coin'
                className='px-5 py-2 rounded w-full border'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>

        <div className='relative overflow-x-auto'>
        <table className='w-full text-sm text-left mt-12'>
            <thead className='text-xs uppercase'>
                <tr className='border-b'>
                    <th scope="col" className="px-6 py-3"></th>
                    <th scope="col" className="px-6 py-3">#</th>
                    <th scope="col" className="px-6 py-3">Coin</th>
                    <th scope="col" className="px-6 py-3"></th>
                    <th scope="col" className="px-6 py-3">Price</th>
                    <th scope="col" className="px-6 py-3">24h</th>
                    <th scope="col" className="px-6 py-3">24h Volume</th>
                    <th scope="col" className="hidden md:table-cell px-6 py-3">Mkt</th>
                    <th scope="col" className="hidden md:table-cell px-6 py-3">Last 7 Days</th>
                </tr>
            </thead>
            <tbody className='border-b '>
                {topCoins.filter((value : any)  => {
                    if(search === ''){
                        return value;
                    } else if (
                        value.name.toLowerCase().includes(search.toLowerCase())
                    ) {
                        return value
                    }
                }).map((topCoin : any) => (
                    <>
                    <CoinItem topCoin={topCoin} key={topCoin.id}/>
                    </>
                ))}
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default CoinsList
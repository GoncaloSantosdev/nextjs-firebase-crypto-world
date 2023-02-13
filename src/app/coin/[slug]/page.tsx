// 'use client'
import { CoinDetails } from "@/components";

const CoinDetailsPage = async ({ params } : any) => {
  const coinName = params.slug;

  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coinName}?localization=false&sparkline=true`)

  if(!res.ok){
      throw new Error('Failed to fetch data');
  }

  const coin = await res.json();

  return (
    <section>
        <CoinDetails coin={coin}/>
    </section>
  )
}

export default CoinDetailsPage
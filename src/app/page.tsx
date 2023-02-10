import { CoinsList, TrendingCoins } from "@/components";

const HomePage = async () => {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true');
  const trending = await fetch('https://api.coingecko.com/api/v3/search/trending');

  if(!res.ok){
    throw new Error('Failed to fetch data');
  }

  const topCoins = await res.json();
  const trendingCoins = await trending.json();

  return (
    <div>
      <section>
        <CoinsList topCoins={topCoins}/>
      </section>
      
      <section>
        <TrendingCoins trendingCoins={trendingCoins}/>
      </section>
    </div>
  )
}

export default HomePage
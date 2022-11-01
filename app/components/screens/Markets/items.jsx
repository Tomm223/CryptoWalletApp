import { SparkLine } from '@/components/shared/charts';
import { Percent } from '@/components/UI/BlockList/UI';
import { Button_Green } from '@/components/UI/form/buttons';
import { fixedNum } from '@/utils/num';
import React, { Suspense } from 'react';
import { ItemMarketPage, ItemMarketPage_mobile, ItemMarketPage_CoinAnalytics, ItemMarketPage_Coin } from '../../../assets/styledComponents/Items';
import styles from './index.module.scss'
import ChartLoader from '@/components/UI/loaders/chart'

const Sparkline = React.lazy(() => import('@/components/shared/charts/sparkline'));


export const DefaultItem = ({
   item,
   toBuy,
   currency,
   perc1h,
   perc24h,
   perc7d,
   mkt24h,
   sparkline: {
      sparkLine_color,
      sparkline_data
   }
}) => {
   const mkt_price = fixedNum(item.market_cap / 1000000, 1)
   return (
      <ItemMarketPage key={item.id} >
         <p className={styles.price}>#{item.market_cap_rank}</p>
         <div className={styles.name}>
            <img className={styles.name__img} src={item.image} alt="" />
            <div className={styles.label}>
               <span className={styles.label__name}>{item.name}</span>
               <span className={styles.label__symbol}>{item.symbol}</span>
            </div>
         </div>
         <div className={styles.btn}>
            <Button_Green onClick={toBuy}>Buy</Button_Green>
         </div>
         <p className={styles.price}>
            <span>{item.current_price}</span> <span>{currency}</span>
         </p>
         <div className={styles.percent}>
            <Percent children={perc1h} ></Percent>
         </div>
         <div className={styles.percent}>
            <Percent children={perc24h}></Percent>
         </div>
         <div className={styles.percent}>
            <Percent children={perc7d}></Percent>
         </div>
         <p className={styles.price}>
            <span>{mkt_price}</span> <span>M</span> <span>{currency}</span>
         </p>
         <div className={styles.percent}>
            <Percent children={mkt24h} />
         </div>
         <div className={styles.img_50}>
            <Suspense fallback={<ChartLoader />}>
               <Sparkline data={sparkline_data} style={{ width: '100%', height: '100%' }} color={sparkLine_color} />
            </Suspense>
         </div>
      </ItemMarketPage>
   )
}
export const ItemCoin = ({
   height,
   coin: { symbol, img_src, name },
   market_cap_rank,
   toBuy
}) => {

   return (
      <ItemMarketPage_Coin height={height}>
         <p className={styles.price}>#{market_cap_rank}</p>
         <div className={styles.name}>
            <img className={styles.name__img} src={img_src} alt="" />
            <div className={styles.label}>
               <span className={styles.label__name}>{name}</span>
               <span className={styles.label__symbol}>{symbol}</span>
            </div>
         </div>
         <div className={styles.btn}>
            <Button_Green onClick={toBuy}>Buy</Button_Green>
         </div>
      </ItemMarketPage_Coin>
   )
}

export const ItemCoinAnalytics = ({
   height,
   mkt_price,
   currency,
   price,
   percentages: { perc1h, perc24h, perc7d, mkt24h },
   sparkline: { sparkLine_color, sparkline_data }
}) => {

   return (
      <ItemMarketPage_CoinAnalytics height={height}>
         <p className={styles.price}>
            <span>{price}</span> <span>{currency}</span>
         </p>
         <div className={styles.percent}>
            <Percent children={perc1h} ></Percent>
         </div>
         <div className={styles.percent}>
            <Percent children={perc24h}></Percent>
         </div>
         <div className={styles.percent}>
            <Percent children={perc7d}></Percent>
         </div>
         <p className={styles.price}>
            <span>{mkt_price}</span> <span>M</span> <span>{currency}</span>
         </p>
         <div className={styles.percent}>
            <Percent children={mkt24h} />
         </div>
         <div className={styles.img_50}>
            <Suspense fallback={<ChartLoader />}>
               <Sparkline data={sparkline_data} style={{ width: '100%', height: '100%' }} color={sparkLine_color} />
            </Suspense>
         </div>
      </ItemMarketPage_CoinAnalytics>
   )
}

export const SubtitleMarketPage = () => {

   return (
      <ItemMarketPage>
         <p className={styles.list__sup}>#</p>
         <p className={styles.list__sup}>Coin</p>
         <p className={styles.list__sup}>Buy</p>
         <p className={styles.list__sup}>Price</p>
         <p className={styles.list__sup} >1h</p>
         <p className={styles.list__sup}>24h</p>
         <p className={styles.list__sup}>7day</p>
         <p className={styles.list__sup}>Mkt Cap</p>
         <p className={styles.list__sup}>Mkt-C 24h</p>
         <p className={styles.list__sup}>7day</p>
      </ItemMarketPage>
   )
}

export const SubtitleMarketPage_AnalyricsSide = () => {
   return (
      <ItemMarketPage_CoinAnalytics>
         <p className={styles.list__sup}>Price</p>
         <p className={styles.list__sup} >1h</p>
         <p className={styles.list__sup}>24h</p>
         <p className={styles.list__sup}>7day</p>
         <p className={styles.list__sup}>Mkt Cap</p>
         <p className={styles.list__sup}>Mkt-C 24h</p>
         <p className={styles.list__sup}>7day</p>
      </ItemMarketPage_CoinAnalytics>
   )
}
export const SubtitleMarketPage_CoinSide = () => {
   return (
      <ItemMarketPage_Coin>
         <p className={styles.list__sup}>#</p>
         <p className={styles.list__sup}>Coin</p>
         <p className={styles.list__sup}>Buy</p>
      </ItemMarketPage_Coin>
   )
}
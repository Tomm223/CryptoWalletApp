import styles from './index.module.scss'
import { fixedNum } from '../../../utils/num'
import { ItemCoin, ItemCoinAnalytics, SubtitleMarketPage_CoinSide, SubtitleMarketPage_AnalyricsSide } from './items'
import { UlTableAdaptive, TableAdaptive_Left, TableAdaptive_right } from 'app/assets/styledComponents/lists'
import { useState } from 'react'
import { useEffect } from 'react'

const listMobile = ({ list, currency, toBuy, sizes: {
   subTitleHeight,
   itemHeight,
   widthRightSide,
   widthLeftSide,
   amountItems
} }) => {


   const [height, setHeight] = useState(itemHeight * amountItems + subTitleHeight)
   useEffect(() => {
      setHeight(itemHeight * amountItems + subTitleHeight)
   }, [amountItems])

   return (
      <>
         <TableAdaptive_Left width={widthLeftSide}>
            <UlTableAdaptive>
               <SubtitleMarketPage_CoinSide key='sub_left' />
               {
                  list.map(item => {
                     const body = {
                        coin: {
                           symbol: item.symbol.toUpperCase(),
                           coinId: item.id,
                           label: item.name,
                           img: item.image,
                           price: item.current_price
                        }
                     }
                     return (
                        <ItemCoin
                           key={item.id}
                           height={itemHeight}
                           toBuy={() => toBuy(body)}
                           coin={{
                              symbol: item.symbol,
                              name: item.name,
                              img_src: item.image
                           }}
                           market_cap_rank={item.market_cap_rank}
                        />
                     )
                  })
               }
            </UlTableAdaptive>
         </TableAdaptive_Left>
         <TableAdaptive_right height={height}>
            <UlTableAdaptive width={widthRightSide}>
               <SubtitleMarketPage_AnalyricsSide key='sub_right' />

               {list.map(item => {
                  let perc1h = fixedNum(item.price_change_percentage_1h_in_currency)
                  let perc24h = fixedNum(item.price_change_percentage_24h_in_currency)
                  let perc7d = fixedNum(item.price_change_percentage_7d_in_currency)
                  let mkt24h = fixedNum(item.market_cap_change_percentage_24h)
                  const sparkline_data = item.sparkline_in_7d.price
                  const sparkLine_color = sparkline_data[sparkline_data.length - 1] - sparkline_data[0] > 0 ? '#50C878' : '#EB4C42'
                  const mkt_price = fixedNum(item.market_cap / 1000000, 1)

                  return (
                     <ItemCoinAnalytics
                        height={itemHeight}
                        key={item.id}
                        price={item.current_price}
                        currency={currency}
                        mkt_price={mkt_price}
                        percentages={{
                           perc1h,
                           perc24h,
                           perc7d,
                           mkt24h
                        }}
                        sparkline={{
                           sparkLine_color,
                           sparkline_data
                        }}
                     />
                  )
               })}
            </UlTableAdaptive>
         </TableAdaptive_right>
      </>

   )
}

export default listMobile


/*
 <tableAdaptive_Left width={widthLeftSide}>
            <ul className={styles.list_left__items}>
               <SubtitleMarketPage_CoinSide />
               {
                  market.sortSearch.map(item => {
                     const body = {
                        coin: {
                           symbol: item.symbol.toUpperCase(),
                           coinId: item.id,
                           label: item.name,
                           img: item.image,
                           price: item.current_price
                        }
                     }
                     return (
                        <ItemCoin
                           height={itemHeight}

                           toBuy={() => toBuy(body)}
                           coin={{
                              symbol: item.symbol,
                              name: item.name,
                              img_src: item.image
                           }}
                           market_cap_rank={item.market_cap_rank}
                        />
                     )
                  })
               }
            </ul>
         </tableAdaptive_Left>
         <tableAdaptive_right >
            <ul className={styles.list_right__items}>
               <SubtitleMarketPage_AnalyricsSide />
               {market.sortSearch.map(item => {
                  let perc1h = fixedNum(item.price_change_percentage_1h_in_currency)
                  let perc24h = fixedNum(item.price_change_percentage_24h_in_currency)
                  let perc7d = fixedNum(item.price_change_percentage_7d_in_currency)
                  let mkt24h = fixedNum(item.market_cap_change_percentage_24h)
                  const sparkline_data = item.sparkline_in_7d.price
                  const sparkLine_color = sparkline_data[sparkline_data.length - 1] - sparkline_data[0] > 0 ? '#50C878' : '#EB4C42'
                  const mkt_price = fixedNum(item.market_cap / 1000000, 1)

                  return (
                     <ItemCoinAnalytics
                        height={itemHeight}
                        key={item.id}
                        price={item.current_price}
                        currency={currency}
                        mkt_price={mkt_price}
                        percentages={{
                           perc1h,
                           perc24h,
                           perc7d,
                           mkt24h
                        }}
                        sparkline={{
                           sparkLine_color,
                           sparkline_data
                        }}
                     />
                  )
               })}
            </ul>
         </tableAdaptive_right>
*/
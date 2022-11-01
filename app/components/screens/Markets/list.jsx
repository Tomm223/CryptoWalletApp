import styles from './index.module.scss'
import { fixedNum } from '../../../utils/num'
import { DefaultItem } from './items'

const List = ({ list, currency, toBuy }) => {


   return (
      <ul className={styles.list}>
         {list.map((item) => {

            console.log(item.id);
            let perc1h = fixedNum(item.price_change_percentage_1h_in_currency)
            let perc24h = fixedNum(item.price_change_percentage_24h_in_currency)
            let perc7d = fixedNum(item.price_change_percentage_7d_in_currency)
            let mkt24h = fixedNum(item.market_cap_change_percentage_24h)
            const sparkline_data = item.sparkline_in_7d.price
            const sparkLine_color = sparkline_data[sparkline_data.length - 1] - sparkline_data[0] > 0 ? '#50C878' : '#EB4C42'
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
               <DefaultItem
                  key={item.id + item.current_price}
                  currency={currency}
                  item={item}
                  mkt24h={mkt24h}
                  perc1h={perc1h}
                  perc24h={perc24h}
                  perc7d={perc7d}
                  sparkline={{
                     sparkLine_color: sparkLine_color,
                     sparkline_data: sparkline_data
                  }}
                  toBuy={() => toBuy(body)}
               />
            )
         })}
      </ul>
   )
}

export default List
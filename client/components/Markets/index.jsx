import BlockList from '../UI/BlockList'
import styles from './index.module.scss'
import { ItemMarkets as Item } from '../UI/BlockList/Items'
import { Percent, Total } from '../UI/BlockList/UI'
import { useReducer } from 'react'
import { fixedNum } from '../../utils.js/num'
export default function Markets({ list, currency }) {

   const user = {
      currency: {
         id: 'usd',
         symbol: 'USD'
      }
   }

   return (
      <div className={styles.container}>
         <BlockList label={'Markets'} link={'/markets'}>
            {list.map(item => {
               let perc24h = fixedNum(item.price_change_percentage_24h_in_currency)
               return (
                  <Item key={item.id}>
                     <p className={styles.Upper}>{item.symbol}{currency}</p>
                     <p className={styles.coin}>{item.name}</p>
                     <div className={styles.price}>
                        <Total amount={item.current_price} currancy={currency} />
                     </div>
                     <Percent>
                        {perc24h}
                     </Percent>
                  </Item>
               )
            })}
         </BlockList>
      </div>
   )
}
import BlockList from '../UI/BlockList'
import styles from './index.module.scss'
import { ItemMarkets as Item } from '../UI/BlockList/Items'
import { Percent, Total } from '../UI/BlockList/UI'
import { useReducer } from 'react'
import { fixedCoinNum, fixedNum } from '../../utils.js/num'
import Spinner from '../UI/loaders/Spinner'
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
            {list.length ?
               list.map(item => {
                  let perc24h = fixedNum(item.price_change_percentage_1h_in_currency)
                  let price = fixedCoinNum(item.current_price)
                  return (
                     <Item key={item.id}>
                        <p className={styles.Upper}>{item.symbol}{currency}</p>
                        <p className={styles.coin}>{item.name}</p>
                        <div className={styles.price}>
                           <Total amount={price} currancy={currency} />
                        </div>
                        <div className={styles.percent}>
                           <Percent>
                              {perc24h}
                           </Percent>
                        </div>
                     </Item>
                  )
               })
               :
               <>
                  <div className={styles.unList}>
                  </div>
                  <div className='spinner_center'>
                     <Spinner />
                  </div>
               </>
            }
         </BlockList>
      </div>
   )
}
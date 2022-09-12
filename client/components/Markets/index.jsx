import BlockList from '../UI/BlockList'
import styles from './index.module.scss'
import { ItemMarkets as Item } from '../UI/BlockList/Items'
import { Percent } from '../UI/BlockList/UI'
import { useReducer } from 'react'
export default function Markets({ list }) {

   const user = {
      currency: {
         id: 'usd',
         symbol: 'USD'
      }
   }

   return (
      <div className={styles.container}>
         <BlockList label={'Markets'} link={'#'}>
            {list.map(item => {
               return (
                  <Item key={item.id}>
                     <p className={styles.Upper}>{item.coin.symbol}{user.currency.symbol}</p>
                     <p className={styles.coin}>{item.coin.label}</p>
                     <p className={styles.price}>
                        {item.price.amount}
                        <span>{item.price.currency}</span>
                     </p>
                     <Percent>
                        {item.percent}
                     </Percent>
                  </Item>
               )
            })}
         </BlockList>
      </div>
   )
}
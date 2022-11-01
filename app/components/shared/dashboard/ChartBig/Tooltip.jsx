import { Percent } from '../../../UI/BlockList/UI'
import styles from './index.module.scss'

export default ({ currency, firstPrice, active, payload }) => {
   if (!active || !payload) return null
   for (const sparkline of payload)
      if (sparkline.dataKey) {
         console.log(firstPrice)
         const perc = sparkline.value / firstPrice * 100 - 100
         return (
            <div className={styles.tooltip}>
               <h4 className={styles.tooltip__price}>{sparkline.value} <span>{currency.toUpperCase()}</span></h4>
               <Percent>
                  {perc.toFixed(2)}
               </Percent>
            </div>
         )
      }
   return null
}
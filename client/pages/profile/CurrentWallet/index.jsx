import styles from './index.module.scss'
import { Button_Blue, Button_Green } from '../../../components/UI/Forms/buttons'
import { Percent, Profit } from '../../../components/UI/BlockList/UI'
import { FetchWallet } from '../../../http/fetch'
const wallets = [
   { coin: { id: 'bitcoin', name: "Bitcoin", symbol: 'BTC' }, amount: 14.0456, userId: 'sgrb', dateStart: 'UNIX ФОРМАТ' }
]
const coinsFromServer = {
   image: {
      large: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
   }
}
const convert = {
   usd: 24.3524,
   ru: 1475620
}
const user = {
   currency: {
      id: 'rub',
      name: 'RUB'

   }
}
export default function CurrentWallet() {

   const getI = async () => {
      const resp = await FetchWallet.getChartWallet('63149d4cb6342d2b70ef4eab')
      console.log('walletChart', resp);
   }
   return (
      <div className={styles.block}>

         <div className={styles.block__coin}>
            <div className={styles.block__label}>
               <img className={styles.block__img} src={coinsFromServer.image.large} alt="" />
               <div className={styles.block__name}>
                  <p className={styles.name__sub}>BTCUSDT</p>
                  <p className={styles.name__name}>Bitcoin</p>
               </div>
            </div>
            <div className={styles.block__price}>
               <p className={styles.block__price_item}>{convert.ru}{user.currency.name}</p>
            </div>
            <div className={styles.block__btns}>
               <div className={styles.block__btn}>
                  <Button_Green onClick={getI}>deposit</Button_Green>
               </div>
               <div className={styles.block__btn}>
                  <Button_Green>withdraw</Button_Green>
               </div>
            </div>
         </div>

         <img className={styles.block__chart} src="https://www.coingecko.com/coins/1/sparkline" alt="" />

         <div className={styles.block__footer}>
            <Profit cout={182.98} currancy={'USD'} />
            <Percent>24.69</Percent>
         </div>
      </div>
   )
}
import BlockList from '../../../UI/BlockList'
import styles from './index.module.scss'
import { ItemHistory as Item } from '../../../../assets/styledComponents/Items'
import { CountCoin, DownUp, Status } from '../../../UI/BlockList/UI'
import { unixToMyDateObj } from '../../../../utils/date'
import Spinner from '../../../UI/loaders/Spinner'
import { fixedCoinNum } from '../../../../utils/num'
export default function History({ history, loader, isAuth }) {

   return (
      <div className={styles.container}>
         <BlockList label={'History'} link={'/transactions'}>
            {
               isAuth ?
                  history.length ? history.map(item => {
                     const $amount = fixedCoinNum(item?.amount)
                     const { time, date } = unixToMyDateObj(item.date || 1662114020299)
                     return <Item key={item._id}>
                        <DownUp status={item?.status} />
                        <p className={styles.p}>{item?.type}</p>
                        <div className={styles.p}>
                           <CountCoin currancy={item?.coin?.symbol}>{$amount}</CountCoin>
                        </div>
                        <div style={{ display: 'flex' }}>
                           <p className={styles.p}>{time}</p>
                           <p className={styles.p}>{date}</p>
                        </div>
                        <Status status={item?.statusWord} />
                     </Item>
                  })
                     :
                     loader ?
                        <div className={styles.unList}>
                           <Spinner />
                        </div>
                        :
                        <div className={styles.unList}>You don't have transactions</div>
                  :
                  <div className={styles.unList}>You don`t have account</div>
            }
         </BlockList>
      </div>

   )
}
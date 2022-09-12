import BlockList from '../UI/BlockList'
import styles from './index.module.scss'
import { ItemHistory as Item } from '../UI/BlockList/Items'
import { CountCoin, DownUp, Status } from '../UI/BlockList/UI'
import { unixToMyDateObj } from '../../utils.js/date'
export default function History({ history }) {

   return (
      <div className={styles.container}>
         <BlockList label={'History'} link={'#'}>
            {!history ? <div>Вы не зарегестрированы</div> :
               history.length === 0 ? <div>У вас пока нет истории операций</div> :
                  history.length ? history.map(item => {

                     const { time, date } = unixToMyDateObj(item.date || 1662114020299)
                     return <Item key={item.id}>
                        <DownUp status={item?.status} />
                        <p className={styles.p}>{item?.type}</p>
                        <div className={styles.p}>
                           <CountCoin currancy={item?.coin?.symbol}>{item?.amount}</CountCoin>
                        </div>
                        <div style={{ display: 'flex' }}>
                           <p className={styles.p}>{time}</p>
                           <p className={styles.p}>{date}</p>
                        </div>
                        <Status status={item?.statusWord} />
                     </Item>
                  }) : <div>Произошла ошибка</div>}
         </BlockList>
      </div>

   )
}
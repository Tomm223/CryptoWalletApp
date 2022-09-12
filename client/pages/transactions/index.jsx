import styles from '../markets/index.module.scss'
import { ItemHistory as Item } from '../../components/UI/BlockList/Items'
import MainLayout from '../../components/MainLayuot'
import { CountCoin, DownUp, Status } from '../../components/UI/BlockList/UI'
import { ReactSelectNoSSR } from '../../components/UI/Select'
import Tabs from '../../components/Tabs'
import { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { StoreContext } from '../_app'
import { FetchWallet } from '../../http/fetch'
import { contructionOptionCurrency } from '../../utils.js/select'
import { unixToMyDateObj } from '../../utils.js/date'


function Transactions() {
   const { history } = useContext(StoreContext)
   // start list
   useEffect(() => {
      history.fetch()
   }, []);
   // select data
   const [selectOption, setSelectOption] = useState([])
   useEffect(() => {
      if (!history.list.length) return
      else if (history.list.length) {
         const option = contructionOptionCurrency(history.list)
         setSelectOption(option)
      }
   }, [history.list]);

   // tabs data
   const type = [
      { id: 1, value: null, title: 'all', isActive: true },
      { id: 2, value: 'deposit', title: 'deposit', isActive: false },
      { id: 3, value: 'withdraw', title: 'withdraw', isActive: false },
   ]
   const status = [
      { id: 1, value: null, title: 'all', isActive: true },
      { id: 2, value: "done", title: 'done', isActive: false },
      { id: 3, value: 'pending', title: 'pending', isActive: false },
      { id: 4, value: 'error', title: 'error', isActive: false },
   ]
   const crwallet = {
      _id: '63177deb44e0671de092384f',
      date: 1662483948,
      amount: 228.1337,
      coin: { symbol: "BTC", coinId: 'bitcoin', label: 'Bitcoin', img: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" },
      userId: '6307231b7633132f088a24b5',
   }
   return (
      <MainLayout>
         <main className={styles.main}>
            <div className={styles.header}>
               <div className={styles.header__head}>
                  <article onClick={async () => { const resp = await FetchWallet.removeWallet(crwallet); console.log(resp); }} className={styles.header__article}>Transaction History</article>
               </div>
               <div className={styles.header__sort}>
                  <div className={styles.sort__item}>
                     <Tabs list={type} onChange={(elem) => history.setType(elem.value)} />
                  </div>
                  <div className={styles.sort__item}>
                     <ReactSelectNoSSR
                        value={selectOption.filter(i => i?.value === history.currency)}
                        onChange={(e) => history.setCurrency(e.value)}
                        placeholder={'currency'}
                        options={selectOption} />
                  </div>
                  <div className={styles.sort__item}>
                     <Tabs list={status} onChange={(elem) => history.setStatus(elem.value)} />
                  </div>
               </div>
            </div>

            <div className={styles.block}>
               {<ul className={styles.list}>
                  {history.sort.map((item, i) => {

                     const { time, date } = unixToMyDateObj(item.date || 1662114020299)
                     return (
                        <Item key={item._id}>
                           <DownUp status={item?.status} />
                           <p className={styles.p}>{item.type}</p>
                           <div className={styles.p}>
                              <CountCoin currancy={item?.coin?.symbol}>{item?.amount}</CountCoin>
                           </div>
                           <div className={styles.p}>
                              <p className={styles.time}>{time}</p>
                              <p>{date}</p>
                           </div>
                           <Status status={item.statusWord} />
                        </Item>
                     )
                  })}
               </ul>}
            </div>

         </main>
      </MainLayout>
   )
}

export default observer(Transactions)
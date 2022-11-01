import styles from './index.module.scss'
import { ItemHistory as Item } from 'app/assets/styledComponents/Items'
import MainLayout from '@/components/layout/MainLayuot'
import { CountCoin, DownUp, Status } from '@/components/UI/BlockList/UI'
import { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { StoreContext } from '@/pages/_app'
import { contructionOptionCurrency } from '@/utils/select'
import { unixToMyDateObj } from '@/utils/date'
import Spinner from '@/components/UI/loaders/Spinner'
import { fixedCoinNum } from '@/utils/num'
import Sort from './sort'
import { useMediaQuery } from 'react-responsive'
import Checkbox from '@/components/UI/Checkbox'


function Transactions() {
   const { history, wallet } = useContext(StoreContext)
   // select data
   const [selectOption, setSelectOption] = useState([])
   useEffect(() => {
      if (!history.list.length) return
      else if (history.list.length) {
         const option = contructionOptionCurrency(history.list)
         setSelectOption(option)
      }
   }, [history.list])

   //responsive
   const sizeHeightSort_em = 17
   const size_mobile_header = 8
   const size_monitor_header = 12
   const isMobile = useMediaQuery({ query: `(max-width:1048px)` })
   const [isOpenSort, setIsOpenSort] = useState(true)
   const [heightHeader, setHeightHeader] = useState(size_monitor_header)
   useEffect(() => {
      //alert(isMobile)
      if (isMobile) {
         setIsOpenSort(false)
         setHeightHeader(size_mobile_header)
      }
      else {
         setIsOpenSort(true)
         setHeightHeader(size_monitor_header)
      }
   }, [isMobile])
   useEffect(() => {
      if (isOpenSort && isMobile) {
         setHeightHeader(heightHeader + sizeHeightSort_em)
      }
      if (!isOpenSort) {
         setHeightHeader(size_mobile_header)
      }
   }, [isOpenSort])
   return (
      <MainLayout>
         <main className={styles.main} style={{ gridTemplateRows: `${heightHeader}em 1fr` }}>
            <div className={styles.header}>
               <div className={styles.header__head}>
                  <article className={styles.header__article}>Transaction History</article>
                  {
                     isMobile && history.list.length ?
                        <div className={styles.header__checkbox}>
                           <Checkbox

                              state={{
                                 isActive: isOpenSort,
                                 setActive: (value) => setIsOpenSort(value)
                              }}
                           >
                              Filters
                           </Checkbox>
                        </div>
                        :
                        <></>
                  }
               </div>
               {
                  isOpenSort && history.list.length ?
                     <Sort
                        isMobile={isMobile}
                        typeState={{
                           type: history.type,
                           setType: (value) => history.setType(value)
                        }}
                        statusState={{
                           status: history.status,
                           setStatus: (value) => history.setStatus(value)
                        }}
                        selectState={{
                           options: selectOption,
                           currency: history.currency,
                           setCurrency: (value) => history.setCurrency(value)
                        }}
                     /> :
                     <></>
               }
            </div>
            <div className={styles.block}>
               {<ul className={styles.list}>
                  {history.sort.length ?
                     history.sort.map((item, i) => {
                        const $amount = fixedCoinNum(item?.amount)
                        const { time, date } = unixToMyDateObj(item.date || 1662114020299)
                        return (
                           <Item key={item._id}>
                              <DownUp status={item?.status} />
                              <p className={styles.p}>{item.type}</p>
                              <div className={styles.p}>
                                 <CountCoin currancy={item?.coin?.symbol}>{$amount}</CountCoin>
                              </div>
                              <div className={styles.p}>
                                 <p className={styles.time}>{time}</p>
                                 <p>{date}</p>
                              </div>
                              <Status status={item.statusWord} />
                           </Item>
                        )
                     })
                     :
                     history.list.length ?
                        <div>No suitable transactions</div>
                        :
                        wallet.loader ?
                           <div className={'spinner_center'}>
                              <Spinner />
                           </div>
                           :
                           <div className={styles.unList}>You don't have wallets</div>

                  }
               </ul>}
            </div>

         </main>
      </MainLayout>
   )
}

export default observer(Transactions)

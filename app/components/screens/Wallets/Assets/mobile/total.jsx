import { Total, Profit, Percent } from '@/components/UI/BlockList/UI'
import { fixedNum, floor } from '@/utils/num'
import { memo } from 'react'
import styles from '../index.module.scss'
import Image from 'next/image'
import logo from '@/assets/images/wallet-logo.png'

const TotalComponent = memo(({ totalWallet, isLoading, userCurrency }) => {
   const $total = floor(totalWallet.total)
   const $percentage = fixedNum(totalWallet.percentage)
   const $profit = fixedNum(totalWallet.profit)

   return (
      <div className={styles.balance}>
         <div className={styles.balance__label}>
            <div className={styles.balance__img}>
               <Image src={logo} />
            </div>
            <p className={styles.balance__name}>Balance</p>
         </div>
         <div className={styles.balance__price}>
            <Total isLoading={isLoading} amount={$total} currancy={userCurrency} />
         </div>
         <div className={styles.balance__profit}>
            <Profit isLoading={isLoading} count={$profit} currancy={userCurrency} />
         </div>
         <Percent isLoading={isLoading}>
            {$percentage}
         </Percent>
      </div>
   )
})

export default TotalComponent
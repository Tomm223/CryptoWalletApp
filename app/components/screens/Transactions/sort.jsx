import { memo } from 'react'
import styles from './index.module.scss'
import { ReactSelectNoSSR } from '@/components/UI/form/Select'
import Tabs from '@/components/shared/Tabs'

export default memo(({
   isMobile,
   typeState: { type, setType },
   selectState: { options, currency, setCurrency },
   statusState: { status, setStatus },
}) => {

   return (
      <div className={styles.sort}>
         <div className={styles.sort__item}>
            {isMobile ? <p className={styles.sort__item_label}>Type:</p> : <></>}
            <Tabs
               list={type}
               setList={(list) => setType(list)}
            />
         </div>
         <div className={styles.sort__item}>
            {isMobile ? <p className={styles.sort__item_label}>Currency:</p> : <></>}
            <ReactSelectNoSSR
               value={options.filter(i => i?.value === currency)}
               onChange={(e) => setCurrency(e.value)}
               placeholder={'currency'}
               options={options} />
         </div>
         <div className={styles.sort__item}>
            {isMobile ? <p className={styles.sort__item_label}>Status:</p> : <></>}
            <Tabs list={status} setList={list => setStatus(list)} />
         </div>
      </div>
   )
})


import { useEffect, useRef, useState } from 'react';
import { Box_l } from '../styledComponents/boxes'
import Tabs from '../Tabs';
import { ReactSelectNoSSR } from '../UI/Select';
import styles from './index.module.scss'



export default function ChartBig() {
   const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
   ];
   const [tabs, setTabs] = useState([
      { id: 1, value: 1, title: '1d', isActive: false },
      { id: 2, value: 7, title: '7d', isActive: true },
      { id: 3, value: 30, title: '1m', isActive: false },
      { id: 4, value: 360, title: '1y', isActive: false },
   ])

   return (
      <div className={styles.block}>
         <div className={styles.head}>
            <div className={styles.head__selects}>
               <div className={styles.head__select}>
                  <ReactSelectNoSSR options={options} />
               </div>
               <div className={styles.head__select}>
                  <ReactSelectNoSSR options={options} />
               </div>
               <div className={styles.head__select}>
                  <Tabs list={tabs} onChange={(elem) => { }} />
               </div>
            </div>
         </div>
         <div className={styles.chart}>

         </div>
      </div>
   )
}
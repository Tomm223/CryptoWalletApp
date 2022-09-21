import { useEffect } from "react"
import { useState } from "react"
import styles from './index.module.scss'

export default function Tabs({ isLoading, list, setList }) {

   const tabulate = (index) => {
      let tabz = JSON.parse(JSON.stringify(list))
      for (var i = 0; i < tabz.length; i++) {
         if (tabz[i].isActive === true) {
            tabz[i].isActive = false
            tabz[index].isActive = true
            setList(tabz)
            break
         }
      }
   }

   useEffect(() => {
      if (!list.length) return
      if (list.find(i => i.isActive === true)) {
         //onChange(list.find(i => i.isActive === true))
      }
   }, [list])

   return (
      <ul className={styles.tabs}>
         {list.length ?
            list.map((item, index) => {
               return (
                  <button
                     disabled={isLoading}
                     key={item.id}
                     onClick={() => tabulate(index)}
                     className={item.isActive ? styles.tab_active : styles.tab}
                  >
                     {item.title}
                  </button>
               )
            })
            :
            <>
               <button className={styles.tab}>*</button>
               <button className={styles.tab}>*</button>
               <button className={styles.tab}>*</button>

            </>
         }
      </ul>
   )
}
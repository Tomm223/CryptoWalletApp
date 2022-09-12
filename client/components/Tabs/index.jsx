import { useEffect } from "react"
import { useState } from "react"
import styles from './index.module.scss'

export default function Tabs({ list, onChange }) {
   const [tabs, setTabs] = useState(list)

   const tabulate = (index) => {
      let tabz = JSON.parse(JSON.stringify(tabs))
      for (var i = 0; i < tabz.length; i++) {
         if (tabz[i].isActive === true) {
            tabz[i].isActive = false
            tabz[index].isActive = true
            setTabs(tabz)
            break
         }
      }
   }

   useEffect(() => {
      if (tabs.find(i => i.isActive === true)) {
         onChange(tabs.find(i => i.isActive === true))
      }
   }, [tabs])

   return (
      <ul className={styles.tabs}>
         {tabs.map((item, index) => {
            return (
               <button
                  key={item.id}
                  onClick={() => tabulate(index)}
                  className={item.isActive ? styles.tab_active : styles.tab}
               >
                  {item.title}
               </button>
            )
         })}
      </ul>
   )
}
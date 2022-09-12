import styles from './index.module.scss'

export function ItemHistory({ children }) {

   return (
      <li className={styles.itemHistory}>
         {children}
      </li>
   )
}

export function ItemMarkets({ children }) {
   return (
      <li className={styles.itemMarkets}>
         {children}
      </li>
   )
}

export function ItemMarketPage({ children }) {

   return (
      <li className={styles.itemMarketPage}>
         {children}
      </li>
   )
}
import styles from './index.module.scss'
import NavBtn from '@/components/UI/NavBtn'
import Dashboard from './icon/dashboard.svg'
import Markets from './icon/markets.svg'
import Transactions from './icon/transactions.svg'
import Wallets from './icon/wallet.svg'
import Profile from './icon/profile.svg'
import Help from './icon/help.svg'
import LogOut from './icon/log-out.svg'
import { useContext } from 'react'
import { AuthContext } from '@/context/AuthContainer'

export default function SideBar() {
   const { logout } = useContext(AuthContext)


   return (

      <div className={styles.navbar_left__block}>
         <nav className={styles.nav}>
            <ul className={'navbar_left__list'}>
               <li className={styles.item}>
                  <NavBtn link={'/'} id={styles.reactHover} >
                     <Dashboard className={styles.svg} />
                     Dashboard
                  </NavBtn>
               </li>
               <li className={styles.item}>
                  <NavBtn link={'/markets'} id={styles.reactHover} >
                     <Markets className={styles.svg} />
                     Markets
                  </NavBtn>
               </li>
               <li className={styles.item}>
                  <NavBtn link={'/transactions'} id={styles.reactHover} >
                     <Transactions className={styles.svg} />
                     Transactions
                  </NavBtn>
               </li>
               <li className={styles.item}>
                  <NavBtn link={'/wallets'} id={styles.reactHover} >
                     <Wallets className={styles.svg} />
                     Wallets
                  </NavBtn>
               </li>
               <li className={styles.item}>
                  <NavBtn link={'/profile'} id={styles.reactHover} >
                     <Profile className={styles.svg} />
                     Profile
                  </NavBtn>
               </li>
            </ul>
         </nav>


         <div className='hr'></div>
         <nav className={styles.nav}>
            <ul className={'navbar_left__list'}>
               <li className={styles.item}>
                  <NavBtn link={'/documentation'} id={styles.reactHover} >
                     <Help className={styles.svg} />
                     Doc
                  </NavBtn>
               </li>
               <li className={styles.item}>
                  <NavBtn onClick={logout} id={styles.reactHover} >
                     <LogOut className={styles.svg} />
                     Log Out
                  </NavBtn>
               </li>
            </ul>
         </nav>
      </div >
   )
}



import styles from './index.module.scss'
import NavBtn from '../UI/NavBtn'
import Dashboard from './icon/dashboard.svg'
import Markets from './icon/markets.svg'
import Transactions from './icon/transactions.svg'
import Profile from './icon/profile.svg'
import Setting from './icon/setting.svg'
import Help from './icon/help.svg'
import LogOut from './icon/log-out.svg'
import Logo from '../Logo'
import { singOut } from '../../utils.js/auth'
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { StoreContext } from '../../pages/_app'


function SideBar() {
   const { user, main } = useContext(StoreContext)

   const logout = async () => {
      const message = await singOut()
      user.outUser()
      main.pushAlert(message)
   }
   return (
      <div className='navbar_left'>
         <div className={styles.navbar_left__block}>
            <div className={styles.logo}>
               <Logo />
            </div>
            <nav className={styles.nav}>
               <ul className={'navbar_left__list'}>
                  <li className={styles.item}>
                     <NavBtn link={'/dashboard'} id={styles.reactHover} >
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
                     <NavBtn link={'/profile'} id={styles.reactHover} >
                        <Profile className={styles.svg} />
                        Profile
                     </NavBtn>
                  </li>
                  <li className={styles.item}>
                     <NavBtn link={'/setting'} id={styles.reactHover} >
                        <Setting className={styles.svg} />
                        Setting
                     </NavBtn>
                  </li>
               </ul>
            </nav>


            <div className='hr'></div>
            <nav className={styles.nav}>
               <ul className={'navbar_left__list'}>
                  <li className={styles.item}>
                     <NavBtn link={'/setting'} id={styles.reactHover} >
                        <Help className={styles.svg} />
                        Help
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
      </div >
   )
}


export default observer(SideBar)
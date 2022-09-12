import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { FetchAuth } from '../../http/fetch'
import { StoreContext } from '../../pages/_app'
import { Button_Blue, Button_Green } from '../UI/Forms/buttons'
import styles from './index.module.scss'

function AuthBtns() {
   const { main } = useContext(StoreContext)
   return (
      <div className={`${styles.block}  box s`}>
         <div className={styles.main}>
            <div className={styles.img}>
               <img src='/icon/unAuth.png' alt="" />
            </div>
            <Button_Green onClick={() => main.openLogin()}>singIn</Button_Green>
            <Button_Green onClick={() => main.openRegistration()}>singUp</Button_Green>
         </div>
      </div>
   )
}

export default observer(AuthBtns)
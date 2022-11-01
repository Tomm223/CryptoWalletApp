import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { StoreContext } from '@/pages/_app'
import { Button_Blue, Button_Green } from '../../../UI/form/buttons'
import styles from './index.module.scss'
import img from '@/assets/images/unAuth.png'
import Image from 'next/image'

function AuthBtns() {
   const { main } = useContext(StoreContext)
   return (
      <div className={`${styles.block}  box s`}>
         <div className={styles.main_btn}>
            <div className={styles.img_btn}>
               <Image src={img} />
            </div>
            <div className={styles.btns}>
               <Button_Green onClick={() => main.openLogin()}>singIn</Button_Green>
               <Button_Green onClick={() => main.openRegistration()}>singUp</Button_Green>
            </div>
         </div>
      </div>
   )
}

export default observer(AuthBtns)
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { StoreContext } from '@/pages/_app'
import { Button_Blue } from '../../../UI/form/buttons'
import { API_URL } from '@/http/index'
import styles from './index.module.scss'
import { useRouter } from 'next/router'
import Image from 'next/image'
import img from "@/assets/images/person-more.png"

function PersonBar({ avatar, name, lastname, email }) {

   const { main } = useContext(StoreContext)
   const router = useRouter()

   return (
      <div className={`${styles.block}  box s`}>
         <div className={styles.main}>
            <div className={styles.img}>
               <img src={API_URL + `/auth/img/${avatar}`} alt="" />
            </div>
            <div className={styles.name}>
               <p id={styles.name}>{name} {lastname}</p>
               <p id={styles.email}>{email}</p>
            </div>
         </div>
         <div onClick={() => main.setChecker('Вы действительно хотите перейти на страницу Profile', () => router.push('profile'))} className={styles.more}>
            <Image src={img} />
         </div>
      </div>
   )
}

export default observer(PersonBar)
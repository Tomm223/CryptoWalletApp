import { useOutSide } from '@/hooks/useOutSide'
import { useEffect } from 'react'
import SideBar from '../../SideBar'
import styles from './index.module.scss'
import Image from 'next/image'
import menu from '@/assets/images/menu.png'
import close from '@/assets/images/close.png'

export default function Burger({ isOpen, setIsOpen }) {

   const { isShow, ref } = useOutSide(true)

   useEffect(() => {
      if (!isShow) {
         setIsOpen(false)
      }
   }, [isShow])
   return (
      <>
         <div onClick={() => setIsOpen(true)} className={styles.block}>
            <Image src={menu} />
         </div>

         <div ref={ref} className={isOpen ? styles.modal_active : styles.modal}>
            <div className={styles.content}>
               <div className={styles.close} >
                  <Image onClick={() => setIsOpen(false)} src={close} />
               </div>
               <div className={styles.list}>
                  <SideBar />
               </div>
            </div>
         </div>
      </>
   )
}
import { useEffect } from 'react'
import { useRef } from 'react'
import { useOutSide } from '../../../hooks/useOutSide'
import styles from './index.module.scss'

export default function Modal({ children, toClose, ...args }) {
   console.log('args', args);
   const { isShow, ref, setIsShow } = useOutSide(true)
   useEffect(() => {
      console.log(isShow);
      if (!isShow) {
         console.log();
         if (toClose) {
            toClose()
         }
      }
   }, [isShow])

   return (
      <div {...args} ref={ref} className={styles.back}>
         <div className={styles.modal}>
            {children}
         </div>
      </div>
   )

}
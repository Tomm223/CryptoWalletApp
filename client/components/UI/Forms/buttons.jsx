import styles from './index.module.scss'

export function Button_Blue({ children, ...args }) {
   return (
      <button {...args} className={styles.btn}>
         {children}
      </button>
   )
}

export function Button_Green({ children, ...arg }) {

   return (
      <button {...arg} type='submit' className={styles.btn_green}>
         {children}
      </button>
   )
}
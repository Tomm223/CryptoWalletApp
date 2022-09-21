import styles from './index.module.scss'

export function Button_Blue({ children, onClick, ...args }) {
   const hund = (e) => {
      e.preventDefault()
      onClick()
   }
   return (
      <button onClick={hund} {...args} className={styles.btn}>
         {children}
      </button>
   )
}

export function Button_Green({ children, onClick, ...arg }) {
   const hund = (e) => {
      e.preventDefault()
      onClick()
   }
   return (
      <button onClick={hund} {...arg} type='submit' className={styles.btn_green}>
         {children}
      </button>
   )
}
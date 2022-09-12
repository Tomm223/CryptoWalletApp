import styles from './index.module.scss'


export function ButtonMore({ onClick }) {
   function hundle(e) {
      e.preventDefault()
      onClick()
   }
   return (
      <button onClick={hundle} className={styles.more}>
         <img className={styles.img} src="/icon/person-more.png" alt="" />
      </button>
   )
}
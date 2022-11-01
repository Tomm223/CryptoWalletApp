import styles from './index.module.scss'

export default ({ state: { isActive, setActive }, children }) => {

   return (
      <button
         onClick={() => setActive(!isActive)}
         className={isActive ? styles.checkbox_active : styles.checkbox}
      >
         {children}
      </button>
   )
}
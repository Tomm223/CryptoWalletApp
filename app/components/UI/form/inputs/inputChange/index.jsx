import styles from './index.module.scss'
import { useState } from 'react'

export default function InputChange({ defaultValue, onSubmit }) {
   const [value, setValue] = useState(defaultValue)
   function hundle(e) {
      e.preventDefault()

      onSubmit(value)
   }
   return (
      <div className={styles.input}>
         <input onChange={(e) => setValue(e.target.value)} value={value} className={styles.input__item} type="text" />
         <div className={styles.input__select}>
            <Button_Green onClick={hundle} >Change</Button_Green>
         </div>
      </div>
   )
}
import { ReactSelectNoSSR, SelectColors } from '../Select/index'
import { Button_Blue, Button_Green } from './buttons'
import styles from './index.module.scss'
import { useState } from 'react'

export function InputConvert({ list, isTarget, inputValue, setInputValue, selectValue, setSelectValue }) {

   return (
      <div className={styles.input}>
         <input
            value={inputValue}
            onChange={(e) => { if (setInputValue) setInputValue(e.target.value) }}
            disabled={isTarget}
            style={{ padding: '.9em 90px .9em .7em' }}
            className={styles.input__item}
            placeholder={isTarget ? 0.0043 : 100}
            type="number" />
         <div className={styles.input__select}>
            <ReactSelectNoSSR
               value={list.filter(i => i?.value === selectValue)}
               onChange={(e) => setSelectValue(e.value)}
               placeholder={isTarget ? 'deff' : 'need'}
               options={list}
               colorPrefix={isTarget ? SelectColors.brown : SelectColors.green}
            />
         </div>
      </div>
   )
}

export function InputForm({ onChange, ...args }) {

   return (
      <input {...args} className={styles.input__item} />
   )
}
export function InputChange({ defaultValue, onSubmit }) {
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
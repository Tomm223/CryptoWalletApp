import { ReactSelectNoSSR, SelectColors } from '../../Select'
import styles from './index.module.scss'


export default function InputConvert({ list, isTarget, selectDisabled, inputValue, setInputValue, selectValue, setSelectValue }) {

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
               disabled={selectDisabled}
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
import styles from './index.module.scss'


export function TextLoader({ children, font_size, ...args }) {

   return (
      <div style={{ fontSize: font_size ? font_size : 'inherit' }} {...args} className={styles.text}>
         {children}
      </div>
   )
}


export function BorderNumberLoader({ font_size, ...args }) {

   return (
      <div style={{ fontSize: font_size ? font_size : 'inherit' }} {...args} className={styles.border}>
         <div className={styles.border__text}>1223%</div>
      </div>
   )
}
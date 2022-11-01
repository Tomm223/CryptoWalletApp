import styles from './index.module.scss'

export default function InputForm({ ...args }) {

   return (
      <input {...args} className={styles.input} />
   )
}
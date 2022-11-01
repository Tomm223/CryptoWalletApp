import Chart from '@/assets/images/chart_loader.svg'
import styles from './index.module.scss'

export default function ChartLoader() {

   return (
      <div className={styles.block}>
         <Chart className={styles.svg} />
      </div>
   )
}
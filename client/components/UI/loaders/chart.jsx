import Chart from '../../../public/icon/chart_loader.svg'
import styles from './index.module.scss'

export default function ChartLoader() {

   return (
      <div className={styles.block}>
         <Chart className={styles.svg} />
      </div>
   )
}
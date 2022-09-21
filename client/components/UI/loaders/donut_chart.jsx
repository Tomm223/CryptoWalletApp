import Chart from '../../../public/icon/loader_donut_chart.svg'
import styles from './index.module.scss'

export default function DonutChartLoader() {

   return (
      <div className={styles.block}>
         <Chart className={styles.svg} />
      </div>
   )
}
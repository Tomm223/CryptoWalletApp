import { FetchWallet } from '@/service/fetch'
import { DonutChart, DonutsColors } from '../../charts/assets'
import ButtonMore from '../../../UI/form/inputs/InputMore'
import DonutChartLoader from '../../../UI/loaders/donut_chart'
import Spinner from '../../../UI/loaders/Spinner'
import styles from './index.module.scss'


export default function Assets({ data, isLoading, loader, isAuth }) {

   return (
      <div className={`${styles.block} box s`}>
         <div className={styles.header}>
            <h3 className={styles.header__title}>Assets</h3>
            <ButtonMore />
         </div>
         <div className={styles.chart}>
            {
               isAuth ?
                  data.length ?
                     <DonutChart
                        data={data}
                        height={150}
                        width={250}
                        innerRadius={50}
                     />
                     :
                     isLoading ?
                        <DonutChartLoader />
                        :
                        loader ?
                           <Spinner />
                           :
                           <div className={styles.unHave}>You don`t have wallets</div>
                  :
                  <div className={styles.unHave}>You don`t have account</div>
            }
         </div>
         <div className={styles.chart_info}>
            <ul className={styles.chart_info__list}>
               {data.map((item, index) => {
                  return (
                     <div key={item + index} className={styles.chart_info__item}>
                        <div style={{ backgroundColor: DonutsColors[index] }} className={styles.chart_info__color}></div>
                        <p className={styles.chart_info__name}>{item.name}</p>
                     </div>
                  )
               })}
            </ul>
         </div>
      </div>
   )
}






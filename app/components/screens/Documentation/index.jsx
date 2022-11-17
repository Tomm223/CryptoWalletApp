import MainLayout from "@/components/layout/MainLayuot";
import screen from '@/assets/images/screen_help.png'
import screen2 from '@/assets/images/screen_help2.png'
import styles from './index.module.scss'
import Image from "next/image";

export default function Documentation() {

   return (
      <MainLayout>
         <div className={styles.main}>
            <div className={styles.title}>
               <h1>Краткая докуметация по использованию</h1>
            </div>
            <div className={styles.title_link}>
               <a className={styles.link} href="https://github.com/Tomm223/CryptoWalletApp">#Ссылка на полную докуметацию</a>
            </div>
            <article className={styles.title_sup}>
               Сайт представляет из себя своего рода криптовалютный кошелек.  <br />
               Полностью имитирует функциональность настоящего кошелька, единственное отличие не нужно пользоваться настоящими
               средствами. Все данные и отчетности реальны и обновляются от 2 до 5 мин взависимости от их целей.</article>
            <div className={styles.acc}>
               <div className={styles.acc__title}>
                  <div className={styles.circle}></div>
                  <h2>Как сделать на мой аккаунт, чтобы быстрее начать пользоваться сервисом</h2>
               </div>
               <ul className={styles.acc__list}>
                  <li className={styles.acc__item}>
                     <span>#1</span>
                     <p>Нажмите на кнопку зарегестрироваться, которая находиться на верхней панели справа</p>
                     <div></div>
                     <div className={styles.acc__img}>
                        <Image src={screen} />
                     </div>
                  </li>

                  <li className={styles.acc__item}>
                     <span>#2</span>
                     <p>Появится окно с быстрым переходом на мой аккаунт. Нажмите "Ok"</p>
                     <div></div>
                     <div className={styles.acc__img}>
                        <Image src={screen2} />
                     </div>
                  </li>
                  <li className={styles.acc__item}><span>#3</span> <p>Теперь вы можете заходить на любую страницу с полным доступом</p></li>
               </ul>
            </div>

         </div>
      </MainLayout >

   )
} 
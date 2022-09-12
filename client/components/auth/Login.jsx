
import { Button_Blue } from "../UI/Forms/buttons";
import { InputForm } from "../UI/Forms/inputs";
import Modal from "../UI/Modal";
import styles from './index.module.scss'

function Login({ onSubmit, linkSecondWindow, unAuth }) {

   const toReg = (e) => {
      e.preventDefault()
      linkSecondWindow()
   }
   const toUnAuth = (e) => {
      e.preventDefault()
      unAuth()
   }

   function hundle(e) {
      e.preventDefault()
      const email = e.target.email.value
      const password = e.target.password.value
      onSubmit({ email, password })
      e.target.password.value = ''
      e.target.email.value = ''
   }



   return (
      <Modal>
         <div className={styles.main}>
            <div className={styles.head}>
               <p className={styles.head__label}>Sing In</p>
            </div>
            <form onSubmit={hundle} className={styles.form}>
               <div className={styles.form__item}>
                  <InputForm name='email' placeholder={'email'} />
               </div>
               <div className={styles.form__item}>
                  <InputForm name='password' type={'password'} placeholder={'password'} />
               </div>
               <div className={styles.form__item}>
                  <Button_Blue>
                     Send
                  </Button_Blue>
               </div>
            </form>
            <div className={styles.supp}>
               <a onClick={toReg} href="#">Route to  <span className={styles.supp__link}>Registration</span></a>
            </div>
            <div className={styles.supp}>
               <a onClick={toUnAuth} className={styles.supp__link} href="#"> continue without authorization</a>
            </div>
         </div>
      </Modal>
   )
}

export default Login
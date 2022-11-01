import Modal from "../../../UI/Modal";
import styles from './index.module.scss'
import Form, { typesInput } from '../../forms_constructor/FormConstructor'
import { validationYupLogin } from "@/components/shared/forms_constructor/validation";
import { useState } from "react";


function Login({ onSubmit, linkSecondWindow, unAuth, toClose }) {

   const toReg = (e) => {
      e.preventDefault()
      linkSecondWindow()
   }
   const toUnAuth = (e) => {
      e.preventDefault()
      toClose()
   }

   const [error, setError] = useState('')
   async function hundle({ email, password }) {
      const message = await onSubmit({ email, password })
      setError(message)
   }
   const state = {
      email: '',
      password: ''
   }


   return (
      <Modal toClose={toClose}>
         <div className={styles.main}>
            <div className={styles.head}>
               <p className={styles.head__label}>Sing In</p>
            </div>
            <Form
               error={error}
               onSubmit={hundle}
               state={state}
               validate={validationYupLogin}
            />
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
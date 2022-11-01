import Modal from "../../../UI/Modal";
import styles from './index.module.scss'
import Form, { typesInput } from '../../forms_constructor/FormConstructor'
import { validationYupRegistration } from "@/components/shared/forms_constructor/validation";
import { useState } from "react";

function Registration({ onSubmit, linkSecondWindow, unAuth, toClose }) {

   const toLogin = (e) => {
      e.preventDefault()
      linkSecondWindow()
   }
   const toUnAuth = (e) => {
      e.preventDefault()
      toClose()
   }
   const [error, setError] = useState('')
   async function hundle({ email, password, username, lastname }) {
      const message = await onSubmit({ email, password, username, lastname })
      setError(message)
   }
   const state = {
      email: '',
      username: '',
      lastname: '',
      password: ''
   }



   return (
      <Modal toClose={toClose}>
         <div className={styles.main}>
            <div className={styles.head}>
               <p className={styles.head__label}>Registration</p>
            </div>
            <div className={styles.form}>
               <Form
                  error={error}
                  onSubmit={hundle}
                  state={state}
                  validate={validationYupRegistration}
               />
            </div>
            <div className={styles.supp}>
               <a onClick={toLogin} href="#">Route to  <span className={styles.supp__link}>Sing In</span></a>
            </div>
            <div className={styles.supp}>
               <a onClick={toUnAuth} className={styles.supp__link} href="#"> continue without authorization</a>
            </div>
         </div>
      </Modal>
   )
}

export default Registration

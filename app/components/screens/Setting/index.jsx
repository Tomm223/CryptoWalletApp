import styles from './index.module.scss'
import MainLayout from '@/components/layout/MainLayuot'
import { ReactSelectNoSSR, SelectColors } from '@/components/UI/form/Select/index'
import { useContext, useEffect, useMemo, useState } from 'react'
import InputForm from '@/components/UI/form/inputs/InputForm'
import { Button_Blue } from '@/components/UI/form/buttons'
import { observer } from 'mobx-react-lite'
import { StoreContext } from '@/pages/_app'
import Form from '@/components/shared/forms_constructor/Form&ReactSelect'
import { AuthContext } from '@/context/AuthContainer'
import { validationSettingForm } from '@/components/shared/forms_constructor/validation'
import { AlertTemplate } from '@/components/shared/Alert/item'
import { API_URL } from '@/http/index'
import Image from 'next/image'
import plus from '@/assets/images/plus.png'

function Setting() {

   // user inputs
   const { user, main } = useContext(StoreContext)
   const [stateForm, setStateForm] = useState(null)
   useEffect(() => {
      if (user.email.length) {
         setStateForm({
            email: user.email,
            select: user.currency.value,
            username: user.username,
            lastname: user.lastname,
            password: '' //user.password  Пока что с сервера приходит захешированный пароль
         })
      }
   }, [user.email])


   //select Currceny
   const [curr_value, setCurr_value] = useState('')
   useEffect(() => {
      if (user.currency.value) {
         setCurr_value(user.currency.value)
      }
   }, [user.currency.value])
   const [options, setOptions] = useState([])
   useEffect(() => {
      const getOpt = async () => {
         const resp = await fetch('api/currency/option')
         const opt = await resp.json()
         setOptions(opt)
      }
      getOpt()
   }, [])

   const { changeUser } = useContext(AuthContext)

   const [error, setError] = useState('')
   const saveChange = async (body) => {
      const message = await changeUser(body)
      setError(message)
   }
   const saveChange_check = async ({ email, password, username, lastname, select }) => {
      const body = { email, username, lastname }
      if (password.length) {
         body.password = password
      }
      const currency = await options.find(i => i.value == select)
      body.currency = currency
      main.setChecker('Are you sure you want to change your details ', async () => await saveChange(body))
   }
   console.log(user);


   return (
      <MainLayout>
         <main className={`${styles.block} main`}>
            <div className={styles.block__head}>
               <div className={styles.block__img}>
                  <div className={styles.block__img_plus}>
                     <div>
                        <Image src={plus} />
                     </div>
                  </div>
                  <img className={styles.block__img_item} src={API_URL + `/auth/img/${user.avatar_link}`} alt="" />
               </div>
            </div>
            <div className={styles.block__main}>
               {
                  stateForm ?
                     <Form
                        formClass={styles.form}
                        inputsBlockClass={styles.form__block}
                        error={error}
                        onSubmit={saveChange_check}
                        state={stateForm}
                        validate={validationSettingForm}
                        select={{ options }}
                     />
                     :
                     <></>
               }
            </div>
         </main >
      </MainLayout >
   )
}

export default observer(Setting)

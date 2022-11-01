import { Formik } from 'formik'
import { useEffect, useState } from 'react'
import { Button_Blue } from '../../UI/form/buttons'
import Input from './items/input'
import styles from './index.module.scss'
import Select from './items/select'

class typesInputs {
   email = 'email'
   password = 'password'
   username = 'username'
   lastname = 'lastname'
   select = 'select'
   constructor() {
      this.password = this.password
      this.username = this.username
      this.email = this.email
      this.lastname = this.lastname
      this.select = this.select
   }
}
export const typesInput = new typesInputs()

const FormSettingPage = ({ state, validate, onSubmit, error, select: { options }, formClass, inputsBlockClass }) => {

   const [arrParams, setArrParams] = useState([])
   useEffect(() => {
      const arr = []
      for (var key in state) {
         arr.push(key)
      }
      setArrParams(arr)
   }, [state])


   return (
      <Formik
         initialValues={state}
         validationSchema={validate}
         validateOnBlur
         onSubmit={onSubmit}
      >
         {({ values, errors, touched, isValid, handleBlur, handleChange, handleSubmit, setFieldValue, dirty }) => (

            <form onSubmit={handleSubmit} className={formClass || styles.form} >
               <ul className={inputsBlockClass || styles.form__block}>
                  {arrParams &&
                     arrParams.map((item) => {

                        if (item == typesInput.select) {
                           return (
                              <div key={item} className={styles.form__item}>
                                 <Select
                                    onChange={value => setFieldValue(item, value.value)}
                                    options={options}
                                    value={values[item]}
                                    name={item}
                                 />
                              </div>
                           )
                        }
                        return (
                           <div key={item} className={styles.form__item}>
                              <Input
                                 key={item}
                                 state={{ errors, handleBlur, handleChange, touched, values, dirty }}
                                 value={{
                                    type: item === typesInput.password ? 'password' : "text",
                                    keyFormik: item,
                                    placeHolder: `${item.toLowerCase()}`,
                                 }}
                              />
                           </div>
                        )
                     })
                  }
               </ul>
               <div className={styles.form__btn}>
                  <Button_Blue type="submit" disabled={!dirty && !Object.keys(errors).length}>Submit</Button_Blue>
               </div>
               {
                  error ?
                     <div className={styles.form__item}>
                        <p className={styles.form_error}>
                           {error}
                        </p>
                     </div>
                     :
                     <></>
               }

            </form>
         )}

      </Formik>
   )
}

export default FormSettingPage
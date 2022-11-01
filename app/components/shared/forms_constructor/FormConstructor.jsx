import { Formik } from 'formik'
import { useEffect, useState } from 'react'
import { Button_Blue } from '../../UI/form/buttons'
import Input from './items/input'
import styles from './index.module.scss'

class typesInputs {
   email = 'email'
   password = 'password'
   username = 'username'
   lastname = 'lastname'
   constructor() {
      this.password = this.password
      this.username = this.username
      this.email = this.email
      this.lastname = this.lastname
   }
}
export const typesInput = new typesInputs()
const Form = ({ state, validate, onSubmit, error, formClassName }) => {
   // touched = boolean | работали ли мы уже с этой формой
   // dirty = boolean | изменялись ли значения в форме 
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

            <form onSubmit={handleSubmit} className={formClassName || ''} >
               {arrParams &&
                  arrParams.map((item) => {
                     return (
                        <div key={item} className={styles.form__item}>
                           <Input
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
               <div className={styles.form__item}>
                  <Button_Blue key={'btn'} type="submit" disabled={!dirty && !Object.keys(errors).length}>Submit</Button_Blue>
               </div>
               {
                  error ?
                     <div key={'err'} className={styles.form__item}>
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

export default Form

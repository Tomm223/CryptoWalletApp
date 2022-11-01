import InputForm from "@/components/UI/form/inputs/InputForm"
import styles from '../index.module.scss'

export default ({ value, state }) => {
   const { type, keyFormik, placeHolder } = value
   const { values, handleBlur, handleChange, touched, errors } = state

   return (
      <>
         <InputForm type={type} name={keyFormik} onChange={handleChange}
            onBlur={handleBlur} value={values[keyFormik]} placeholder={placeHolder} />

         {touched[keyFormik] && errors[keyFormik] &&
            <p className={styles.form_error}>{errors[keyFormik]}</p>
         }
      </>
   )
}
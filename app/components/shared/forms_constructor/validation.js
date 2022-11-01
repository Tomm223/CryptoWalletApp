import * as yup from 'yup'

function checkDef(message) {
   return this.test("isValidCountry", message, function (value) {
      const { path, createError } = this

      if (!value) {
         return createError({ path, message: message ?? 'Поле Обязательно к заполнению' });
      }

      if (value.length < 3) {
         return createError({ path, message: message ?? 'Минимум 3 символа' });
      }

      if (value.length > 40) {
         return createError({ path, message: message ?? 'Максимум 20 символов' })
      }

      return true;
   });
}
function validString(message) {
   return this.test("isValidString", message, function (value) {
      const { path, createError } = this
      let isNumber = false
      value?.split('').every(i => {
         const condidate = parseFloat(i)
         if (condidate) {
            isNumber = true
            return false
         }
         isNumber = false
         return true
      })
      if (isNumber) {
         return createError({ path, message: message ?? 'Поле не должно содержать цифры' });
      }
      return true;
   });
}
yup.addMethod(yup.string, "checkValidString", validString);
yup.addMethod(yup.string, "checkDefMethod", checkDef);

const passwordCheck = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/

const Validateschema = {
   name: yup.string()
      .min(3, 'A minimum of 3 characters is required')
      .max(40, 'Maximum allowed characters is 40')
      .checkDefMethod()
      .required('Please fill out this field'),
   name: yup.string()
      .checkDefMethod()

}

export const validationYupRegistration = yup.object().shape({
   username: yup.string().checkDefMethod().checkValidString(),
   lastname: yup.string().checkDefMethod().checkValidString(),
   email: yup.string().email().required('Обязательно к заполнению'),
   password: yup.string().required('Обязательно к заполнению').matches(passwordCheck, 'Пароль должен содержать: cтрочные и прописные латинские буквы, цифры и/или спецсимволы. Минимум 8 символов'),
})
export const validationYupLogin = yup.object().shape({
   email: yup.string().email().required('Обязательно к заполнению'),
   password: yup.string().required('Обязательно к заполнению').matches(passwordCheck, 'Пароль должен содержать: cтрочные и прописные латинские буквы, цифры и/или спецсимволы. Минимум 8 символов'),
})
export const validationSettingForm = yup.object().shape({
   username: yup.string().checkDefMethod().checkValidString(),
   lastname: yup.string().checkDefMethod().checkValidString(),
   email: yup.string().email().required('Обязательно к заполнению'),
   password: yup.string().matches(passwordCheck, 'Пароль должен содержать: cтрочные и прописные латинские буквы, цифры и/или спецсимволы. Минимум 8 символов'),
})

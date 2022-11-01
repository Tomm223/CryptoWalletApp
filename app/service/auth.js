import { FetchAuth } from './fetch'
import cookie from 'js-cookie'


export const getUser = async (userId) => {
   try {
      const resp = await FetchAuth.getUser(userId)
      if (resp?.message) {
         return resp.message
      }
      else {
         return resp
      }
   }
   catch (e) {
      return e.response.data.message
   }

}

export const singUp = async ({ email, password, username, lastname }) => {
   try {
      const resp = await FetchAuth.registration({ email, password, username, lastname })
      if (resp?.message) {
         return resp.message
      }
      else {
         cookie.set('token', resp.token, { expires: 1 })
         return resp.user
      }
   }
   catch (e) {
      return e.response.data.message
   }
}
export const updateUser = async ({ username, lastname, email, avatar_link, currency, password }) => {
   try {
      const resp = await FetchAuth.userChange({ username, lastname, email, avatar_link, currency, password })
      if (resp?.message) {
         return resp.message
      }
      else {
         cookie.set('token', resp.token, { expires: 1 })
         return resp.user
      }
   }
   catch (e) {
      console.log(e.response.data.message);
      return e.response.data.message
   }
}
export const singIn = async ({ email, password }) => {
   try {
      const resp = await FetchAuth.login({ email, password })
      if (resp?.message) {
         return resp.message
      }
      else {
         cookie.set('token', resp.token, { expires: 1 })
         return resp.user
      }
   }
   catch (e) {
      return e.response.data.message
   }
}
export const singOut = async () => {
   try {
      const resp = await FetchAuth.logout()
      cookie.remove('token')
      return resp.message
   }
   catch (e) {
      console.log('errors', e);
      return e.response.data.message
   }
}

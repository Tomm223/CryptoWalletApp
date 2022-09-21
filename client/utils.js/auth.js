import { FetchAuth } from '../http/fetch'
import cookie from 'js-cookie'

export const singUp = async ({ email, password, username, lastname }) => {
   try {
      const resp = await FetchAuth.registration({ email, password, username, lastname })
      cookie.set('token', resp.token, { expires: 1 })
      return resp.user
   }
   catch (e) {
      return e.response.data.message
   }
}
export const singIn = async ({ email, password }) => {
   try {
      const resp = await FetchAuth.login({ email, password })
      cookie.set('token', resp.token, { expires: 1 })
      return resp.user
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
      return e.response.data.message
   }
}

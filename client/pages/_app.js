import '../styles/globals.scss'
import '../styles/alert.scss'
import '../styles/select.scss'
import '../styles/reset.css'
import { useState, createContext, useEffect } from 'react'
import { store } from '../store'
import { API_URL, Intercaptors } from '../http'
import io from 'socket.io-client'
import { useRouter } from 'next/router'
import AuthWindowContainer from '../components/auth'
import SocketLogic from '../socket'
import cookie from 'js-cookie'

export const StoreContext = createContext(store)


export const SocketContext = createContext()



function MyApp({ Component, pageProps }) {

  const [socket, setSocket] = useState(null);
  const [socketConnected, setSocketConnected] = useState(false);
  const router = useRouter()
  function refetchSocket() {
    console.log('refetch ?');
    setSocket(
      io(API_URL, {
        auth: {
          token: cookie.get('token')
        }
      })
    )
  }
  useEffect(() => {
    setSocket(
      io(API_URL, {
        auth: {
          token: cookie.get('token')
        }
      })
    )
    // if (router.pathname = '/') {
    //  router.push('/dashboard')
    //}
  }, [])
  useEffect(() => {
    if (!socket) return;
    if (!socketConnected) {
      socket.on('connect', () => {
        setSocketConnected(socket.connected);
        socket.on('disconnect', () => {
          setSocketConnected(socket.connected)
        })
        socket.emit('cn', { msg: 'hello' })
      })
    }
  }, [socket])


  return (
    <StoreContext.Provider value={store}>
      <SocketContext.Provider value={{
        socket, socketConnected, refetchSocket
      }}>
        <Intercaptors>
          <AuthWindowContainer>
            <SocketLogic>
              <Component {...pageProps} />
            </SocketLogic>
          </AuthWindowContainer>
        </Intercaptors>
      </SocketContext.Provider>
    </StoreContext.Provider>
  )
}

export default MyApp



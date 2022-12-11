import '@/assets/styles/globals.scss'
import '@/assets/styles/alert.scss'
import '@/assets/styles/select.scss'
import '@/assets/styles/reset.css'
import { useState, createContext, useEffect, useContext } from 'react'
import { store } from '@/store/index'
import $api, { API_URL, Intercaptors } from '@/http/index'
import io from 'socket.io-client'
import { useRouter } from 'next/router'
import AuthContainer from '@/context/AuthContainer'
import SocketProvider from '@/context/SocketProvider'
import cookie from 'js-cookie'
import WalletProvider from '@/context/WalletProvider'
import axios from 'axios'

export const StoreContext = createContext(store)


export const SocketContext = createContext()


function MyApp({ Component, pageProps }) {
  const { dashboard } = useContext(StoreContext)
  useEffect(() => {
  }, [dashboard.chart.chart_data])

  const [socket, setSocket] = useState(null);
  const [socketConnected, setSocketConnected] = useState(false);
  const router = useRouter()
  function refetchSocket() {
    setSocket(value => null)
    setSocket(value =>
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
  }, [])

  useEffect(() => {
    console.log(socket);
    if (!socket) {
      setSocketConnected(false)
      return
    };
    if (!socketConnected) {
      socket.on('connect', () => {
        setSocketConnected(socket.connected);
        socket.on('disconnect', () => {
          setSocketConnected(socket.connected)
        })
      })
    }
  }, [socket])


  return (
    <StoreContext.Provider value={store}>
      <SocketContext.Provider value={{
        socket, socketConnected, refetchSocket
      }}>
        <Intercaptors>
          <AuthContainer>
            <SocketProvider>
              <WalletProvider>
                <Component {...pageProps} />
              </WalletProvider>
            </SocketProvider>
          </AuthContainer>
        </Intercaptors>
      </SocketContext.Provider>
    </StoreContext.Provider>
  )
}

export default MyApp



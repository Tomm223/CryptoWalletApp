import { observer } from "mobx-react-lite";
import styles from './index.module.scss'
import { useContext, useEffect, useState } from "react";
import { StoreContext } from "@/pages/_app";
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { ErrorTemplate, AlertTemplate } from "./item";

export const MessageAlert = observer(() => {
   const { main } = useContext(StoreContext)
   return (
      <>
         <TransitionGroup className={'alert_transition'} >
            {
               main.alert.map(({ message, id }) => {
                  setTimeout(() => {
                     main.deleteAlert(id)
                  }, 5000)
                  return (<CSSTransition
                     key={id}
                     timeout={500}
                     appear={true}
                     classNames={'alert'}
                  >
                     <AlertTemplate>
                        {message}
                     </AlertTemplate>
                  </CSSTransition>)
               })
            }
         </TransitionGroup >
      </>
   )
})

export const ErrorAlert = observer(() => {

   const { main } = useContext(StoreContext)

   return (
      <>
         <TransitionGroup className={'alert_transition_error'} >
            {
               main.error.map(({ message, id }) => {
                  setTimeout(() => {
                     main.deleteError(id)
                  }, 7000)
                  return (<CSSTransition
                     key={id}
                     timeout={500}
                     appear={true}
                     classNames={'alert'}
                  >
                     <ErrorTemplate>
                        {message}
                     </ErrorTemplate>
                  </CSSTransition>)
               })
            }
         </TransitionGroup >
      </>

   )
})





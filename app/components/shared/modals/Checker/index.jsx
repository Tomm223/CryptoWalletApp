import { Button_Blue, Button_Green } from "../../../UI/form/buttons"
import Modal from "../../../UI/Modal"
import styles from './index.module.scss'

const Checker = ({ str, toContinue, toClose }) => {
   async function hundle(contin) {
      toClose()
      if (contin) {
         await toContinue()
      }
   }

   return (
      <Modal style={{ zIndex: '7777' }}>
         <div className={styles.main}>
            <p className={styles.main__string}>{str}</p>
         </div>
         <div className={styles.footer}>
            <div></div>
            <div>
               <Button_Green style={{ backgroundColor: '#EB4F44', fontSize: '16px', padding: '10px 20px' }}
                  onClick={async () => await hundle()}
               >Cancel</Button_Green>
            </div>
            <Button_Green style={{ fontSize: '16px', padding: '10px' }} onClick={async () => await hundle(true)}>Ok</Button_Green>
         </div>
      </Modal>
   )
}

export default Checker
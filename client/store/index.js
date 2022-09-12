import marketStore from './market'
import walletStore from './wallet'
import HistoryStore from './history'
import DashboardStore from './dashboard'
import UserStore from './user'
import MainStore from './main'
export const store = {
   market: marketStore,
   wallet: walletStore,
   history: HistoryStore,
   dashboard: DashboardStore,
   user: UserStore,
   main: MainStore
}
import { useContext, useEffect, useReducer, useState } from 'react'
import MainLayout from '@/components/layout/MainLayuot'
import { ItemMarketPage as Item } from 'app/assets/styledComponents/Items'
import styles from './index.module.scss'
import { observer } from 'mobx-react-lite'
import { SocketContext, StoreContext } from '@/pages/_app'
import List from './list'
import Spinner from '@/components/UI/loaders/Spinner'
import CreateWalletModal from '@/components/shared/modals/wallet/createWallet'
import { WalletContext } from '@/context/WalletProvider'
import Pagination from '@/components/shared/Pagination'
import { useMemo } from 'react'
import { useMediaQuery } from 'react-responsive'
import { SubtitleMarketPage, SubtitleMarketPage_mobile, SubtitleMarketPage_table } from './items'
import ListMobile from './list_mobile'

function MarketPage() {

  const { market, user, main } = useContext(StoreContext)
  const { socket, socketConnected } = useContext(SocketContext)
  // load data
  useEffect(() => {
    if (!socket || !socketConnected) return;
    if (market.list.length) return
    socket.emit('market', { page: market.page, limit: market.limit, currency: user.currency.value })
  }, [socketConnected])

  function hundleChangePage(pageNum) {
    market.setPage(pageNum)
    socket?.emit('market', { page: market.page, limit: market.limit, currency: user.currency.value })
  }

  // logic buy coins
  const { createWallet, removeWallet } = useContext(WalletContext)
  const [bodyModal, setBodyModal] = useState(false)

  const toBuyModal = (body) => {
    if (user.isAuth) {
      setBodyModal(body)
    }
    else {
      main.openLogin()
    }
  }
  const hundleBuy_check = (amount) => {
    main.setChecker(`Are you sure you want to buy a ${amount} ${bodyModal.coin.symbol}`, () => hundleBuy(amount))
  }
  async function hundleBuy(amount) {
    await createWallet({ amount, coin: bodyModal.coin, userId: user.id })
    setBodyModal(false)
  }
  const items = useMemo(() => {
    const result = []
    for (var i = 1; i <= market.total_page; i++) {
      result.push(i)
    }
    return result
  }, [market.total_page])
  // responsive
  const isMobile = useMediaQuery({ query: '(max-width: 1048px)' })

  const subTitleHeight = 33
  const itemHeight = 80
  const widthRightSide = 800
  const widthLeftSide = 200

  return (
    <MainLayout>
      <main className={`${styles.main} main`}>
        <div className={styles.header}>
          <div className={styles.header__head}>
            <article className={styles.header__article}>Markets</article>
            <div className={styles.header__paginate}>
              <Pagination
                items={items}
                page={market.page}
                setPage={(value) => hundleChangePage(value)}
              />
            </div>
          </div>
          {
            !isMobile && market.list.length ?
              <div className={styles.header__sup}>
                <SubtitleMarketPage />
              </div>
              :
              <></>
          }
        </div>
        <div className={styles.block}>
          {
            market.list.length ?
              !isMobile ?
                <List
                  currency={user.currency.label}
                  list={market.sortSearch}
                  toBuy={toBuyModal}
                />
                :
                <ListMobile
                  list={market.sortSearch}
                  currency={user.currency.label}
                  toBuy={toBuyModal}
                  sizes={{
                    amountItems: market.limit,
                    itemHeight: 80,
                    subTitleHeight,
                    widthLeftSide,
                    widthRightSide
                  }}
                />
              : <div className={'spinner_center'}>
                <Spinner />
              </div>
          }
        </div>

        {
          bodyModal ?
            <CreateWalletModal
              coin={{
                coin_label: bodyModal.coin.symbol,
                coin_price: bodyModal.coin.price,
                coinId: bodyModal.coin.coinId
              }}
              currcency={{
                curr_label: user.currency.label,
                curr_value: user.currency.value
              }}
              onSubmit={(amount) => hundleBuy_check(amount)}
              toClose={() => setBodyModal(false)}
            /> :
            <></>
        }
      </main>
    </MainLayout>

  )
}

export default observer(MarketPage)

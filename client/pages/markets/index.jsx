import { useContext, useEffect, useReducer, useState } from 'react'
import MainLayout from '../../components/MainLayuot'
import { ItemMarketPage as Item } from '../../components/UI/BlockList/Items'
import Search from '../../components/UI/Search'
import styles from './index.module.scss'
import { observer } from 'mobx-react-lite'
import { SocketContext, StoreContext } from '../_app'
import List from './list'
import { debounce } from 'lodash'
import Spinner from '../../components/UI/loaders/Spinner'

function MarketPage() {

  const { market, user } = useContext(StoreContext)
  const { socket, socketConnected } = useContext(SocketContext)
  useEffect(() => {
    market.setIsFetch(true)
    return () => {
      market.setIsFetch(false)
    }
  }, [])
  useEffect(() => {
    if (!socket || !socketConnected) return;

    console.log(socketConnected);
    socket.emit('market', { page: market.page, limit: market.limit, currency: user.currency.value })
    console.log('start fetch');
    /*socket.on('check_market', () => {
      if (market.isfetched) {
        socket.emit('market', { page: market.page, limit: market.limit, currency: user.currency.value })
      }
    })
    socket.on('market', (data) => {
      market.refresh(data)
    })*/
  }, [socketConnected])

  useEffect(() => {
    if (market.list.length) {
      socket.emit('market', { page: market.page, limit: market.limit, currency: user.currency.value })
    }
  }, [market.page, market.limit])




  const item = {
    "id": "ethereum",
    "symbol": "eth",
    "name": "Ethereum",
    "image": "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    "current_price": 1886.23,
    "market_cap": 226391027867,
    "market_cap_rank": 2,
    "fully_diluted_valuation": null,
    "total_volume": 16076874707,
    "high_24h": 1928.24,
    "low_24h": 1864.76,
    "price_change_24h": -17.0,
    "price_change_percentage_24h": -0.8984,
    "market_cap_change_24h": -2591004508.1,
    "market_cap_change_percentage_24h": -1.1,
    "circulating_supply": 120117268.627605,
    "total_supply": 120117268.627605,
    "max_supply": null,
    "ath": 4878.26,
    "ath_change_percentage": -61.375,
    "ath_date": "2021-11-10T14:24:19.604Z",
    "atl": 0.432979,
    "atl_change_percentage": 435077.85571,
    "atl_date": "2015-10-20T00:00:00.000Z",
    "roi": {
      "times": 103.88875037689154,
      "currency": "btc",
      "percentage": 10388.875037689155
    },
    "last_updated": "2022-08-16T08:02:22.094Z",
    "price_change_percentage_14d_in_currency": 3.3,
    "price_change_percentage_1h_in_currency": 0.3,
    "price_change_percentage_1y_in_currency": -48.7,
    "price_change_percentage_200d_in_currency": -35.3,
    "price_change_percentage_24h_in_currency": -0.0,
    "price_change_percentage_30d_in_currency": 13.7,
    "price_change_percentage_7d_in_currency": 1.2
  }

  return (
    <MainLayout>
      <main className={`${styles.main} main`}>
        <div className={styles.header}>
          <div className={styles.header__head}>
            <article onClick={() => market.setPage(1)} className={styles.header__article}>Markets</article>
            <Search onChange={(word) => debounce(() => market.setSearch(word), 500)} placeholder='Crypto Name' />
          </div>
          <div className={styles.header__sup}>
            <Item>
              <p className={styles.list__sup}>#</p>
              <p className={styles.list__sup}>Coin</p>
              <p className={styles.list__sup}>Buy</p>
              <p className={styles.list__sup}>Price</p>
              <p className={styles.list__sup} >1h</p>
              <p className={styles.list__sup}>24h</p>
              <p className={styles.list__sup}>7day</p>
              <p className={styles.list__sup}>Mkt Cap</p>
              <p className={styles.list__sup}>Mkt-C 24h</p>
              <p className={styles.list__sup}>7day</p>
            </Item>
          </div>
        </div>
        <div className={styles.block}>
          {
            market.list.length ?
              <List market={market} currency={user.currency.label} />
              : <div className={'spinner_center'}>
                <Spinner />
              </div>
          }
        </div>

      </main>
    </MainLayout>

  )
}

export default observer(MarketPage)

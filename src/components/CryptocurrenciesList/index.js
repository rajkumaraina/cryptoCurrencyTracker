import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {currencyList: [], isLoading: true}

  componentDidMount = () => {
    this.getCurrencyListData()
  }

  getCurrencyListData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)
    const updatedData = data.map(each => ({
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      currencyLogo: each.currency_logo,
      euroValue: each.euro_value,
      id: each.id,
    }))
    this.setState({currencyList: updatedData, isLoading: false})
  }

  render() {
    const {currencyList, isLoading} = this.state
    return isLoading ? (
      <div data-testid="loader">
        <Loader type="Rings" color="#ffffff" height={80} width={80} />
      </div>
    ) : (
      <div className="listContainer">
        <h1 className="currencyHeading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="mainImg"
        />
        <ul className="unordered">
          <li className="listItemFirst">
            <div className="listType">
              <p className="typeName">Coin Type</p>
            </div>
            <div className="Values">
              <div className="numbers">
                <p className="typeName">USD</p>
              </div>
              <div className="numbers">
                <p className="typeName">EURO</p>
              </div>
            </div>
          </li>
          {currencyList.map(each => (
            <CryptocurrencyItem item={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default CryptocurrenciesList

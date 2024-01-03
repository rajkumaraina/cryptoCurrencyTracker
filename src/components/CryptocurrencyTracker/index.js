import {Component} from 'react'

import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {}

  render() {
    return (
      <div className="Maincontainer">
        <CryptocurrenciesList />
      </div>
    )
  }
}
export default CryptocurrencyTracker

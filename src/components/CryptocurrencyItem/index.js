import './index.css'

const CryptocurrencyItem = props => {
  const {item} = props
  const {currencyName, usdValue, currencyLogo, id, euroValue} = item
  return (
    <li className="listItem">
      <div className="coinType">
        <img src={currencyLogo} alt={currencyName} className="currencyImg" />
        <p className="para">{currencyName}</p>
      </div>
      <div className="Values">
        <div className="numbers">
          <p className="para">{usdValue}</p>
        </div>
        <div className="numbers">
          <p className="para">{euroValue}</p>
        </div>
      </div>
    </li>
  )
}
export default CryptocurrencyItem

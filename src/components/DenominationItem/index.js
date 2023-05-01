// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominator, withdraw} = props
  const {value} = denominator
  const onWithdraw = () => {
    withdraw(value)
  }
  return (
    <li className="list-styles">
      <button type="button" className="button" onClick={onWithdraw}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem

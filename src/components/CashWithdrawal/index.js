// Write your code here

import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {withDrawAmount: 2000}

  onStatusWithdraw = value => {
    this.setState(prevState => ({
      withDrawAmount: prevState.withDrawAmount - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {withDrawAmount} = this.state
    return (
      <div className="app-container">
        <div className="withdraw-container">
          <div className="logo">
            <div className="logo-container">
              <p className="logo-text">S</p>
            </div>
            <h1 className="user-name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="balance-label">Your Balance</p>
            <p className="balance-text">
              {withDrawAmount} <br />
              <span className="balance-span-text">In Rupees</span>
            </p>
          </div>
          <div>
            <p className="withdraw-heading">Withdraw</p>
            <p className="withdraw-side-heading">CHOOSE SUM (IN RUPEES)</p>
            <ul className="withdraw-list">
              {denominationsList.map(eachDenominator => (
                <DenominationItem
                  denominator={eachDenominator}
                  key={eachDenominator.id}
                  withdraw={this.onStatusWithdraw}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal

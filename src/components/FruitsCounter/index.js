import './index.css'

import {Component} from 'react'

class FruitsCounter extends Component {
  state = {mangoes: 0, bananas: 0}

  mangoesCount = () => {
    this.setState(prevState => ({mangoes: prevState.mangoes + 1}))
  }

  bananasCount = () => {
    this.setState(prevState => ({bananas: prevState.bananas + 1}))
  }

  render() {
    const {mangoes, bananas} = this.state
    return (
      <div className="container">
        <div className="bg-container">
          <h1 className="heading">
            Bob ate <span className="count">{mangoes} </span>mangoes{' '}
            <span className="count">{bananas}</span> bananas
          </h1>
          <div className="fruits-container">
            <div className="fruit-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="mango"
                alt="mango"
              />
              <button className="button" onClick={this.mangoesCount}>
                Eat Mango
              </button>
            </div>
            <div className="fruit-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                className="mango"
                alt="banana"
              />
              <button className="button" onClick={this.bananasCount}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter

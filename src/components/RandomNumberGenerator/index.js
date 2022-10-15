// Write your code here
import './index.css'
import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  onClickGenerator = () => {
    const RandomNumber = Math.ceil(Math.random() * 100)
    this.setState({number: RandomNumber})
  }

  render() {
    const {number} = this.state
    return (
      <div className="app-container">
        <div className="main_container">
          <h1 className="heading">Random Number</h1>
          <p>Generate a Random Number in the range of 0 to 100</p>
          <button
            type="button"
            onClick={this.onClickGenerator}
            className="button-style"
          >
            Generate
          </button>
          <p className="number">{number}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator

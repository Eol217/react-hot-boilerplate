import React, {Component} from 'react'
import classNames from 'classnames'
import './index.css'

export default class Billboard extends Component {
  static propTypes = {}

  static defaultProps = {}

  state = {
    time: null,
    timeString: '59:59',
    price: 59
  }

  componentWillMount () {
    this.setState({time: 3598})
  }

  componentDidMount () {
    this.timer = setInterval(this.timeToString, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  timeToString = () => {
    const min = Math.floor(this.state.time / 60)
    const sec = this.state.time % 60
    let time, timeString, price

    let timeArr = [min, sec];

    for (let i = timeArr.length - 1; i >= 0; i--) {
      if (timeArr[i] <10) timeArr[i] = '0' + timeArr[i];
    }
    let clock = timeArr[0] + ':' + timeArr[1];

    if (this.state.time > 0) {
      time = this.state.time - 1
      timeString = clock
      price = this.state.price
      
      if (this.state.time <= 900) {
        price = 19
      }

    } else {
      time = null
      timeString = '--:--'
      price = '--'
      clearInterval(this.timer)
    }

    this.setState({ time, timeString, price})
  }

  render () {
    return (
      <div className={classNames("item", {itemSale: this.state.time < 900 && this.state.time >= 0})}>
        <h1 className="item__title">Дон Жульен</h1>
        <p className="item__content">сыр, курица, грибы, королевский соус</p>
        <div className="item__price">{this.state.price} <span className="item__rub">&#8381;</span></div>
        <p className="item__time">{this.state.timeString}</p>
      </div>
    )
  }
}

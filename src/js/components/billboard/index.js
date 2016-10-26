import React, {Component} from 'react'
import './index.css'

export default class Billboard extends Component {
  static propTypes = {}

  static defaultProps = {}

  state = {
  }

  componentWillMount () {}

  componentWillUnmount () {}

  render () {
    return (
      <div className="item">
        <h1 className="item__title">Дон Жульен</h1>
        <p className="item__content">сыр, курица, грибы, королевский соус</p>
        <div className="item__price">55 <span className="item__rub">&#8381;</span></div>
        <p className="item__time">59:59</p>
      </div>
    )
  }
}

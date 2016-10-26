import React, {Component} from 'react'
import logo from '../../../assets/logo.png'

export default class electroQueue extends Component {
    static propTypes = {}

    static defaultProps = {}

    state = {}

    componentWillMount() {
    }

    componentWillUnmount() {
    }

    queueRender = () => {
        return (
            <div className="row">
                <div className="header col-md-12">
                    <img src={logo} alt=""/>
                </div>
                < div className="col-md-4">123</div>
                < div className="col-md-4">456</div>
                < div className="col-md-4">789</div>
            </div>
        )
    }

    render() {
        return (
            <div className="block-queue">
                {this.queueRender()}
            </div>
        )
    }
}

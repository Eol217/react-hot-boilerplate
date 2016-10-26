import React, {Component} from 'react'
import logo from '../../../assets/logo.png'
import './index.styl'

export default class electroQueue extends Component {
    static propTypes = {}

    static defaultProps = {}

    state = {}

    componentWillMount() {
    }

    componentWillUnmount() {
    }


    queueRender = () => {

        let names = ['a1', 'a2', 'a3', 'a3', 'a4'];

        let nameLengths = names.map(function (name) {
            return name;
        });
        return (
            <div className="row">
                <div className="header col-md-12">
                    <div className="element-logo"><img src={logo} alt=""/></div>
                </div>
                <div className="block-body">
                    < div className="orders-table col-md-6">
                        <table>
                            <tbody>
                            <tr>
                                <th>в очереди</th>
                            </tr>
                            {
                                names.map((name, key) =>
                                    <tr key={key}>
                                        <td>{name}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    < div className="orders-table complete col-md-6">
                        <table>
                            <tbody>
                            <tr>
                                <th>готово</th>
                            </tr>
                            {
                                names.map((name, key) =>
                                    <tr key={key}>
                                        <td>{name}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
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

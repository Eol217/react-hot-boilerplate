import React, {Component} from 'react';
import router from './routing'

export default class App extends Component {
    render() {
        return (
            <div>
                {router}
            </div>
        );
    }
}

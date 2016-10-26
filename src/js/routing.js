import React from 'react'
import {Router, Route, browserHistory} from 'react-router'
import Billboard from './components/billboard'
import electroQueue from './components/electro_queue'

export default (
    <Router history={browserHistory}>
        <Route path='/billboard' component={Billboard}/>
        <Route path='/electronic' component={electroQueue}/>
    </Router>
)

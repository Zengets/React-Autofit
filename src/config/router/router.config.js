/**
 * Created by kurosaki on 2018/8/13.
 */
import React, { Component } from 'react';
import {
    HashRouter,
    withRouter,
    Route,
    Switch,
    Link,
    history,
    Redirect
} from 'react-router-dom';
import {SignIn,Layout} from '../../container'
import createBrowserHistory from 'history/createBrowserHistory';

const customHistory = createBrowserHistory();

export default class Router extends Component {
    render(){
        return (
            <HashRouter  history={customHistory}>
                <Switch>
                    <Route exact path="/" component={ SignIn }/>
                    <Route component={ Layout }  path="/demo"/>
                </Switch>
            </HashRouter>
        )
    }
}

















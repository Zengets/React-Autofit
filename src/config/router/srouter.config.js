/**
 * Created by kurosaki on 2018/11/23.
 */
import React, { Component } from 'react';
import {
    Router,
    withRouter,
    Route,
    Switch,
    Link,
    history,
    Redirect
} from 'react-router-dom';
import {LayoutIndex} from '../../container'


export default class Srouter extends Component {
    render(){
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={ LayoutIndex }/>
                    <Route component={ LayoutIndex }/>

                </Switch>
            </div>
        )
    }
}
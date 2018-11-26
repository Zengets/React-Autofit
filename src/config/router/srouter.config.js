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
import {LayoutIndex,LayoutForm,LayoutbRreakpoints} from '../../container'

class Srouter extends Component {
    render(){
        return (
            <div>
                <Switch>
                    <Route exact path="/" render={() => <Redirect to="/demo/index"/>} />
                    <Route path="/demo/index" component={ LayoutIndex }/>
                    <Route path="/demo/icons" component={ LayoutForm }/>
                    <Route path="/demo/Breakpoints/:key" component={ LayoutbRreakpoints }/>
                    <Route component={ LayoutForm }/>
                </Switch>

            </div>
        )
    }
}

export default withRouter(Srouter)
import React, { Component } from 'react';
import './App.css';
import {Router,theme} from './config'
import store from './core/store/store';
import { Provider } from 'react-redux';

import CssBaseline from '@material-ui/core/CssBaseline';//css baseline
import { MuiThemeProvider } from '@material-ui/core/styles';



class App extends Component {
  render() {
    return (
        <React.Fragment>
            <Provider store={store}>
                <CssBaseline>
                    <MuiThemeProvider theme={theme}>
                        <Router>
                        </Router>
                    </MuiThemeProvider>
                </CssBaseline>
            </Provider>
        </React.Fragment>
    );
  }
}

export default App;

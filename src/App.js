import React, { Component } from 'react';
import './App.css';
import {MainRouter,theme} from './config'
import store from './core/store/store';
import { Provider } from 'react-redux';

import { MuiThemeProvider } from '@material-ui/core/styles';



class App extends Component {
  render() {
    return (
        <React.Fragment>
            <Provider store={store}>
                    <MuiThemeProvider theme={theme}>
                        <MainRouter>
                        </MainRouter>
                    </MuiThemeProvider>
            </Provider>
        </React.Fragment>
    );
  }
}

export default App;

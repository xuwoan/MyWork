import React, { Component } from 'react';

import {
    AsyncStorage,
    View,
    Text,
    AppState

} from 'react-native';
import Router from './Router'
import SplashScreen from 'react-native-splash-screen'
import { Provider } from 'react-redux'
 import createStore from '../configs/store.config'

class Kernel extends Component {
     componentDidMount() {
        setTimeout(() => {SplashScreen.hide()},500);
    }

    render() {
        return (
             <Provider store={createStore}>
            <Router />
             </Provider>
        )
    }
}
export default Kernel
import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {store,persistor} from './redux/store';
import RootRouter from './screen/root';
import { PersistGate } from 'redux-persist/integration/react';
import {Theme} from 'teaset';
import NavigationService from './utils/navigation/service';
import './utils/request/axios';
import './utils/system/global';

/** teaset适配iPhone X */
Theme.set({fitIPhoneX: true});

export default class App extends Component {
    render (){
        return (
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <RootRouter
                        ref = {navigationRef => {
                            NavigationService.setTopLevelNavigator(navigationRef)
                        }}
                    />
                </PersistGate>
            </Provider>
        )
    }
}
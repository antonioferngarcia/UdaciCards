import React, { Component } from 'react';
import { View } from 'react-native';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


import reducer from './reducers/index.reducer';
import { purple } from './utils/colors'
import { MainNavigator } from './navigation/MainNavigator';
import UdaciStatusBar from './components/UdaciStatusBar';
import { setLocalNotification } from './utils/helpers';

export default class App extends Component {


  componentDidMount() {
    setLocalNotification();
  }

  store = createStore(reducer, applyMiddleware(thunk));

  render() {
    return (
      <Provider store={this.store}>
        <View style={{ flex: 1 }}>
          <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}


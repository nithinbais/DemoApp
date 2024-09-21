import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTab from './src/bottomnav/BottomTab';
import {Provider} from 'react-redux';
import store from './src/redux/Store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTab />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

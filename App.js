import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigations from './src/navigations/AppNavigations';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import Toast from 'react-native-toast-message';
const App = () => {
  return (
    <>
      <NavigationContainer>
        <AppNavigations />
        <Toast />
      </NavigationContainer>
    </>
  );
};

export default App;

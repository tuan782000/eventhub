/* eslint-disable prettier/prettier */
// import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SplashScreen} from './src/screens';
// import MainNavigator from './src/navigator/MainNavigator';
import AuthNavigator from './src/navigator/AuthNavigator';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  const {isShowSplash, setIsShowSplash} = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);

  return isShowSplash ? (
    <SplashScreen />
  ) : (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default App;
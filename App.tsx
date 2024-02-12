/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
// import {View, Text} from 'react-native';
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {SplashScreen} from './src/screens';
// import MainNavigator from './src/navigator/MainNavigator';
import AuthNavigator from './src/navigators/AuthNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import MainNavigator from './src/navigators/MainNavigator';

const App = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);
  const [accessToken, setAccessToken] = useState('');
  // Kiểm tra đăng nhập hay chưa
  const {getItem, setItem} = useAsyncStorage('accessToken');

  // chỉ chạy 1 lần
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    }, 1500);

    // check logih

    return () => clearTimeout(timeout);
  }, []);

  // chỉ chạy 1 lần, kiểm tra đăng nhập
  useEffect(() => {
    checkLogin();
  }, []);

  // Vì này mất thời gian nên phải xử lý bất đồng bộ
  const checkLogin = async () => {
    const token = await getItem();
    console.log(token);

    token && setAccessToken(token);
  };

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {isShowSplash ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          {accessToken ? <MainNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      )}
    </>
  );
};

export default App;

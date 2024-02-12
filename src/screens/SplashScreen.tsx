/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {ActivityIndicator, ImageBackground} from 'react-native';
import React from 'react';
import {Image} from 'react-native-reanimated/lib/typescript/Animated';
import {appInfos} from '../constants/appInfos';
import {SpaceComponent} from '../components';
import {appColors} from '../constants/appColors';

const SplashScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/images/splash-img.png')}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
      }}
      imageStyle={{flex: 1}}>
      <Image
        source={require('../assets/images/logo.png')}
        style={{
          width: appInfos.sizes.WIDTH * 0.7,
          resizeMode: 'cover',
        }}
      />
      <SpaceComponent height={16} />
      <ActivityIndicator color={appColors.gray} size={22} />
    </ImageBackground>
  );
};

export default SplashScreen;

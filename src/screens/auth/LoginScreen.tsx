/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {View} from 'react-native';
import React, {useState} from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import ButtonComponent from '../../components/ButtonComponent';
import {globalStyles} from '../../styles/globalStyles';
import {InputComponent} from '../../components';
import {Lock, Sms} from 'iconsax-react-native';
import {appColors} from '../../constants/appColors';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View
      style={[
        globalStyles.container,
        {
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
        },
      ]}>
      <InputComponent
        value={email}
        placeholder="Email"
        onChange={val => setEmail(val)}
        // isPassword
        allowClear
        affix={<Sms size={22} color={appColors.gray} />}
      />
      <InputComponent
        value={password}
        placeholder="Password"
        onChange={val => setPassword(val)}
        isPassword
        allowClear
        affix={<Lock size={22} color={appColors.gray} />}
      />
    </View>
  );
};

export default LoginScreen;

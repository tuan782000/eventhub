/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {View} from 'react-native';
import React, {useState} from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import ButtonComponent from '../../components/ButtonComponent';
import {globalStyles} from '../../styles/globalStyles';
import {
  ButtonComponent,
  ContainerComponent,
  InputComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../components';
import {Lock, Sms} from 'iconsax-react-native';
import {appColors} from '../../constants/appColors';
import {Image} from 'react-native-svg';
import {fontFamilies} from '../../constants/fontFamilies';
import {Switch} from 'react-native-gesture-handler';
import SocialLogin from './components/SocialLogin';

const initValue = {username: '', email: '', password: '', confirmPassword: ''};

const SignUpScreen = ({navigation}: any) => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [userName, setusername] = useState('');
  const [values, setValues] = useState(initValue);
  const handleChangeValue = (key: string, value: string) => {
    const data: any = {...values};
    data[`${key}`] = value;
    setValues(data);
  };
  return (
    <ContainerComponent isImageBackground isScroll back>
      <SectionComponent>
        <TextComponent size={24} title text="Sign Up" color={''} />
        <SpaceComponent height={21} />
        <InputComponent
          value={values.username}
          placeholder="Fullname"
          onChange={val => handleChangeValue('username', val)}
          // isPassword
          allowClear
          affix={<Sms size={22} color={appColors.gray} />}
        />
        <InputComponent
          value={values.email}
          placeholder="abc@gmail.com"
          onChange={val => handleChangeValue('email', val)}
          // isPassword
          allowClear
          affix={<Sms size={22} color={appColors.gray} />}
        />
        <InputComponent
          value={values.password}
          placeholder="Password"
          onChange={val => handleChangeValue('password', val)}
          isPassword
          allowClear
          affix={<Lock size={22} color={appColors.gray} />}
        />
        <InputComponent
          value={values.confirmPassword}
          placeholder="Confirm Password"
          onChange={val => handleChangeValue('confirmPassword', val)}
          isPassword
          allowClear
          affix={<Lock size={22} color={appColors.gray} />}
        />
      </SectionComponent>
      <SpaceComponent height={16} />
      <SectionComponent>
        <ButtonComponent text="SIGN UP" type="primary" />
      </SectionComponent>
      <SocialLogin />
      <SectionComponent>
        <RowComponent justify="center">
          <TextComponent text="You have an account? " color={''} />
          <ButtonComponent
            type="link"
            text="Sign in"
            onPress={() => navigation.navigate('LoginScreen')}
          />
        </RowComponent>
      </SectionComponent>
    </ContainerComponent>
  );
};

export default SignUpScreen;

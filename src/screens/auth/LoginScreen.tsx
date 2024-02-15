/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import {View, Text} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ButtonComponent from '../../components/ButtonComponent';
import {globalStyles} from '../../styles/globalStyles';

const LoginScreen = () => {
  return (
    <View style={[globalStyles.container, {padding: 16}]}>
      <Text>LoginScreen</Text>
      {/* <Button
        title="Login"
        onPress={async () =>
          await AsyncStorage.setItem(
            'accessToken',
            'ok save token in local storage',
          )
        }></Button> */}
      <ButtonComponent
        text="LOGIN"
        onPress={async () =>
          await AsyncStorage.setItem(
            'accessToken',
            'ok save token in local storage',
          )
        }
        icon={
          <View>
            <Text>N</Text>
          </View>
        }
      />
    </View>
  );
};

export default LoginScreen;

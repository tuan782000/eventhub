/* eslint-disable prettier/prettier */
import {KeyboardType, StyleSheet, View} from 'react-native';
import React, {ReactNode, useState} from 'react';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
// import {EyeSlash} from 'iconsax-react-native';
import {appColors} from '../constants/appColors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {globalStyles} from '../styles/globalStyles';
// import {TextInputProps} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface Props {
  value: string;
  onChange: (val: string) => void;
  affix?: ReactNode;
  placeholder?: string;
  suffix?: ReactNode;
  isPassword?: boolean;
  allowClear?: boolean;
  type?: KeyboardType;
}

const InputComponent = (props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    value,
    onChange,
    affix,
    placeholder,
    suffix,
    isPassword,
    allowClear,
    type,
  } = props;
  const [isShowPassword, setIsShowPassword] = useState(isPassword ?? false);
  return (
    <View style={styles.inputContainer}>
      {affix ?? affix}
      <TextInput
        style={[styles.input, globalStyles.text]}
        value={value}
        placeholder={placeholder ?? ''}
        onChangeText={val => onChange(val)}
        secureTextEntry={isShowPassword}
        placeholderTextColor={'#747688'}
        keyboardType={type ?? 'default'}
      />
      {suffix ?? suffix}

      <TouchableOpacity
        onPress={
          isPassword
            ? () => setIsShowPassword(!isShowPassword)
            : () => onChange('')
        }>
        {isPassword ? (
          <FontAwesome
            name={isShowPassword ? 'eye-slash' : 'eye'}
            size={22}
            color={appColors.gray}
          />
        ) : (
          value.length > 0 &&
          allowClear && (
            <AntDesign name="close" size={22} color={appColors.text} />
          )
        )}
      </TouchableOpacity>
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: appColors.gray3,
    width: '100%',
    minHeight: 56,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: appColors.white,
    marginBottom: 19,
  },
  input: {
    padding: 0,
    margin: 0,
    flex: 1,
    paddingHorizontal: 14,
    color: appColors.text,
  },
});
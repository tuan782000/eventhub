/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {StyleProp, ViewStyle, TextStyle, View} from 'react-native';
import React, {ReactNode} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import TextComponent from './TextComponent';
import {globalStyles} from '../styles/globalStyles';
import {appColors} from '../constants/appColors';
import {fontFamilies} from '../constants/fontFamilies';
// import {fontFamilies} from '../constants/fontFamilies';

interface Props {
  icon?: ReactNode;
  text: string;
  type?: 'primary' | 'text' | 'link';
  color?: string;
  styles?: StyleProp<ViewStyle>;
  textColor?: string;
  textStyles?: StyleProp<TextStyle>;
  onPress?: () => void;
  iconFlex?: 'right' | 'left';
  textFont?: string;
}

const ButtonComponent = (props: Props) => {
  const {
    icon,
    text,
    type,
    color,
    styles,
    textColor,
    textStyles,
    onPress,
    iconFlex,
    textFont,
  } = props;
  return type === 'primary' ? (
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity
        onPress={onPress}
        style={[
          globalStyles.button,
          globalStyles.shadow,
          {
            backgroundColor: color ?? appColors.primary,
            marginBottom: 17,
            width: '90%',
          },
          styles,
        ]}>
        {icon && iconFlex === 'left' && icon}
        <TextComponent
          text={text}
          color={textColor ?? appColors.white}
          styles={[
            textStyles,
            {
              marginLeft: icon && iconFlex === 'left' ? 12 : 0,
              fontSize: 16,
              textAlign: 'center',
            },
          ]}
          flex={icon && iconFlex === 'right' ? 1 : 0}
          font={textFont ?? fontFamilies.medium}
        />
        {icon && iconFlex === 'right' && icon}
      </TouchableOpacity>
    </View>
  ) : (
    <TouchableOpacity onPress={onPress}>
      <TextComponent
        text={text}
        color={
          type === 'link' ? appColors.primary : appColors.text
        }></TextComponent>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

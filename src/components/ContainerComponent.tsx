/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React, {ReactNode} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {globalStyles} from '../styles/globalStyles';
import {useNavigation} from '@react-navigation/native';
import RowComponent from './RowComponent';
import ButtonComponent from './ButtonComponent';
import {ArrowLeft} from 'iconsax-react-native';
import {appColors} from '../constants/appColors';
import TextComponent from './TextComponent';
import {fontFamilies} from '../constants/fontFamilies';

interface Props {
  isImageBackground?: boolean;
  isScroll?: boolean;
  title?: string;
  children: ReactNode;
  back?: boolean;
}

const ContainerComponent = (props: Props) => {
  const {isImageBackground, isScroll, title, children, back} = props;
  const navigation: any = useNavigation();
  const headerComponent = () => {
    return (
      <View style={{flex: 1, paddingTop: 30}}>
        {(title || back) && (
          <RowComponent
            styles={{
              paddingHorizontal: 16,
              paddingVertical: 10,
              minWidth: 48,
              minHeight: 48,
            }}>
            {back && (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{marginRight: 12}}>
                <ArrowLeft size={24} color={appColors.text} />
              </TouchableOpacity>
            )}
            {title && (
              <TextComponent
                text={title}
                size={16}
                font={fontFamilies.medium}
                color={''}
              />
            )}
          </RowComponent>
        )}
      </View>
    );
  };
  const returnContainer = isScroll ? (
    <ScrollView style={{flex: 1}}>{children}</ScrollView>
  ) : (
    <View style={{flex: 1}}>{children}</View>
  );
  return isImageBackground ? (
    <ImageBackground
      source={require('../assets/images/splash-img.png')}
      style={{flex: 1}}
      imageStyle={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>{headerComponent()}</SafeAreaView>
    </ImageBackground>
  ) : (
    <SafeAreaView style={[globalStyles.container]}>
      <View>{headerComponent()}</View>
    </SafeAreaView>
  );
};

export default ContainerComponent;

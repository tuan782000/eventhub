/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ButtonComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../../components';
import {appColors} from '../../../constants/appColors';
import {fontFamilies} from '../../../constants/fontFamilies';
import {Facebook, Google} from '../../../assets/svgs';

const SocialLogin = () => {
  return (
    <SectionComponent>
      <TextComponent
        styles={{textAlign: 'center'}}
        text="OR"
        color={appColors.gray4}
        size={16}
        font={fontFamilies.medium}
      />
      <SpaceComponent height={16} />
      <ButtonComponent
        type="primary"
        color={appColors.white}
        textColor={appColors.text}
        text="Login with Google"
        iconFlex="left"
        icon={<Google />}
        textFont={fontFamilies.regular}
      />
      <ButtonComponent
        type="primary"
        color={appColors.white}
        textColor={appColors.text}
        text="Login with Facebook"
        iconFlex="left"
        icon={<Facebook />}
        textFont={fontFamilies.regular}
      />
    </SectionComponent>
  );
};

export default SocialLogin;

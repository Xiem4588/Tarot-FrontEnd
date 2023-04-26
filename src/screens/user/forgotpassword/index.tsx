import React, {useState} from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from '../../../assets/styles';
import WrapBgBox from '../../../conponents/wrapBgBox';
import Header from '../../../conponents/header';
import {useTranslation} from 'react-i18next';
import i18n from '../../../languages/i18n';
import ForgotStepOne from './forgotStepOne';
import ForgotStepTwo from './forgotStepTwo';
import ForgotStepThree from './forgotStepThree';

const ForgotPassword = ({navigation}: any) => {
  useTranslation();
  //*****/ one
  // Select button
  const [selectedButton, setSelectedButton] = useState('');
  const handleButtonPress = (buttonName: string) => {
    setSelectedButton(buttonName);
  };
  // screen confrirm
  const [isConfirm, setConfirm] = useState(true);
  const handleNext = () => {
    setConfirm(false);
  };

  //*****/ two
  // screen set new password
  const [isNewPass, setNewPass] = useState(true);
  const handleConfirm = () => {
    setNewPass(false);
  };

  //*****/ three

  return (
    <WrapBgBox>
      <Header navigation={navigation} title={i18n.t('forgotpassword')} />
      <ScrollView>
        <View style={[styles.paddingHorizontal18]}>
          {isConfirm ? (
            <ForgotStepOne
              handleButtonPress={(buttonName: string) =>
                handleButtonPress(buttonName)
              }
              selectedButton={selectedButton}
              handleNext={handleNext}
            />
          ) : isNewPass ? (
            <ForgotStepTwo
              selectedButton={selectedButton}
              handleConfirm={handleConfirm}
            />
          ) : (
            <ForgotStepThree navigation={navigation} />
          )}
        </View>
      </ScrollView>
    </WrapBgBox>
  );
};

export default ForgotPassword;

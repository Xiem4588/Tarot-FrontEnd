import React from 'react';
import {View, Button} from 'react-native';
import {useTranslation} from 'react-i18next';

export const LanguageSwitcher: React.FC = () => {
  const {i18n} = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <View>
      <Button title="English" onPress={() => changeLanguage('en')} />
      <Button title="Tiếng Việt" onPress={() => changeLanguage('vi')} />
    </View>
  );
};

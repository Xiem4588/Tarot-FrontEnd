import React, {useState, useEffect} from 'react';
import {Alert, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from '../assets/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RNLocalize from 'react-native-localize';

export const LanguageSwitcher = () => {
  const [isLanguage, setLanguage] = useState(false);
  const {i18n} = useTranslation();
  // Lay ngon ngu dang dung cua thiet bi
  const defaultLanguage = RNLocalize.getLocales()[0].languageCode;

  // User thay doi ngon ngu
  const changeLanguage = async (language: string) => {
    try {
      if (language === 'en') {
        await AsyncStorage.setItem('language', language);
        i18n.changeLanguage('en');
        setLanguage(false);
      } else {
        await AsyncStorage.setItem('language', language);
        i18n.changeLanguage('vi');
        setLanguage(true);
      }
    } catch (e) {
      console.error(e);
    }
  };

  // Su ly ngon ngu mac dinh va cap nhat ngon ngu khi co thay doi de luu vao Stored
  useEffect(() => {
    async function getStoredLanguage() {
      const language: any = await AsyncStorage.getItem('language');
      // Alert.alert(language);
      if (!language) {
        if (defaultLanguage !== 'vi') {
          // Alert.alert(defaultLanguage);
          await AsyncStorage.setItem('language', 'vi');
          i18n.changeLanguage('vi');
          setLanguage(true);
        }
      } else {
        try {
          if (language === 'en') {
            i18n.changeLanguage('en');
            setLanguage(false);
          } else {
            i18n.changeLanguage('vi');
            setLanguage(true);
          }
        } catch (e) {
          console.error(e);
        }
      }
    }
    getStoredLanguage();
  }, [i18n, defaultLanguage]);

  // reaset cache cho AsyncStorage
  // const clearLanguage = async () => {
  //   try {
  //     await AsyncStorage.removeItem('language');
  //     console.log('Language cleared successfully!');
  //   } catch (error) {
  //     console.log('Failed to clear language: ', error);
  //   }
  // };

  return (
    <>
      {/* <TouchableOpacity style={styles.RowAlignItems} onPress={clearLanguage}>
        <Text style={styles.textSize16}>clearLanguage</Text>
      </TouchableOpacity> */}
      {isLanguage ? (
        <TouchableOpacity
          style={styles.RowAlignItems}
          onPress={() => changeLanguage('en')}>
          <Text style={styles.textSize16}>English</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.RowAlignItems}
          onPress={() => changeLanguage('vi')}>
          <Text style={styles.textSize16}>Vietnamese</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

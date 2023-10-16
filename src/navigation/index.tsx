import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Button, Alert, TouchableOpacity, Image} from 'react-native';
import WrapBgBox from '../conponents/wrapBgBox';
import {icon, colors} from '../assets/constants';
import {
  NewsFeed,
  User,
  Booking,
  Choose,
  Detail,
  Payment,
  Tarot,
  Setting,
  Notify,
  Launch,
  ForgotPassword,
} from '../screens';

import {styles} from '../assets/styles';
import {Text} from 'react-native-elements';
import {LanguageSwitcher} from '../conponents/LanguageSwitcher';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// route
const TabScreenOptions = ({route}: any) => ({
  headerShown: false,
  title: '',
  tabBarStyle: {
    backgroundColor: colors.lightBlack,
    paddingTop: 30,
    paddingBottom: 40,
    borderTopWidth: 0,
  },
  tabBarIcon: ({focused}: any) => {
    let screenName = route.name;
    let iconName = {};
    let iconNameActive = {};
    if (screenName === 'newsfeed') {
      iconNameActive = `${icon.iconNav1Active}`;
      iconName = `${icon.iconNav1}`;
    } else if (screenName === 'tarot') {
      iconNameActive = `${icon.iconNav2Active}`;
      iconName = `${icon.iconNav2}`;
    } else if (screenName === 'user') {
      iconNameActive = `${icon.iconNav3Active}`;
      iconName = `${icon.iconNav3}`;
    }
    return (
      <>
        <View style={styles.iconTab}>
          <Image
            source={focused ? iconNameActive : iconName}
            style={styles.imgMode}
          />
        </View>
        {focused ? <View style={styles.iconTabUn} /> : ''}
      </>
    );
  },
  contentStyle: {backgroundColor: colors.transparent},
});

// Navigator
export const MainNav = () => {
  return (
    <>
      <Tab.Navigator initialRouteName="user" screenOptions={TabScreenOptions}>
        <Tab.Screen name="newsfeed" component={NewsFeed} />
        <Tab.Screen name="tarot" component={Tarot} />
        <Stack.Screen name="user" component={User} />
      </Tab.Navigator>
    </>
  );
};
//End

// change style screen
const StackScreenOptions = {
  headerShown: false,
  title: '',
  headerTintColor: colors.white,
  contentStyle: {backgroundColor: colors.transparent},
  headerStyle: {backgroundColor: colors.transparent},
  cardStyle: {backgroundColor: '#000'},
};
//End

const StackScreenOptionsHeaderTransparent = ({navigation}: any) => ({
  headerShown: false,
  title: '',
  headerTintColor: colors.white,
  contentStyle: {backgroundColor: colors.transparent},
  headerStyle: {backgroundColor: colors.transparent},
  cardStyle: {backgroundColor: '#000'},
  headerLeft: () => (
    <TouchableOpacity
      style={[styles.buttonEllipseSm, styles.marginLeft12]}
      onPress={() => navigation.goBack()}>
      <View style={styles.RowCenterBetween}>
        <Image
          source={icon.iconBackWhite}
          style={[styles.iconSize24, styles.marginRight5]}
        />
        <Text style={[styles.textWhite, styles.fontSize18]}>Cài đặt</Text>
      </View>
    </TouchableOpacity>
  ),
  headerRight: () => (
    <Button
      onPress={() => {
        Alert.alert('Save!');
      }}
      title="Lưu"
      color="#F78B73"
    />
  ),
});

const Navigation = () => {
  // check login
  const token = useSelector((state: any) => state.PRIVATE_STORE_ACCOUNT_DATA.token);
  return (
    <>
      <WrapBgBox>
        <View style={styles.hidden}>
          <LanguageSwitcher />
        </View>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={token ? 'MainNav' : 'launch'}>
            <Stack.Group screenOptions={StackScreenOptions}>
              <Stack.Screen name="choose" component={Choose} />
              <Stack.Screen name="detail" component={Detail} />
              <Stack.Screen name="payment" component={Payment} />
            </Stack.Group>
            <Stack.Group screenOptions={StackScreenOptionsHeaderTransparent}>
              <Stack.Screen name="launch" component={Launch} />
              <Stack.Screen name="booking" component={Booking} />
              <Stack.Screen name="setting" component={Setting} />
              <Stack.Screen name="notify" component={Notify} />
              <Stack.Screen name="forgotPassword" component={ForgotPassword} />
            </Stack.Group>
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="MainNav"
              component={MainNav}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </WrapBgBox>
    </>
  );
};

export default Navigation;

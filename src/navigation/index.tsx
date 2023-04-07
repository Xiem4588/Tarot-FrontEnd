import * as React from 'react';
import * as Font from 'expo-font';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Button, Alert} from 'react-native';
import {Avatar} from 'react-native-elements';
import WrapBgBox from '../conponents/wrapBgBox';
import {icon, colors} from '../../assets/constants';
import {
  Welcome,
  Account,
  Booking,
  Gameplay,
  Detail,
  Payment,
  Profile,
  Game,
  Setting,
  Notify,
} from '../screens';

import {styles} from '../../assets/styles';
import {Text} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';

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
    if (screenName === 'welcome') {
      iconNameActive = `${icon.iconNav1Active}`;
      iconName = `${icon.iconNav1}`;
    } else if (screenName === 'game') {
      iconNameActive = `${icon.iconNav2Active}`;
      iconName = `${icon.iconNav2}`;
    } else if (screenName === 'profile') {
      iconNameActive = `${icon.iconNav3Active}`;
      iconName = `${icon.iconNav3}`;
    }
    return (
      <>
        <View style={styles.iconTab}>
          <Avatar
            containerStyle={styles.imgMode}
            source={focused ? iconNameActive : iconName}
          />
        </View>
        {focused ? <View style={styles.iconTabUn} /> : ''}
      </>
    );
  },
  contentStyle: {backgroundColor: colors.transparent},
});

// Navigator
export const TabNavigator = () => {
  return (
    <>
      <Tab.Navigator initialRouteName="game" screenOptions={TabScreenOptions}>
        <Tab.Screen name="welcome" component={Welcome} />
        <Tab.Screen name="game" component={Game} />
        <Tab.Screen name="profile" component={Profile} />
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
        <Avatar
          source={icon.iconBackWhite}
          containerStyle={[styles.iconSize24, styles.marginRight5]}
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

const App = () => {
  // Add Font Montserrat
  const [fontLoaded, setFontLoaded] = React.useState(true);
  React.useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        Montserrat: require('../../assets/fonts/Montserrat-VariableFont_wght.ttf'),
      });
      setFontLoaded(true);
    }

    loadFont();
  }, []);

  if (!fontLoaded) {
    return null;
  }

  return (
    <>
      <WrapBgBox>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="tabNavigator">
            <Stack.Group screenOptions={StackScreenOptions}>
              <Stack.Screen name="account" component={Account} />
              <Stack.Screen name="gameplay" component={Gameplay} />
              <Stack.Screen name="detail" component={Detail} />
              <Stack.Screen name="payment" component={Payment} />
            </Stack.Group>
            <Stack.Group screenOptions={StackScreenOptionsHeaderTransparent}>
              <Stack.Screen name="setting" component={Setting} />
              <Stack.Screen name="notify" component={Notify} />
              <Stack.Screen name="booking" component={Booking} />
            </Stack.Group>
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="tabNavigator"
              component={TabNavigator}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </WrapBgBox>
    </>
  );
};

export default App;

import * as React from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {icons} from './src/screens/Home/utils';
import SearchScreen from './src/screens/Search';
import {Provider} from 'react-redux';
import store from './src/store';
import { MyTheme } from './src/utils/constants';
import Config from 'react-native-config';
import Geocoder from 'react-native-geocoding';

export default function App() {
  Geocoder.init(Config.API_KEY_GOOGLE_MAPS);
  const Tab = createBottomTabNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({color, size}) => {
              return (
                <Icon name={icons[route.name]} color={color} size={size} />
              );
            },
            headerShown: false,
          })}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Search" component={SearchScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

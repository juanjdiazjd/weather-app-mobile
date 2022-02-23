import * as React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../Search';
import HomeScreen from '../Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { icons } from '../Home/utils';
import SearchScreen from '../Search';

export default function App() {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#003366',
    },
  };

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator  screenOptions={({ route }) => ({
    tabBarIcon: ({ color, size }) => {
      return (
        <Icon
          name={icons[route.name]}
          color={color}
          size={size}
        />
      );
    },
    headerShown:false
  })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import UsersNavigation from './usersNavigation';
import About from 'screens/about';
import Favourite from 'screens/favourite';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      {/* TODO: test to check if we render Users screen at the begining  */}
      {/* TODO: test to check if we can switch between tabs  */}
      {/* TODO: test to check if tabs are visible with correct text/icon  */}
      <Tab.Navigator initialRouteName="Users">
        <Tab.Screen name="Users" component={UsersNavigation} />
        <Tab.Screen name="Favourite" component={Favourite} />
        <Tab.Screen name="About" component={About} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

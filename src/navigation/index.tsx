import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Users from 'screens/users';
import About from 'screens/about';
import Favourite from 'screens/favourite';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Users">
        <Tab.Screen name="Users" component={Users} />
        <Tab.Screen name="Favourite" component={Favourite} />
        <Tab.Screen name="About" component={About} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

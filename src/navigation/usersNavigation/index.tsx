import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Users from 'screens/users';
import UserDetails from 'screens/userDetails';

const Stack = createNativeStackNavigator();

const UsersNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="UsersList" component={Users} />
      <Stack.Screen name="UserDetails" component={UserDetails} />
    </Stack.Navigator>
  );
};

export default UsersNavigation;

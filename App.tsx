/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
} from 'react-native';

import UserTile from './src/components/userTile';

function App(): JSX.Element {
  return (
    <SafeAreaView >
      <UserTile />
      <UserTile />
      <UserTile />
      <UserTile />
    </SafeAreaView>
  );
}


export default App;

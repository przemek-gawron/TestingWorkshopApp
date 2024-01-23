/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
} from 'react-native';

import Navigation from './src/navigation';
import axios from 'axios';

function App(): JSX.Element {
  return (
    <SafeAreaView >
      <Navigation />
    </SafeAreaView>
  );
}


export default App;

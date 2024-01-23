/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView, StyleSheet,
} from 'react-native';

import Navigation from './src/navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container} >
      <Navigation />
    </SafeAreaView>
  );
}


export default App;

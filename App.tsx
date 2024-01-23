import React from 'react';
import {
  SafeAreaView, StyleSheet,
} from 'react-native';

import Navigation from './src/navigation';


function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container} >
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

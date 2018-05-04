import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Constants } from 'expo';

import Home from './components/Home';

const App = () => (
  <View style={styles.container}>
    <Home />
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    flex: 1
  },
});

export default App;

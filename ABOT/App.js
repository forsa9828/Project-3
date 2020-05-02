import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import FormAvailPto from "./component/FormAvailPto";

import MyAlert from './component/Modal';

export default function App() {
  return (
    <View style={styles.container}>
      <MyAlert />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
  },
});

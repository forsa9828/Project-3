import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FormAvailPto from "./component/FormAvailPto";

export default function App() {
  return (
    <View style={styles.container}>
      <FormAvailPto />
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

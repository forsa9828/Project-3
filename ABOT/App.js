import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import FormAvailPto from "./component/FormAvailPto";
import Table from './component/Table';

export default function App() {
  return (
    <View style={styles.container}>
      <Table />
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

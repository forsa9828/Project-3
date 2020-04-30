import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {FormCard} from "./component/Form";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    // </View>
    <View style={styles.container}>
     <FormCard />
    </View>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

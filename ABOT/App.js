import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Navbar from '../ABOT/src/component/Navbar';
// import Sidebar from '../ABOT/src/component/SidebarStyle'
// import FormAvailPto from "./component/FormAvailPto";
import RequestOff from '../ABOT/src/pages/RequestOff'

// import MyAlert from './component/Modal';

export default function App() {
  return (
    <View style={styles.container}>
    
    
      <SchedulePage/>
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

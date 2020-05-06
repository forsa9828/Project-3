//open shifts will also be here
//current schedule

// NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text } from 'react-native';
// import all basic components

export default class SchedulePage extends Component {
  //Screen1 Component
  render() {
    return (
      <View style={styles.MainContainer}>
          {/* The font color is on the navbar */}
        <Text style={{ fontSize: 23, }}> SCHEDULE {global.currentScreenIndex + 1}</Text> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
});
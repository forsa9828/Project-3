//managers only

//current schedule
//pending queue of time off requests only 
//approve or denied with comments
//avail of others 
//ascending orders of updated at (the newest change request)

// Navigation Drawer with Custom Side bar//
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default class Review extends Component {
  //Screen3 Component
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 23 }}> Review Requests Off {global.currentScreenIndex + 1} </Text>
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

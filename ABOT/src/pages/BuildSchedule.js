//managers only

//create the shifts -build date x - date y, filter staff based on staff avail to show
//choose date range to build the schedule with post and get as we were already doing 
//when date is entered, filter date of avail and pto 
//post open shifts 

// NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text } from 'react-native';
// import all basic components

export default class BuildSchedule extends Component {
  //Screen2 Component
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 23 }}> Build Schedule {global.currentScreenIndex + 1}</Text>
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
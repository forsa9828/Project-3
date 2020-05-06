import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default class Avail extends Component {
  //Screen3 Component
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 23 }}> Availability {global.currentScreenIndex + 1} </Text>
      </View>
    );
  }
}


//nothing new to add

// {this.props.register ? (
//     <React.Fragment>

//     <Item stackedLabel>
//         <Label>Start Time</Label>
//         <Input />
//     </Item>
//     <Item stackedLabel>
//         <Label>End Time</Label>
//         <Input />
//     </Item>
//     </React.Fragment>)
//      : null}
//     <Button small primary>
//         <Text>Submit</Text>
//     </Button>
// </Form>
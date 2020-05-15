import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Icon } from 'react-native-elements';


export default class SidebarStyle extends Component {
  constructor() {
    super();
    //Setting up the Main Top Large Image of the Custom Sidebar
    this.image ='../assets/hourglass.png';

    
    this.items = [
      {
        navOptionThumb: 'schedule',
        navOptionName: 'First Screen',
        screenToNavigate: 'SchedulePage',
      },
      {
        navOptionThumb: 'build',
        navOptionName: 'Second Screen',
        screenToNavigate: 'BuildSchedule',
      },
      {
        navOptionThumb: 'event_available',
        navOptionName: 'Third Screen',
        screenToNavigate: 'Avail',
      },
      {
        navOptionThumb: 'rate_review',
        navOptionName: 'Fourth Screen',
        screenToNavigate: 'Review',
      },
    ];
  }
  render() {
    return (
      <View style={styles.sideMenuContainer}>
        {/*Top Large Image */}
        <Image
          source={{ uri: this.image }}
          style={styles.sideMenuProfileIcon}
        />
        {/*Divider between Top Image and Sidebar Option*/}
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: '#fffff',
            marginTop: 15,
          }}
        />
        {/*Setting up Navigation Options from option array using loop*/}
        <View style={{ width: '100%' }}>
          {this.items.map((item, key) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: global.currentScreenIndex === key ? '#e0dbdb' : '#ffffff',
              }}
              key={key}>
              <View style={{ marginRight: 10, marginLeft: 20 }}>
                <Icon name={item.navOptionThumb} size={25} color="#ffffff" />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  color: global.currentScreenIndex === key ? 'white' : 'grey',
                }}
                onPress={() => {
                  global.currentScreenIndex = key;
                  this.props.navigation.navigate(item.screenToNavigate);
                }}>
                {item.navOptionName}
              </Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  // sideMenuContainer: {
  //   width: '100%',
  //   height: '100%',
  //   backgroundColor: '##d6ad86',
  //   alignItems: 'center',
  //   paddingTop: 20,
  // },
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 150,
    height: 150,
    marginTop: 20,
    borderRadius: 150 / 2,
  },
});
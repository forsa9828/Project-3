import React, { Component } from 'react';

//Import React Navigation
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator, Dimensions} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import { Button, Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';



//Import external files  
import SchedulePageScreen from '../pages/SchedulePage';
import AvailScreen from '../pages/Avail';
import ReviewScreen from '../pages/RequestOff';
// import SignInScreen from '../pages/Signin'



const ReviewStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Review: { screen: ReviewScreen },
    Review: { screen: ReviewScreen, navigationOptions:{tabBarVisible: true, title: 'R E V I E W'} },
  },
  {
    //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#d6ab86',
      },
      headerTintColor: '#FFFFFF',
        fontWeight: 'bold',
      title: 'Review',
      //Header title
    },
  }
);

const AvailStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Avail: { screen: AvailScreen },
    Avail: { screen: AvailScreen, navigationOptions:{tabBarVisible: true, title: 'A V A I L A B I L I T Y '} },
  },
  {
    //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#d6ab86',
      },
      headerTintColor: '#FFFFFF',
      title: 'Avail',
      //Header titl
    },
  }
);

const SchedulePageStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    SchedulePage: { screen: SchedulePageScreen },
    SchedulePage: { screen: SchedulePageScreen, navigationOptions:{tabBarVisible: true, title: 'S C H E D U L E'} },
  },
  {
    //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#d6ab86',
      },
      headerTintColor: '#FFFFFF',
      title: 'Schedule',
      //Header title
    },
  }
);

// const SignInStack = createStackNavigator(
//   {
//     //Defination of Navigaton from setting screen
//     SignIn: { screen: SignInScreen },
//     SignIn: { screen: SignInScreen, navigationOptions:{tabBarVisible: true, title: 'ABOT'} },
//   },
//   {
//     //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
//     defaultNavigationOptions: {
//       //Header customization of the perticular Screen
//       headerStyle: {
//         backgroundColor: '#d6ab86',
//         fontSize: 20,
//       },
//       headerTintColor: '#FFFFFF',
  
//       //Header title
//     },
//   }
// );

SchedulePageStack.navigationOptions = ReviewStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const NavBar = createBottomTabNavigator(
  {
    SchedulePage: { 
      screen: SchedulePageStack,
      navigationOptions: {
        tabBarLabel: 'SchedulePage',
        tabBarIcon: ({ tintColor }) => <Ionicons name="ios-calendar" size={25} color={tintColor} />
      }
    },
    //Defination of Navigaton bottom options
    ReviewScreen: { 
      screen: ReviewStack,
      navigationOptions: {
        tabBarLabel: 'Review',
        tabBarIcon: ({ tintColor }) => <Ionicons name="ios-book" size={25} color={tintColor} />
      }
    },
    Avail: { 
      screen: AvailStack,
      navigationOptions: {
        tabBarLabel: 'Avail',
        tabBarIcon: ({ tintColor }) => <Ionicons name="ios-time" size={25} color={tintColor} />
      }
    },

    // SignIn: {
    //   screen: SignInStack,
    //   navigationOptions:{
    //     tabBarLabel: 'Logout',
    //     tabBarIcon: ({ tintColor }) => <Ionicons name="ios-log-out" size={25} color={tintColor} />
    //   }
    // }
  },
  {
    //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
    initialRouteName: 'ReviewScreen',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Review'){
          iconName = `ios-home${focused ? '' : '-outline'}`;
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
        }
         else if (routeName === 'SchedulePage') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        } 
        else if (routeName === 'Avail') {
          iconName = `ios-list${focused ? '' : '-outline'}`;
       } 
        
        // else if (routeName === 'SignIn')
        //   iconName = `ios-logout${focused ? '' : '-outline'}`;

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#fff',
      //activeTintColor: '#42f44b',
      inactiveTintColor: 'gray',
      
    },
  }
);


//For React Navigation 2.+ need to export App only
//export default App;
//For React Navigation 3.+
export default createAppContainer(NavBar);



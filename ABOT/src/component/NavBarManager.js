import React, { Component } from 'react';

//Import React Navigation
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator, Dimensions} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import { Button, Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';



//Import external files  
import SchedulePageScreen from '../pages/SchedulePage';
import ManageEmployees from '../pages/ManageEmployees';
import Review from "../pages/Review"
// import RequestOff from '../pages/RequestOff';
import SignInScreen from '../pages/Signin'



const ReviewStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Review: { screen: Review },
    Review: { screen: Review, navigationOptions:{tabBarVisible: true, title: 'R E V I E W  R E Q U E S T S'} },
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

const ManageEmployeesStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    ManageEmployees: { screen: ManageEmployees },
    ManageEmployees: { screen: ManageEmployees, navigationOptions:{tabBarVisible: true, title: 'M A N A G E'} },
  },
  {
    //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#d6ab86',
      },
      headerTintColor: '#FFFFFF',
      title: 'Manage Employees',
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

  const SignInStack = createStackNavigator(
    {
      //Defination of Navigaton from setting screen
      SignIn: { screen: SignInScreen },
      SignIn: { screen: SignIncreen, navigationOptions:{tabBarVisible: true, title: 'L O G O U T '} },
    },
    {
      //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
      defaultNavigationOptions: {
        //Header customization of the perticular Screen
        headerStyle: {
          backgroundColor: '#d6ab86',
        },
        headerTintColor: '#FFFFFF',
        title: 'logout',
        //Header title
      },
    }
);


// SchedulePageStack.navigationOptions = ManageEmployeesStack.navigationOptions = ({ navigation }) => {
//   let tabBarVisible = true;
//   if (navigation.state.index > 0) {
//     tabBarVisible = false;
//   }

//   return {
//     tabBarVisible,
//   };
// };

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
    Review: { 
      screen: ReviewStack,
      navigationOptions: {
        tabBarLabel: 'Review Requests',
        tabBarIcon: ({ tintColor }) => <Ionicons name="ios-book" size={25} color={tintColor} />
      }
    },
    ManageEmployees: { 
      screen: ManageEmployees,
      navigationOptions: {
        tabBarLabel: 'Manage Employees',
        tabBarIcon: ({ tintColor }) => <Ionicons name="ios-time" size={25} color={tintColor} />
      }
    },

  },
  {
    //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
    // initialRouteName: "SignIn",
    initialRouteName: 'ManageEmployees',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        
        // console.log(userValues)
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
        else if (routeName === 'ManageEmployees') {
          iconName = `ios-list${focused ? '' : '-outline'}`;
       } 
        
        else if (routeName === 'SignIn')
          iconName = `ios-logout${focused ? '' : '-outline'}`;

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



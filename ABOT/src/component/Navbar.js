// import React, { Component } from 'react';
// import { View, Image, TouchableOpacity } from 'react-native';

// import {createAppContainer} from 'react-navigation';
// import {createDrawerNavigator} from 'react-navigation-drawer';
// import {createStackNavigator} from 'react-navigation-stack';
// import SidebarStyle from '../component/SidebarStyle'

// //Import external files  
// import SchedulePage from '../pages/SchedulePage';
// import BuildSchedule from '../pages/BuildSchedule';
// import Avail from '../pages/Avail';
// import Review from '../pages/Review';

// global.currentScreenIndex = 0;

// //Structure Open & Closes on drawer image
// class NavigationDrawerStructure extends Component {
//   //Structure for the navigatin Drawer
//   toggleDrawer = () => {
//     //Props to open/close the drawer
//     this.props.navigationProps.toggleDrawer();
//   };
//   // render() {
//   //   return (
//   //    // <StatusBar animated={true}></StatusBar>
//   //     <View style={{ flexDirection: 'row' }}>
//   //       <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
//   //         {/* Nav Button Image
//   //         <Image
//   //           source={require('../assets/drawer.png')}
//   //           style={{ width: 25, height: 25, marginLeft: 5 }} //icon image style
//   //         /> */}
//   //       </TouchableOpacity>
//   //     </View>
  
// //     );
// //   }
// // }

// //SCHEDULE PAGE SCREEN STACK WHAT IS STACK?  -------------------------------------------------------
// const SchedulePage_StackNavigator = createStackNavigator({
//   //All the screen from the Screen1 will be indexed here
//   First: {
//     screen: SchedulePage,
//     navigationOptions: ({ navigation }) => ({
//       title: 'Schedule',
//       headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
//       headerStyle: {
//         backgroundColor: '#d6ad86', //Peachy 
//       },
//       headerTintColor: '#fff',
//     }),
//   },
// });

// const BuildSchedule_StackNavigator = createStackNavigator({
//   //All the screen from the Screen2 will be indexed here
//   Second: {
//     screen: BuildSchedule,
//     navigationOptions: ({ navigation }) => ({
//       title: 'Build Schedule',
//       headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
//       headerStyle: {
//         backgroundColor: '#d6ad86',
//       },
//       headerTintColor: '#fff',
//     }),
//   },
// });

// const Avail_StackNavigator = createStackNavigator({
//   //All the screen from the Screen3 will be indexed here
//   Third: {
//     screen: Avail,
//     navigationOptions: ({ navigation }) => ({
//       title: 'Availability',
//       headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
//       headerStyle: {
//         backgroundColor: '##d6ad86',
//       },
//       headerTintColor: '#fff',
//     }),
//   },
// });

// const Review_StackNavigator = createStackNavigator({
//     //All the screen from the Screen3 will be indexed here
//     Fourth: {
//       screen: Review,
//       navigationOptions: ({ navigation }) => ({
//         title: 'Review Review',
//         headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
//         headerStyle: {
//           backgroundColor: '##d6ad86',
//         },
//         headerTintColor: '#fff',
//       }),
//     },
//   });
  

// //NAVAGATION DRAWER--------------------------------------------------------------------
// const DrawerNavigator = createDrawerNavigator({
//   //Drawer Optons and indexing
//   SchedulePage: {
//     //Title
//     screen: SchedulePage_StackNavigator,
//     navigationOptions: {
//       drawerLabel: 'Schedule',
//     },
//   },
//   BuildSchedule: {
//     //Title
//     screen: BuildSchedule_StackNavigator,
//     navigationOptions: {
//       drawerLabel: 'Build Schedule',
//     },
//   },
  
//   Avail: {
//     //Title
//     screen: Avail_StackNavigator,
//     navigationOptions: {
//       drawerLabel: 'Availability',
//     },
//   },

//   Review: {
//     //Title
//     screen: Review_StackNavigator,
//     navigationOptions: {
//       drawerLabel: 'Review Requests',
//     },
//   },
// },
// {
//   //For the Custom sidebar menu we have to provide our CustomSidebarMenu
//   contentComponent: SidebarStyle,
//   //Sidebar width
// //   drawerWidth: Dimensions.get('window').width - 130,
// }
// );
// export default createAppContainer(DrawerNavigator);


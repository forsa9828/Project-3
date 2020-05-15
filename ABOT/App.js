import React from "react";
import { StyleSheet, Text, View } from 'react-native';
// import {FormSignUp, FormLogin} from "./component/Form";
import SignIn from "./src/pages/Signin";
// import SignUp from "./src/pages/Signup";
import Navbar from "../ABOT/src/component/Navbar";
// import {Root} from 'native-base';
import {createAppContainer} from 'react-navigation';

// const AppContainer = createAppContainer(props => WithAuth(_ => <App screenProps={{ ...props }} />));

// export default AppContainer;

export default function App() {
  return (
//     // <View>
//     //   <Text>Open up App.js to start working on your app!</Text>
//     // </View>
  
    <Navbar />  
 
    // <SignUp/>
  
    // signin will be the landing page 
  
  );
}


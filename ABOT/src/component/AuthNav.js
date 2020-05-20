import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer} from 'react-navigation'


import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import ForgotPassword from '../pages/forgotPassword';
import NavBar from "./Navbar";
import NavBarManager from './NavBarManager';

const AuthNavigation = createStackNavigator(
    {
      Signin: { screen: Signin },
      Signup: { screen: Signup },
      ForgotPassword: {screen: ForgotPassword},
      NavBar: {screen: NavBar},
      NavBarManager: {screen: NavBarManager}
    },
    {
      initialRouteName: "Signin",
     headerMode: "none"
    }
  )
  


export const AppContainer = createAppContainer(AuthNavigation)


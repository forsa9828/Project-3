import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer} from 'react-navigation'


import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import ForgotPassword from '../pages/ForgotPassword';
import SchedulePage from "../pages/SchedulePage";
import NavBar from "./Navbar";

const AuthNavigation = createStackNavigator(
    {
      Signin: { screen: Signin },
      Signup: { screen: Signup },
      ForgotPassword: {screen: ForgotPassword},
      //NavBar: {screen: NavBar}
    },
    {
      initialRouteName: "Signin",
     headerMode: "none"
    }
  )
  


export const AppContainer = createAppContainer(AuthNavigation)


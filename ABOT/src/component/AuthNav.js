import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer} from 'react-navigation'


import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import ForgotPassword from '../pages/ForgotPassword';

const AuthNavigation = createStackNavigator(
    {
      Signin: { screen: Signin },
      Signup: { screen: Signup },
      ForgotPassword: {screen: ForgotPassword}
    },
    {
      initialRouteName: "Signin",
      headerMode: "none"
    }
  )
  


export const AppContainer = createAppContainer(AuthNavigation)


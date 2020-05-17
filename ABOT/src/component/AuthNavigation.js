import { createStackNavigator } from 'react-navigation-stack';
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import { createAppContainer } from 'react-navigation';

const AuthNavigation = createStackNavigator(
  {
    Signin: { screen: Signin },
    Signup: { screen: Signup }
  },
  {
    initialRouteName: 'Sigin'
  }
)
 
const AppContainer = createAppContainer(AuthNavigation)

export default AppContainer;
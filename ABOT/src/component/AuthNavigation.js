import { BottomTabNavigator } from 'react-navigation-bottom';
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

export default AuthNavigation = createStackNavigator(
  {
    Signin: { screen: Signin },
    Signup: { screen: Signup }
  },
  {
    initialRouteName: 'Sigin'
  }
)


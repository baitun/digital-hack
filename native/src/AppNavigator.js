import { createStackNavigator } from 'react-navigation';
import {
  DetailsScreen,
  HomeScreen,
  LoginScreen,
  StatsScreen,
  DeviceScreen,
} from './screens';

export const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Device: { screen: DeviceScreen },
    Stats: { screen: StatsScreen },
    Details: { screen: DetailsScreen },
    Login: { screen: LoginScreen },
  },
  {
    initialRouteName: 'Home',
  }
);

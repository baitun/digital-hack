import { createStackNavigator } from 'react-navigation';
import { DetailsScreen, HomeScreen, LoginScreen, StatsScreen } from './screens';

export const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Stats: { screen: StatsScreen },
    Details: { screen: DetailsScreen },
    Login: { screen: LoginScreen },
  },
  {
    initialRouteName: 'Home',
  }
);

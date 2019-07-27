import { createStackNavigator } from 'react-navigation';
import { DetailsScreen, HomeScreen } from './screens';

export const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Details: { screen: DetailsScreen },
  },
  {
    initialRouteName: 'Home',
  }
);

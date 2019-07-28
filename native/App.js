import React from 'react';
import { createAppContainer } from 'react-navigation';
import { AppNavigator } from './src/AppNavigator';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const AppContainer = createAppContainer(AppNavigator);

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#00B896',
    accent: 'white',
  },
};

export default class App extends React.Component {
  render() {
    return (
      <PaperProvider theme={theme}>
        <AppContainer />
      </PaperProvider>
    );
  }
}

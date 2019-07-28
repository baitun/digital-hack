import React from 'react';
import { LoginScreen } from '../LoginScreen/LoginScreen';
import { StatsScreen } from '../StatsScreen/StatsScreen';

export class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Главная',
  };
  state = {
    isLogin: false,
  };
  render() {
    if (!this.state.isLogin)
      return <LoginScreen onLogin={() => this.setState({ isLogin: true })} />;
    return <StatsScreen />;
  }
}

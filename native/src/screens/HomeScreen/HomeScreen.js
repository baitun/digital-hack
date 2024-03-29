import React from 'react';
import { LoginScreen } from '../LoginScreen/LoginScreen';
import { StatsScreen } from '../StatsScreen/StatsScreen';
import { View, Text } from 'react-native';
import { Card } from './Card';
import { Row } from './Row';

export class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Главная',
  };
  state = {
    isLogin: false,
  };
  login = () => this.setState({ isLogin: true });
  logout = () => this.setState({ isLogin: false });
  render() {
    const { isLogin } = this.state;
    console.log(isLogin);
    if (isLogin === false) return <LoginScreen onLogin={this.login} />;
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1 }}>
        <Row>
          <Card color="#FF4081" onPress={() => navigate('Stats')}>
            Общие показатели
          </Card>
          <Card color="#009688">Активность</Card>
        </Row>
        <Row>
          <Card color="#FFC832">Питание</Card>
          <Card color="#1B1B25" onPress={() => navigate('Device')}>
            Внешние устройства
          </Card>
        </Row>
        <Row>
          <Card color="#00B896">Результаты анализов</Card>
          <Card color="#FFC832">Настройки</Card>
        </Row>
        <Card color="#009688" onPress={this.logout}>
          Записаться на приём к врачу
        </Card>
      </View>
    );
  }
}

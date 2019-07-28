import React from 'react';
import { View, Image } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

export class LoginScreen extends React.Component {
  state = {
    login: '',
    password: '',
  };
  render() {
    return (
      <View
        style={{
          paddingLeft: '5%',
          paddingRight: '5%',
          alignContent: 'center',
        }}
      >
        <TextInput
          label="Почта или логин"
          style={{ backgroundColor: 'white' }}
          value={this.state.login}
          onChangeText={(login) => this.setState({ login })}
        />
        <TextInput
          label="Пароль"
          style={{ backgroundColor: 'white' }}
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
        />

        <Button
          style={{ marginTop: 20 }}
          mode="contained"
          onPress={this.props.onLogin}
        >
          Войти
        </Button>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
          }}
        >
          <Text>Или авторизоваться через Facebook</Text>

          <Image
            style={{ marginTop: 20 }}
            source={require('../../assets/fb.jpg')}
          />
        </View>
      </View>
    );
  }
}

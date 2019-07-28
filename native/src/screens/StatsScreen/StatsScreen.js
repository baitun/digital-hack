import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-material-ui';

export class StatsScreen extends React.Component {
  static navigationOptions = {
    title: 'Статистика',
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
        <View style={{ flex: 1, backgroundColor: 'skyblue' }} />
        <View style={{ flex: 1, backgroundColor: 'steelblue' }} />
        <View style={{ flex: 1, backgroundColor: 'blue' }} />
      </View>
    );
  }
}

import React from 'react';
import { Text, View, Image } from 'react-native';
import { Button } from 'react-native-paper';

export class DeviceScreen extends React.Component {
  state = {
    isScanning: false,
  }

  startScan() {
    this.setState({ isScanning: true });
  }

  stopScan() {
    this.setState({ isScanning: false });
  }

  scan() {
    this.state.isScanning ? this.stopScan() : this.startScan();
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={{ color: '#009688', fontSize: 20 }}>
            Поиск совместимых сенсоров
          </Text>
        </View>
        <View style={{ flex: 2, justifyContent: 'center' }}>
          <Image source={require('../../assets/device.jpg')} />
        </View>
        <View
          style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}
        >
          <Text style={{ textAlign: 'center' }}>
            Включите ваше устройство и убедитесь, что Bluetooth включен
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Button
            style={{ color: '#009688', textDecorationLine: 'underline' }}
            onPress={() => { this.scan() }}
          >
            { this.state.isScanning ? 'Остановить поиск' : 'Найти вручную' }
          </Button>
        </View>
      </View>
    );
  }
}

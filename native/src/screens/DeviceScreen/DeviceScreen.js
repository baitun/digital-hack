import React from 'react';
import { Text, View, Image, PermissionsAndroid } from 'react-native';
import { Button } from 'react-native-paper';
import { BleManager, fullUUID } from 'react-native-ble-plx';
import MiBand from '../../miBand';

export class DeviceScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      hasBleAccess: false,
      isScanning: false,
      ble: null,
      error: null,
    };

    this.ble = new BleManager();
  }

  async startScan() {
    const ble = await this.ble.state();
    this.setState({ ble, isScanning: true, error: null, device: null });
    this.ble.startDeviceScan(null,  { allowDuplicates: false }, async (error, device) => {
      if (error) {
        this.setState({
          error,
          isScanning: false,
        })
        return;
        await this.ble.stopDeviceScan();
        this.setState({
          error: null,
          device,
          isScanning: false,
        })
      }
      this.setState({ error: null })
    });
  }

  async stopScan() {
    const ble = await this.ble.state();
    await this.ble.stopDeviceScan();
    this.setState({ ble, isScanning: false });
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
          <Text style={{ textAlign: 'center' }}>
            {this.state.ble}
          </Text>
          <Text style={{ textAlign: 'center' }}>
            { this.state.error ? this.state.error.toString() : 
              this.state.device ? this.state.device.toString() :
              this.state.devices ? this.state.devices.toString() : '' }
          </Text>
        </View>
      </View>
    );
  }
}

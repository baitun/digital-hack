import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-material-ui';

export class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          text="Go to Details... again"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

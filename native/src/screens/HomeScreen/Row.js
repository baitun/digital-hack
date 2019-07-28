import React from 'react';
import { View } from 'react-native';
export const Row = ({ children }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'powderblue',
      }}
    >
      {children}
    </View>
  );
};

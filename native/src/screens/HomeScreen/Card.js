import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export const Card = ({ color, children, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color,
      }}
    >
      <Text style={{ fontSize: 16, color: 'white' }}>{children}</Text>
    </TouchableOpacity>
  );
};

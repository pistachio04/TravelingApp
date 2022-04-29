import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Button = ({type, title}) => {
  return (
    <View style={styles.container(type)}>
      <Text style={styles.text(type)}>{title}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: type => ({
    height: 52,
    width: 311,
    backgroundColor: type === 'secondary' ? '#031F2B' : '#5EDFFF',
    borderRadius: 8,
    paddingVertical: 16,
    borderWidth: type === 'secondary' ? 1 : 0,
    borderColor: '#5EDFFF',
  }),
  text: type => ({
    textAlign: 'center',
    color: type === 'secondary' ? '#5EDFFF' : '#031F2B',
  }),
});

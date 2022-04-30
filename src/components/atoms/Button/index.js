import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';

const Button = ({type, title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: type => ({
    height: 52,
    width: 311,
    backgroundColor: type === 'secondary' ? colors.secondary : colors.primary,
    borderRadius: 8,
    paddingVertical: 16,
    borderWidth: type === 'secondary' ? 1 : 0,
    borderColor: colors.border,
  }),
  text: type => ({
    textAlign: 'center',
    color: type === 'secondary' ? colors.primary : colors.secondary,
  }),
});

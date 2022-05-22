import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import IconOnly from './IconOnly';
import ButtonWithIcon from './ButtonWithIcon';

const Button = ({type, title, onPress, icon}) => {
  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  } else if (type === 'button-icon') {
    return <ButtonWithIcon icon={icon} title={title} type={type} />;
  }
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
    width: '100%',
    backgroundColor: type === 'secondary' ? colors.secondary : colors.primary,
    borderRadius: 8,
    paddingVertical: 16,
    borderWidth: type === 'secondary' ? 1 : 0,
    borderColor: colors.border,
  }),
  text: type => ({
    fontFamily: fonts.primary[500],
    fontSize: 14,
    textAlign: 'center',
    color: type === 'secondary' ? colors.primary : colors.secondary,
  }),
});

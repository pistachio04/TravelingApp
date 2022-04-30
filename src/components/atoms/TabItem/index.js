import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  IconDestination,
  IconHomeActive,
  IconMessages,
  IconProfile,
} from '../../../assets/icon';
import {colors, fonts} from '../../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Home') {
      return <IconHomeActive />;
    }
    if (title === 'Destination') {
      return <IconDestination />;
    }
    if (title === 'Messages') {
      return <IconMessages />;
    }
    if (title === 'Profile') {
      return <IconProfile />;
    }
    return <IconHomeActive />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: active => ({
    fontFamily: fonts.primary[600],
    fontSize: 10,
    marginTop: 4,
    color: active ? colors.primary : colors.white,
  }),
});

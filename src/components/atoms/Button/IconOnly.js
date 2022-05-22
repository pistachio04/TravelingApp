import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {IconBack} from '../../../assets';
import {colors} from '../../../utils';

const IconOnly = ({icon, onPress}) => {
  const Icon = () => {
    if (icon === 'back') {
      return <IconBack onPress={onPress} />;
    }
    return <IconBack />;
  };
  return (
    <TouchableOpacity style={styles.wrapperIcon} onPress={onPress}>
      <View style={styles.container} />
      <Icon />
    </TouchableOpacity>
  );
};

export default IconOnly;

const styles = StyleSheet.create({
  wrapperIcon: {
    width: 34,
    height: 34,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 32,
    left: 32,
  },
  container: {
    backgroundColor: colors.white,
    opacity: 0.3,
    width: 34,
    height: 34,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

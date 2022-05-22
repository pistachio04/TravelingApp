import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconMilestone, IconTicket, IconTimer} from '../../../assets';
import {colors, fonts} from '../../../utils';

const IconDescription = ({icon, title, description}) => {
  const Icon = () => {
    if (icon === 'milestone') {
      return <IconMilestone />;
    }
    if (icon === 'timer') {
      return <IconTimer />;
    }
    if (icon === 'ticket') {
      return <IconTicket />;
    }
    return <IconMilestone />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        {icon ? <Icon /> : <IconMilestone />}
      </View>

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default IconDescription;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapper: {
    backgroundColor: colors.tertiary,
    height: 48,
    width: 48,
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
  },
  title: {
    fontFamily: fonts.primary[300],
    fontSize: 12,
    color: colors.text.secondary,
    marginBottom: 4,
  },
  description: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.text.primary,
  },
});

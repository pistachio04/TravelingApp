import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {IconSitemap} from '../../../assets';
import {colors, fonts} from '../../../utils';

const ButtonWithIcon = ({icon, title}) => {
  const ButtonIcon = () => {
    if (icon === 'sitemap') {
      return <IconSitemap />;
    }
    return <IconSitemap />;
  };

  return (
    <View style={styles.container}>
      <ButtonIcon />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default ButtonWithIcon;

const styles = StyleSheet.create({
  container: {
    height: 52,
    width: '100%',
    backgroundColor: colors.secondary,
    borderRadius: 8,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: fonts.primary[500],
    fontSize: 14,
    textAlign: 'center',
    color: colors.primary,
    marginLeft: 10,
  },
});

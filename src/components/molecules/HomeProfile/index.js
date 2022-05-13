import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ILNullPhoto} from '../../../assets';
import {colors, fonts} from '../../../utils';

const HomeProfile = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>Hello Hazar.</Text>
        <Text style={styles.text}>Let's Travel!</Text>
      </View>
      <Image source={ILNullPhoto} style={styles.avatar} />
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontFamily: fonts.primary[400],
    fontSize: 12,
    color: colors.text.primary,
  },
  text: {
    fontFamily: fonts.primary[600],
    fontSize: 24,
    color: colors.text.primary,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
  },
});

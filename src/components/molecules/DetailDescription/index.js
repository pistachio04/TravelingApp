import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

const DetailDescription = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About</Text>
      <Text numberOfLines={3} ellipsizeMode="tail" style={styles.description}>
        Mount Bromo, is an active volcano and part of the Tengger massif, in
        East Java, Indonesia. At 2,329 meters it is not the highest peak of the
        massif, but is the best known
      </Text>
    </View>
  );
};

export default DetailDescription;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    marginHorizontal: 32,
    paddingTop: 24,
    borderTopWidth: 1,
    borderTopColor: colors.tertiary,
  },
  title: {
    fontFamily: fonts.primary[500],
    fontSize: 18,
    color: colors.text.primary,
  },
  description: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.text.primary,
  },
});

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

const TravelCategory = ({label}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text} label={label}>
        {label}
      </Text>
    </View>
  );
};

export default TravelCategory;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
    backgroundColor: colors.primary,
    maxHeight: 34,
    alignSelf: 'flex-start',
  },
  text: {
    fontFamily: fonts.primary[500],
    fontSize: 12,
  },
});

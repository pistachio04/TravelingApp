import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

const PopularCard = ({image, name, distance}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.picture} />
      <View style={styles.coverOpacity} />
      <View style={styles.description}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.subText}>{distance}</Text>
      </View>
    </View>
  );
};

export default PopularCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 178,
    width: 124,
    borderRadius: 8,
    position: 'relative',
  },
  description: {position: 'absolute', bottom: 8, left: 8},
  text: {
    fontFamily: fonts.primary[500],
    fontSize: 12,
    color: colors.white,
  },
  subText: {
    fontFamily: fonts.primary[300],
    fontSize: 10,
    color: colors.white,
  },
  picture: {height: '100%', width: '100%', borderRadius: 8},
  coverOpacity: {
    backgroundColor: 'black',
    opacity: 0.2,
    height: '100%',
    width: '100%',
    borderRadius: 8,
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

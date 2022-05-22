import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {IconStar} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Featured = ({image, destination, distance, rate, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={image} style={styles.picture} />
      <View style={styles.coverOpacity} />
      <View style={styles.description}>
        <View>
          <Text style={styles.text}>{destination}</Text>
          <Text style={styles.subText}>{distance}</Text>
        </View>
        <View style={styles.containerRate}>
          <Text style={styles.textRate}>{rate}</Text>
          <IconStar style={styles.rate} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Featured;

const styles = StyleSheet.create({
  container: {
    height: 132,
    width: '100%',
    borderRadius: 8,
    marginBottom: 16,
  },
  picture: {
    height: 132,
    width: '100%',
    borderRadius: 8,
  },
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
  description: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerRate: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 16,
  },
  textRate: {fontFamily: fonts.primary[500], fontSize: 12, color: colors.white},
  rate: {
    height: 15,
    width: 15,
    marginLeft: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
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

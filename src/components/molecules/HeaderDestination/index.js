import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Button} from '../../atoms';
import {colors, fonts} from '../../../utils';
import {DummyDetail1, IconStar} from '../../../assets';

const HeaderDestination = ({type, icon, onPress}) => {
  return (
    <View style={styles.page}>
      <View>
        <Image source={DummyDetail1} style={styles.image} />
        <View style={styles.coverImage} />
      </View>
      <Button
        type="icon-only"
        icon="back"
        style={styles.buttonBack}
        onPress={onPress}
      />
      <View style={styles.wrapperText}>
        <View>
          <Text style={styles.text}>Mount Bromo</Text>
        </View>
        <View style={styles.wrapperRate}>
          <Text style={styles.textRate}>4.7</Text>
          <IconStar />
        </View>
      </View>
    </View>
  );
};

export default HeaderDestination;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.secondary, position: 'relative'},
  image: {
    height: 360,
    width: '100%',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  coverImage: {
    backgroundColor: 'black',
    opacity: 0.2,
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  wrapperText: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    position: 'absolute',
    left: 0,
    bottom: 29,
  },
  text: {
    fontFamily: fonts.primary[600],
    fontSize: 24,
    color: colors.text.primary,
  },
  wrapperRate: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textRate: {
    fontFamily: fonts.primary[500],
    fontSize: 20,
    color: colors.text.primary,
    marginRight: 4,
  },
});

import {StyleSheet, TextInput, View, Image} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import {IconSearch} from '../../../assets';

const InputSearch = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Temukan Liburan Anda"
        inlineImageLeft="search_icon"
      />
      <Image source={IconSearch} style={styles.icon} />
    </View>
  );
};

export default InputSearch;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
  },
  input: {
    fontFamily: fonts.primary[300],
    fontSize: 16,
    textAlignVertical: 'center',
    borderRadius: 8,
    backgroundColor: colors.tertiary,
    height: 55,
    padding: 16,
    color: 'white',
  },
  icon: {height: 24, width: 24, position: 'absolute', right: 16, top: 38},
});

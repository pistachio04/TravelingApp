import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ILLogo} from '../../assets';

const Splash = () => {
  return (
    <View style={styles.page}>
      <ILLogo style={styles.logo} />
      <Text style={styles.title}>Taveling App</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  logo: {height: 100, width: 100},
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {fontSize: 20, marginTop: 20},
});

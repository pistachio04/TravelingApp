import React, {useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ILLogo} from '../../assets';
import {colors, fonts} from '../../utils';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 3000);
  }, [navigation]);
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
    backgroundColor: colors.white,
  },
  title: {
    fontFamily: fonts.primary[500],
    fontSize: 24,
    marginTop: 20,
    textAlign: 'center',
    color: colors.text.tertiary,
  },
});

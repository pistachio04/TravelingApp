import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILGetStarted} from '../../assets';
import {Button, Gap} from '../../components';
import {colors, fonts} from '../../utils';

const GetStarted = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <ILGetStarted />
        <Text style={styles.title}>Escape the ordinary life</Text>
        <Text style={styles.subTitle}>
          Discover great experiences around you and make you live interesting!
        </Text>
      </View>
      <View>
        <Button title="Get Started" />
        <Gap height={16} />
        <Button
          title="Login"
          type="secondary"
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 32,
    justifyContent: 'space-between',
    backgroundColor: colors.secondary,
  },
  container: {marginTop: 164, maxWidth: 311},
  title: {
    fontFamily: fonts.primary[500],
    fontSize: 24,
    maxWidth: 311,
    marginTop: 28,
    textAlign: 'center',
    color: colors.text.primary,
  },
  subTitle: {
    fontFamily: fonts.primary[300],
    fontSize: 14,
    marginTop: 8,
    maxWidth: 311,
    textAlign: 'center',
    color: colors.text.primary,
  },
});

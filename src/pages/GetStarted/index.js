import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILGetStarted} from '../../assets';
import {Button, Gap} from '../../components';

const GetStarted = () => {
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
        <Button title="Login" type="secondary" />
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
    backgroundColor: '#031F2B',
  },
  container: {marginTop: 164},
  title: {marginTop: 28, textAlign: 'center', color: 'white'},
  subTitle: {marginTop: 8, textAlign: 'center', color: 'white'},
});

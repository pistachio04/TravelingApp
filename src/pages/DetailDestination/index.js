import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Button,
  DetailDescription,
  Gap,
  HeaderDestination,
  IconDescription,
} from '../../components';
import {colors} from '../../utils';

const DetailDestination = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View>
        <HeaderDestination onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.iconWrapper}>
        <IconDescription
          icon="milestone"
          title="Difficulty"
          description="Easy"
        />
        <IconDescription
          icon="timer"
          title="Time Needed"
          description="30 - 60 min"
        />
        <IconDescription icon="ticket" title="Ticket" description="50 K" />
      </View>
      <View>
        <DetailDescription />
      </View>
      <View style={styles.wrapperButton}>
        <View style={styles.button}>
          <Button type="button-icon" title="Sitemap" />
        </View>
        <Gap width={18} />
        <View style={styles.button}>
          <Button title="Start" />
        </View>
      </View>
    </View>
  );
};

export default DetailDestination;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
    justifyContent: 'space-between',
  },
  iconWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    paddingVertical: 24,
  },
  wrapperButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 32,
    marginBottom: 32,
  },
  button: {
    flex: 1,
  },
});

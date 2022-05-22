import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  DummyFeatured1,
  DummyFeatured2,
  DummyPopular1,
  DummyPopular2,
  DummyPopular3,
} from '../../assets';
import {Gap, TravelCategory} from '../../components/atoms';
import {
  Featured,
  HomeProfile,
  InputSearch,
  PopularCard,
} from '../../components/molecules';
import {colors, fonts} from '../../utils';
const Home = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperSection}>
            <Gap height={34} />
            <HomeProfile />
            <InputSearch />
          </View>

          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={64} />
                <TravelCategory label="Forest" />
                <TravelCategory label="Mountain" />
                <TravelCategory label="Beach" />
                <TravelCategory label="City" />
                <TravelCategory label="Diving" />
                <Gap width={56} />
              </View>
            </ScrollView>
          </View>

          <View style={styles.wrapperSection}>
            <Text style={styles.sectionLabel}>Popular Experiences</Text>
          </View>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.card}>
                <Gap width={64} />
                <PopularCard
                  image={DummyPopular1}
                  name="Sea Diving"
                  distance="1.1 km boat"
                />
                <Gap width={18} />
                <PopularCard
                  image={DummyPopular2}
                  name="Mountain Trip"
                  distance="5.1 km away"
                />
                <Gap width={18} />
                <PopularCard
                  image={DummyPopular3}
                  name="Beach Adventure"
                  distance="2 km away"
                />
                <Gap width={64} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.sectionLabel}>Featured</Text>
          </View>
          <View style={styles.wrapperSection}>
            <Featured
              image={DummyFeatured1}
              destination="Mount Bromo"
              distance="5 km away"
              rate="4.7"
              onPress={() => navigation.navigate('DetailDestination')}
            />
            <Featured
              image={DummyFeatured2}
              destination="Nusa Penida"
              distance="4.2 km away"
              rate="4.5"
            />
          </View>
          <Gap height={34} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  wrapperScroll: {marginHorizontal: -32},
  wrapperSection: {
    paddingHorizontal: 34,
  },
  sectionLabel: {
    fontFamily: fonts.primary[500],
    fontSize: 16,
    color: colors.white,
    marginTop: 24,
    marginBottom: 16,
  },
  category: {flexDirection: 'row'},
  card: {
    flexDirection: 'row',
  },
});

// Imports: Dependencies
import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, Text, View } from 'react-native';

// Imports: Components
import SearchBar from '../components/SearchBar';
import ScrollListHorizontal from '../components/ScrollListHorizontal';
import FeaturedCategory from '../components/FeaturedCategory';
import ScrollListDouble from '../components/ScrollListDouble';

// React Native: Explore
export default class Explore extends React.Component {
  constructor(props) {
    super();

    this.state = {

    }
  }

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView scrollEventThrottle={16}>
          <SearchBar />
          <View style={styles.horizontalScrollContainer}>
            <Text style={styles.text}>What can we help you find, Jeff?</Text>
            <ScrollListHorizontal />
            <FeaturedCategory />
            <ScrollListDouble />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  text: {
    flex: 1,
    fontSize: 24,
    fontWeight: '700',
    paddingHorizontal: 20,
  },
  horizontalScrollContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,
  },
});

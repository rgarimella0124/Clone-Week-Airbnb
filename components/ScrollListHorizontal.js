// Imports: Dependencies
import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

// Imports: Components
import Category from './Category';

// Component: Scroll List Horizontal
export default class ScrollListHorizontal extends React.Component {
  render() {
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.horizontalScrollContainer}>
        <Category imageUri={require('../assets/airbnb/home.jpg')} name="Home"/>
        <Category imageUri={require('../assets/airbnb/experiences.jpg')} name="Experiences" />
        <Category imageUri={require('../assets/airbnb/restaurant.jpg')} name="Restaurant" />
        <Category imageUri={require('../assets/airbnb/island.jpg')} name="Island Getaways" />
      </ScrollView>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  horizontalScrollContainer: {
    height: 130,
    marginTop: 20,
  },
});

// Imports: Dependencies
import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';

// Screen Dimensions
const { height, width } = Dimensions.get('window');

// Component: Featured Category
export default class Category extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Introducing Airbnb Plus</Text>
        <Text style={styles.subtitle}>A new selection of homes verified for quality & comfort</Text>


        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../assets/airbnb/home.jpg')}/>
        </View>

      </View>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '100',
    marginTop: 10,
  },
  imageContainer: {
    width: width - 40,
    height: 200,
    marginTop: 20,
  },
  image: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'cover',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#dddddd',
  },
});

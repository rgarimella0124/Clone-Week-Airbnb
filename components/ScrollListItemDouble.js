// Imports: Dependencies
import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import StartRating from 'react-native-star-rating';

// Screen Dimensions
const { height, width } = Dimensions.get('window');

// Component: List Item Double
export default class ListItemDouble extends React.Component {
  render() {
    return (
      <View style={styles.listItem}>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/airbnb/home.jpg')} style={styles.image} />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.listingTitle}>Private Room - 2 Beds</Text>
          <Text style={styles.listingDescription}>Nature's Backyard</Text>
          <Text style={styles.listingPrice}>$199 USD</Text>

          <StartRating 
            disabled={true}
            maxStars={5}
            rating={4}
            starSize={10}
          />
        </View>

      </View>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  listItem: {
    width: width/2 - 30,
    height: width/2 - 30,
    borderWidth: 0.5,
    borderColor: '#dddddd',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  textContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    paddingLeft: 10,
  },
  listingTitle: {
    fontSize: 12,
    fontWeight: '400',
    color: '#FD5C63',
  },
  listingDescription: {
    fontSize: 14,
    fontWeight: '600',
  },
  listingPrice: {
    fontSize: 12,
    fontWeight: '500',
  },
});

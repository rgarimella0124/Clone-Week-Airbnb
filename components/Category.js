// Imports: Dependencies
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

// Component: Category
export default class Category extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image source={this.props.imageUri} style={styles.image}/>
          </View>
          <View style={styles.text}>
              <Text>{this.props.name}</Text>
          </View>
      </View>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    height: 130,
    width: 130,
    marginLeft: 20,
    borderWidth: 0.5,
    borderColor: '#dddddd',
  },
  imageContainer: {
    flex: 2,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  text: {
    flex: 1,
    paddingLeft: 10,
    paddingTop: 10,
  },
});

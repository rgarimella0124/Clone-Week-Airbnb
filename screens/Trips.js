// Imports: Dependencies
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

// React Native: Trips
export default class Trips extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Trips</Text>
      </SafeAreaView>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  }
});
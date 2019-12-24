// Imports: Dependencies
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

// React Native: Profile
export default class Profile extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Profile</Text>
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

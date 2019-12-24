// Imports: Dependencies
import React from 'react';
import { StyleSheet, View, TextInput, Platform, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// Component: Search Bar
export default class SearchBar extends React.Component {
  constructor(props) {
    super();

    this.state = {

    }
  }
  
  componentWillMount() {
    // Start Header Height
    this.startHeaderHeight = 80;
  
    // Check Operating System
    if (Platform.OS === 'android') {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Ionicons name="ios-search" size={20} style={styles.headerIcon} />
            <TextInput
              placeholder="Search"
              placeholderTextColor="grey"
              style
            />
          </View>

        </View>
      </View>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 80,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
    justifyContent: 'center',
  },
  headerContent: {
    flexDirection: 'row',
    fontSize: 24,
    padding: 10,
    backgroundColor: 'white',
    marginHorizontal: 20,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 1,
    marginTop: Platform.OS === 'android' ? 30 : null,
    overflow: 'hidden',
  },
  headerIcon: {
    marginRight: 15,
  },
  headerText: {
    flex: 1,
    fontWeight: '700',
    backgroundColor: 'white',
  }
});

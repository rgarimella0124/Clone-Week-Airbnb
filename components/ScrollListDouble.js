// Imports: Dependencies
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// Imports: Components
import ListItemDouble from './ScrollListItemDouble';

// Component: Scroll List Double
export default class ScrollListDouble extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Homes Around The World</Text>

        <View style={styles.list}>
          <ListItemDouble />
          <ListItemDouble />
          <ListItemDouble />
          <ListItemDouble />
          <ListItemDouble />
          <ListItemDouble />
          <ListItemDouble />
          <ListItemDouble />
        </View>

      </View>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    paddingHorizontal: 20,
  },
  list: {
    marginTop: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

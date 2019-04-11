import React from 'react';
import {View, StyleSheet} from 'react-native';
const ListPlaces= (props) => (
  <View style={styles.listContainer}>{props.placesOutPut}</View>
);
const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});
export default ListPlaces;

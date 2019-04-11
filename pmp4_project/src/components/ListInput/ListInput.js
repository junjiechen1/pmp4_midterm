import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
const ListInput= (props) => (
  <View style={styles.inputContainer}>
    <TextInput style={styles.placeInput}
    value={props.placeName}
    onChangeText={props.placeNameChangedHandler}/>
    <Button title="Add" style={styles.placeButton} onPress={props.placeSubmitHandler} />
</View>
);
const styles = StyleSheet.create({
  placeInput: {
    width: "70%",
    height:60,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    textAlign: 'center',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1
  },
  inputContainer: {
    //flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeButton: {
    width:"30%"
  }
});
export default ListInput;
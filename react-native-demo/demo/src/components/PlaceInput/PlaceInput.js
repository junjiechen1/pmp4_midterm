import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

class PlaceInput extends Component{
  state = {
      placeName: ""
      };
  placeNameChangedHandler= val => {
    this.setState({
      placeName:val  //val will remain inside the border
    });
  };

  placeSubmitHandler= () =>{
    if(this.state.placeName.trim()===""){
      return;
    }
    this.props.onPlaceAdded(this.state.placeName);
  };

  render(){
      return(
        <View style={styles.inputcontainer}>
        <TextInput 
            style={{width:300,borderColor:"black",borderWidth:1}}
            placeholder="add item"
            value = {this.state.placeName}
            onChangeText = {this.placeNameChangedHandler}
               />
        <Button 
        title="add" 
        style={styles.PlaceButton}
        onPress={this.placeSubmitHandler}
        />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    inputcontainer:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
    },
      PlaceButton:{
        width:"30%",
    },
});

export default PlaceInput;
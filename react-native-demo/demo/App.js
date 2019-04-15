/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Button} from 'react-native';

import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import yeezys from './src/assets/yeezy.jpg';
import ItemDetail from './src/components/ItemDetail/ItemDetail';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  state = {
    places: [],
    selectedplace:null
  };
 
  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key:Math.random(),// should be unique key for deleting
          name: placeName,  // name of place
          image:{
            uri:'https://www.flightclub.com/media/catalog/product/8/0/800389_1.jpg'
          } 
        })
      };
    });
  };

  placeSelectedHandler = key =>{
    this.setState(prevState=>{
        return {
        selectedplace:prevState.places.find(ItemDetail=>{
          return ItemDetail.key===key;
        })
      };
      });
  };
  render() {
  
    return (
      <View style={styles.container}>
        <ItemDetail selectedplace ={this.state.selectedplace}/>
        <PlaceInput onPlaceAdded = {this.placeAddedHandler}/>
        <PlaceList
          places = {this.state.places}
          onItemSelected = {this.placeSelectedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    padding:50,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
 
 
  
});

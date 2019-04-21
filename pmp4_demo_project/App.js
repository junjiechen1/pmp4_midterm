/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Button} from 'react-native';
import {connect}from 'react-redux';
import {addPlace,selectPlace,deletePlace,deselecteplace} from './src/store/actions/index';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import ItemDetail from './src/components/ItemDetail/ItemDetail';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

//temp
type Props = {};
export default class App extends Component<Props> {
 
  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
  };
  placeDeletedHandler =()=>{
   this.props.onDeletePlace();
  };
  modalClosedHandler =()=>{
    this.props.onDeselectPlace();
  }

  placeSelectedHandler = key =>{
  this.props.onSelectPlace(key);
  };
  render() {
  
    return (
      <View style={styles.container}>
        <ItemDetail selectedplace ={this.props.selectedplace}
         OnItemDeleted={this.placeDeletedHandler}
         onModalClosed = {this.modalClosedHandler}/>
        <PlaceInput onPlaceAdded = {this.placeAddedHandler}/>
        <PlaceList
          places = {this.props.places}
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

const mapStateToProps = state=>{
  return{
    places:state.Items.places,
    selectedplace:state.Items.selectedplace
  };
};
const mapDispatchToProps = dispatch =>{
  return{
    onAddPlace:(name) =>dispatch(addPlace(name)),
    onDeletePlace:()=>dispatch(deletePlace()),
    onSelectPlace:(Key)=>dispatch(selectPlace(Key)),
    onDeselectPlace:() =>dispatch(deselecteplace()), 
  };
};

export default connect(mapDispatchToProps,mapStateToProps)(App);
import React from 'react';
import {View, Text ,StyleSheet , TouchableOpacity,Image} from 'react-native';

const ListItem = (props) =>
(
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={Styles.ListItem} >
        <Image resizeMode="cover" source = {props.placeImage} style = {Styles.placeImage}/>
             <Text>
                {props.placeName}
             </Text>
        </View>
    </TouchableOpacity>
);

const Styles = StyleSheet.create({
    ListItem:{
        width:"100%",
        padding:10,
        backgroundColor: "#eee",
        marginBottom:5,
        flexDirection:"row",
        alignItems:"center"
    },
    placeImage:{
        marginRight:8,
        height:30,
        width:30
    }
});
export default ListItem;
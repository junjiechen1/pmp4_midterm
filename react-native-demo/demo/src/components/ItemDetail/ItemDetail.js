import React from 'react';
import {Modal , View , Image,Text,Button ,StyleSheet} from 'react-native';

const placeDetail = props =>{
    let modalContent = null;
    if(props.selectedplace){
        modalContent=(
         <View>
             <Image source = {props.selectedplace.image} style = {styles.ItemImage}/>
         <Text style ={styles.ItemName}>
             {props.selectedplace.name}
             
         </Text>
         </View>
        );
    }
    return(
    <Modal visible={props.selectedplace !==null} animationType="fade" >
        <View style={styles.modalcontainer}>
            {modalContent}
            
            <View>
                <Button title="Delete" color ="red"/>
                <Button title="cancel"/>
            </View>
        </View>
    </Modal>
    )
};

const styles = StyleSheet.create({
    modalcontainer:{
        margin:22
    },
    ItemImage:{
        width:"100%",
        height:200,
    },
    ItemName:{
        fontWeight:"bold",
        textAlign:"center",
        fontSize:28,

    },
})
export default placeDetail;
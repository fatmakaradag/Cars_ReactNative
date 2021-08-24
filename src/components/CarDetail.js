import React,{Component} from "react";
import {Text,View,Image,Linking} from "react-native";
import Item from "./Item";
import ItemSection from "./ItemSection";

import Button from "./Button";

//tanımlayacağım component data almayacak ve sadece gösterme işlemi yapacağı için functional componenet 
// olmasını istiyorum ilk başta

const CarDetail = ({brand}) =>{
    const{headerContainer,headerText,imageStyle}=styles;
    return (
    <Item>
        <ItemSection>
            <View style={headerContainer}>
                <Text style={headerText}>{brand.brand}</Text> 
                <Text style={headerText}>{brand.model[0].name}</Text>
            </View>
        </ItemSection>
        <ItemSection>
            <Image style={imageStyle}
             source={{uri:brand.model[0].image}}>

            </Image>
            
        </ItemSection>
        <ItemSection>
            <Button buttonPress={()=>{
               Linking.openURL(brand.model[0].url)
            }}
          />
        </ItemSection>
    </Item>
    ) 
}

const styles = {
    headerContainer:{
        flexDirection:'column',
        justifyContent: 'space-between'
    } ,
    headerText:{
        fontSize:18,
        fontWeight:'500',
        textTransform:'uppercase'

    },
    imageStyle:{
        height:500,
        flex:1,
        width:0
    }
}
export default CarDetail;
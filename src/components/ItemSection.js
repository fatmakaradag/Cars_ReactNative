
import React,{Component} from "react";
import {Text,View} from "react-native";


const ItemSection = (props)=>{
    return (<View style={styles.viewStyle}>
        {props.children}

    </View>
    )
}

const styles ={
    viewStyle:{
        borderBottomWidth:1,
        borderColor:"gainsbro",
        flexDirection:'row',
        justifyContent:'flex-start',
        padding:5


    }
}

export default ItemSection;
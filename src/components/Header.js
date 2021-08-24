//import libraies

import React from "react";
import {Text,View} from "react-native";


//create component




//props ile parentten veri akışı sağlanır.
const Header = props => {
    const {textStyling,viewStyle}=styles;
 
    return (
        <View style={viewStyle}>
           <Text style={textStyling}>{props.title}</Text>
        </View>
    );

};

const styles = {
    textStyling:{
        fontSize=22

    },
    viewStyle:{
        backgroundColor:'gainsboro',
        height:70,
        paddingTop:70,
        justifyContent:'center',
        alignItems:'center'
    },
    

};


//render avaliable component from another component
//diğer componentlerde export default şeklinde tanımlanınca kullanabilir.//
export default Header;
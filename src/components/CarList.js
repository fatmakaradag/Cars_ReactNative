//import libraies

import React,{Component} from "react";
import {ScrollView, View} from "react-native";
import CarDetail from "./CarDetail";
import axios from "axios";

//create component
//componentin HTTP isteği gönderip cevap almasını sağlamak için CLASS component kullanılır.
//bu da reacttan Component olarak import edilir.
class CarList extends Component {

    constructor(){
        super();
        this.state= { CarList:[] } //başlangıçta state boş bir array olrak tanımlanır.
    }

    //*******class component içinde olmazsa olmaz tek method render methodudur.*********

    
    //artık functional bir component olmadığı için bir method çağırmamız gerekir ve render() ile ekrana basılır.

     //componentDidMount uygulamada bir kere çağrılır.
    componentDidMount(){
        axios.get('https://givecars.herokuapp.com')
        .then((response )=>{
            this.setState={CarList:response.data}  //consoledan dönen data,setState ile de güncelleme sağlanır.
            
        })
    }


    renderList =()=>{
        return this.state.CarList.map(brand) =()=>{
            return <CarDetail key={brand.model[0].name}  brand={brand}/> //arabalara ait bilgileri ekrana render edilmesi sağlanacak.
        }
    }


    render(){
        return (
            <ScrollView>
               {this.renderList} 
            </ScrollView>
    
        );
    }
    

}

//index dosyası içinde kullanabilmek için
export default CarList;
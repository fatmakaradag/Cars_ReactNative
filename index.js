
import React  from 'react';
import {AppRegistry, View } from 'react-native';
import Header from './src/components/Header';

import CarList from './src/components/CarList'
//ilk component


const App=()=> {
    return (
        <View style ={{flex:1}}>
            <Header title={'Cars'}></Header>
            <CarList></CarList>

        </View>
         
    );

}



//appregistry componentini sadece app in root componenti kullanır!!!//
AppRegistry.registerComponent("cars",() => App); //proje ismini ve o proje de çalışacak olan component render edilir.
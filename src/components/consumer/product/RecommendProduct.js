import React, {Component} from 'react';
import {Image, StyleSheet, View, Dimensions, Text} from 'react-native';
import { ListItem} from 'react-native-elements';
import InputSpinner from 'react-native-input-spinner';

export default class RecommendProduct extends Component{
    constructor(props){
        super(props)
    }
/*
https://github.com/Monte9/react-native-ratings/issues/26        : please see for rating coding
*/

  render(){

    return (
        <View style={{flexDirection : 'row', alignItems : 'center'}}>
            <View>
                <View style={styles.productimageview}>
                    <Image style={styles.productimage} source={require('../assets/imgs/product3.png')} ></Image> 
                </View>
                <View style={{marginTop : 5, marginLeft : 20, alignItems : 'center'}}>
                    <Text style={{color : '#23b825', fontSize:12}}>John Doe's CBD Oil</Text>
                    <Text style={{color : '#23b825'}}>$ 50.00</Text>
                </View>
            </View>
            <View>
                <View style={styles.productimageview}>
                    <Image style={styles.productimage} source={require('../assets/imgs/product1.png')} ></Image> 
                </View>
                <View style={{marginTop : 5, marginLeft : 20, alignItems : 'center'}}>
                    <Text style={{color : '#23b825', fontSize:12}}>CBD Wax</Text>
                    <Text style={{color : '#23b825'}}>$ 12.55</Text>
                </View>
            </View>
        </View>

);
  }
}
const recommendProductHeight = Math.round(Dimensions.get('window').height) *3/7;
console.log(recommendProductHeight*2/7);
const styles = StyleSheet.create({
    productimageview : {
        width : 100,
        height : recommendProductHeight *2 /7,
        borderWidth : 1,
        borderColor : '#23b825',
        borderRadius : 10,
        alignItems : 'center',
        justifyContent : 'center',
        marginLeft : 20
    },
    productimage : {
        height : 100,
        width : 90

    }
});

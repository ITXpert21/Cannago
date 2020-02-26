import React, {Component} from 'react';
import {Image, StyleSheet, View, TouchableOpacity, Text, Dimensions} from 'react-native';

export default class AddNewCart extends Component{


    constructor(props){
        super(props)
    }
  render(){
      console.log(screenWidth);
      console.log(screenHeight*2/3);
    return (
        <View style={styles.addcartbuttonview}> 
            <TouchableOpacity  onPress={this.props.gotoProductCategoryPage}>
                <Image source={require('../assets/imgs/cartadd.png')} style={{height:120}}></Image>
            </TouchableOpacity>
            <Text style={{fontSize : 20, marginTop : 20}}>Shopping Cart Empty</Text>
        </View>
    );
  }
}
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({
    addcartbuttonview : {
        width : '100%',
        height : screenHeight*4/7,
        alignItems : 'center',
        justifyContent : 'center',
    },
    productimage : {
        height : 90,
        width : 90

    }, 

    listitem : {
        backgroundColor : 'transparent',
        marginLeft : 10
    }
});

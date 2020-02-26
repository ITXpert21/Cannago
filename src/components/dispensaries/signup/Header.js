import React, {Component} from 'react';
import {Image, StyleSheet, View, Dimensions, Platform} from 'react-native';

export default class Header extends Component{
  render(){
    return (
        <View style={styles.logopicWrap}>
          <Image style={styles.logopic} source={require('../assets/imgs/station1.png')} ></Image>
          <Image style={styles.camera} source={require('../assets/imgs/camera.png')} ></Image>
        </View>

    
    );
  }
}
const screenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({

    logopic: {
        width : screenWidth - 60,
        height : 150,
        borderRadius : 10
    },
    camera : {
      width : 50,
      height : 50,
      marginTop : -30
    },
    logopicWrap : {
      alignItems : 'flex-end',
      justifyContent : 'center',
      borderRadius: 10,
      width : screenWidth - 60,
      height : 200,
      marginTop : 20
    }

});

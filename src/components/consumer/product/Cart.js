import React, {Component} from 'react';
import {Image, StyleSheet, View, Dimensions, Text} from 'react-native';
import { ListItem} from 'react-native-elements';
import InputSpinner from 'react-native-input-spinner';
export default class Cart extends Component{


    constructor(props){
        super(props)
    }
/*
https://github.com/Monte9/react-native-ratings/issues/26        : please see for rating coding
*/

  render(){
    let rating = 3;
    let stars = [];
    for (var i = 1; i <= 5; i++) {
        let path = require('../assets/imgs/selectedStar.png');
        if (i > rating) {
          path = require('../assets/imgs/unselectedStar.png');
        }
        stars.push(<Image key={i} style={styles.ratingImage} source={path} />);
      }
    return (

        <View>

            <ListItem
                title='Just CBD Gummies'
                subtitle={
                    <View>
                        <Text style={{color : '#23b825', fontSize : 14, margin : 5}}>$ 24.99</Text>
                        <InputSpinner
                            max={10}
                            min={1}
                            step={1}
                            colorMax={"#f04048"}
                            colorMin={"#40c5f4"}
                            value={1}
                            height={30}
                            width={100}
                            style={{margin : 5}}
                            onChange={(num)=>{console.log(num)}} />
                    </View>
                }
                containerStyle={styles.listitem}
                leftAvatar={
                    <View style={styles.productimageview}>
                        <Image style={styles.productimage} source={require('../assets/imgs/product3.png')} ></Image> 
                   </View>
                }
                />
            <ListItem
                title='CBD Wax 10ML'
                subtitle={
                    <View>
                        <Text style={{color : '#23b825', fontSize : 14, margin : 5}}>$ 15</Text>
                        <InputSpinner
                            max={10}
                            min={1}
                            step={1}
                            colorMax={"#f04048"}
                            colorMin={"#40c5f4"}
                            value={1}
                            height={30}
                            width={100}
                            style={{margin : 5}}
                            onChange={(num)=>{console.log(num)}} />
                    </View>
                }
                containerStyle={styles.listitem}
                leftAvatar={
                    <View style={styles.productimageview}>
                        <Image style={styles.productimage} source={require('../assets/imgs/product2.png')} ></Image> 
                   </View>
                }
                />                
            <ListItem
                title='CBD Wax 10ML'
                subtitle={
                    <View>
                        <Text style={{color : '#23b825', fontSize : 14, margin : 5}}>$ 15</Text>
                        <InputSpinner
                            max={10}
                            min={1}
                            step={1}
                            colorMax={"#f04048"}
                            colorMin={"#40c5f4"}
                            value={1}
                            height={30}
                            width={100}
                            style={{margin : 5}}
                            onChange={(num)=>{console.log(num)}} />
                    </View>
                }
                containerStyle={styles.listitem}
                leftAvatar={
                    <View style={styles.productimageview}>
                        <Image style={styles.productimage} source={require('../assets/imgs/product2.png')} ></Image> 
                   </View>
                }
                />  
            <ListItem
                title='CBD Wax 10ML'
                subtitle={
                    <View>
                        <Text style={{color : '#23b825', fontSize : 14, margin : 5}}>$ 15</Text>
                        <InputSpinner
                            max={10}
                            min={1}
                            step={1}
                            colorMax={"#f04048"}
                            colorMin={"#40c5f4"}
                            value={1}
                            height={30}
                            width={100}
                            style={{margin : 5}}
                            onChange={(num)=>{console.log(num)}} />
                    </View>
                }
                containerStyle={styles.listitem}
                leftAvatar={
                    <View style={styles.productimageview}>
                        <Image style={styles.productimage} source={require('../assets/imgs/product2.png')} ></Image> 
                   </View>
                }
                />                  
        </View>
    );
  }
}
const screenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
    productimageview : {
        width : 100,
        height : 100,
        borderWidth : 1,
        borderRadius : 10,
        borderColor : '#23b825',
        alignItems : 'center',
        justifyContent : 'center'
    },
    productimage : {
        height : 90,
        width : 90

    }, 

    listitem : {
        backgroundColor : 'transparent',
        marginLeft : '10%'
    }
});

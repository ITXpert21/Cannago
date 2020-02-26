import React, {Component} from 'react';
import {Image, StyleSheet, View, Dimensions, TouchableOpacity, Text} from 'react-native';
export default class Category extends Component{
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
        let path = require('../assets/imgs/star1.png');
        if (i > rating) {
          path = require('../assets/imgs/star2.png');
        }
        stars.push(<Image key={i} style={styles.ratingImage} source={path} />);
      }        
    return (

        <View style={{alignItems : 'center'}}>
            <TouchableOpacity onPress={this.props.gotoProductsPage}>
                <View style={{alignItems : 'center', marginTop : 20}}> 
                    <Text style={styles.stationtext}>Cannabis Station</Text>
                    <Image style={styles.stationimage} source={require('../assets/imgs/station1.png')} ></Image>
                    <View style={styles.stationfooter}>
                        <Text style={styles.stationfootertext}> Store's pricing: $$</Text>
                        <Text style={styles.stationfootertext}>Store's hour today: 9:am - 9:pm</Text>
                        <Text style={styles.stationfootertext}>Estimate Delivery ; 40 min</Text>
                        <View style={styles.ratingview}>
                            {stars}
                            <Text style={{color : 'white', fontSize : 14}}>  , 17 Reviews</Text>                      
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <View style={{alignItems : 'center', marginTop : 20}}> 
                <Text style={styles.stationtext}>Harvest</Text>
                <Image style={styles.stationimage} source={require('../assets/imgs/harvest.png')} ></Image>
                <View style={styles.stationfooter}>
                    <Text style={styles.stationfootertext}> Store's pricing: $$</Text>
                    <Text style={styles.stationfootertext}>Store's hour today: 9:am - 9:pm</Text>
                    <Text style={styles.stationfootertext}>Estimate Delivery ; 40 min</Text>
                    <View style={styles.ratingview}>
                        {stars}
                        <Text style={{color : 'white', fontSize : 14}}>  , 17 Reviews</Text>                      
                    </View>
                </View>
            </View>
            <View style={{alignItems : 'center', marginTop : 20}}> 
                <Text style={styles.stationtext}>SunnySide</Text>
                <Image style={styles.stationimage} source={require('../assets/imgs/sunnyside.png')} ></Image>
                <View style={styles.stationfooter}>
                    <Text style={styles.stationfootertext}> Store's pricing: $$</Text>
                    <Text style={styles.stationfootertext}>Store's hour today: 9:am - 9:pm</Text>
                    <Text style={styles.stationfootertext}>Estimate Delivery ; 40 min</Text>
                    <View style={styles.ratingview}>
                        {stars}
                        <Text style={{color : 'white', fontSize : 14}}>  , 17 Reviews</Text>                      
                    </View>
                </View>
            </View>            
        </View>
    );
  }
}
const screenWidth = Math.round(Dimensions.get('window').width) -60;

const styles = StyleSheet.create({
    search : {
        alignItems : 'center',
        width : 300,
        height: 50,
        marginTop : 40,
        marginBottom : 20,
        borderRadius:10,
        borderColor : '#b3b0ad',
        borderWidth : 1
    },    

    searchinput : {
        width : 300,
        height: 50,
    },
    stationtext : {
        color : 'black',
        fontSize : 22,
        fontWeight : '400',
        marginBottom : 10
    },
    stationimage : {
        height : 150,
        width : screenWidth,
        borderTopLeftRadius : 10,
        borderTopRightRadius : 10
    },    
    stationfooter : {
        alignItems : 'center',
        backgroundColor : '#43d162',
        height : 100,
        width : screenWidth,
        borderBottomLeftRadius : 10,
        borderBottomRightRadius : 10
    },
    ratingview : {
        marginTop : 5,
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center'
    },
    stationfootertext : {
        marginTop : 5,
        color : 'white',
        fontSize : 14
    },
    ratingImage: {
        height: 15,
        width: 15,
        margin : 5
    },    
});

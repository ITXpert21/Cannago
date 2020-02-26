import React, {Component} from 'react';
import {Image, StyleSheet, View, TextInput, TouchableOpacity, Text} from 'react-native';
import { Rating} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Products extends Component{
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
            <View style={styles.productsrow}>
                    <View style={styles.productscol}>
                        <View style={{flexDirection : 'row', justifyContent : 'flex-end', width:'90%'}}>
                            <Text style={styles.pricetext}>$ 50.00</Text>
                        </View>
                        <TouchableOpacity onPress={this.props.gotoProductDetailPage}>
                            <View>
                                <Image source={require('../assets/imgs/product1.png')} style={{height:120}}></Image>
                            </View>
                        </TouchableOpacity>

                        <View style={styles.productfooter} >

                            <Text style={styles.footertext}> Jone Doe's CBD Oil</Text>
                            <View style={styles.ratingview}>
                                {stars}
                                <Text style={{color : 'white', fontSize : 12}}>, 17 Reviews</Text>                      
                            </View>

                            <View style={{marginTop : 5}}>
                                <Icon name="chevron-circle-right"  size={20} color="white" />
                            </View>
                        </View>                      
                    </View>
                <View style={{width : '10%'}}>
                </View>      

                <View style={styles.productscol}>
                    <View style={{flexDirection : 'row', justifyContent : 'flex-end', width:'90%'}}>
                        <Text style={styles.pricetext}>$ 50.00</Text>
                    </View>
                    <View>
                        <Image source={require('../assets/imgs/product2.png')} style={{height:120}}></Image>
                    </View>
                    <View style={styles.productfooter}>
                        <Text style={styles.footertext}> Jone Doe's CBD Oil</Text>
                        <View style={styles.ratingview}>
                            {stars}

                            <Text style={{color : 'white', fontSize : 12}}>, 17 Reviews</Text>                      
                        </View>
                        <View style={{marginTop : 5}}>
                            <Icon name="chevron-circle-right"  size={20} color="white" />
                        </View>
                    </View> 
                </View>
            </View>
            <View style={styles.productsrow}>
                <View style={styles.productscol}>
                    <View style={{flexDirection : 'row', justifyContent : 'flex-end', width:'90%'}}>
                        <Text style={styles.pricetext}>$ 50.00</Text>
                    </View>
                    <View>
                        <Image source={require('../assets/imgs/product3.png')} style={{height:120}}></Image>
                    </View>
                    <View style={styles.productfooter}>
                        <Text style={styles.footertext}> Jone Doe's CBD Oil</Text>
                        <View style={styles.ratingview}>
                            {stars}

                            <Text style={{color : 'white', fontSize : 12}}>, 17 Reviews</Text>                      
                        </View>
                        <View style={{marginTop : 5}}>
                            <Icon name="chevron-circle-right"  size={20} color="white" />
                        </View>
                    </View>                      
                </View>

                <View style={{width : '10%'}}>
                </View>      

                <View style={styles.productscol}>
                    <View style={{flexDirection : 'row', justifyContent : 'flex-end', width:'90%'}}>
                        <Text style={styles.pricetext}>$ 50.00</Text>
                    </View>
                    <View>
                        <Image source={require('../assets/imgs/product4.png')} style={{height : 120}}></Image>
                    </View>
                    <View style={styles.productfooter}>
                        <Text style={styles.footertext}> Jone Doe's CBD Oil</Text>
                        <View style={styles.ratingview}>
                            {stars}
                            <Text style={{color : 'white', fontSize : 12}}>, 17 Reviews</Text>                      
                        </View>
                        <View style={{marginTop : 5}}>
                            <Icon name="chevron-circle-right"  size={20} color="white" />
                        </View>
                    </View> 
                </View>
            </View>
            <View style={styles.productsrow}>
                <View style={styles.productscol}>
                    <View style={{flexDirection : 'row', justifyContent : 'flex-end', width:'90%'}}>
                        <Text style={styles.pricetext}>$ 50.00</Text>
                    </View>
                    <View>
                        <Image source={require('../assets/imgs/product5.png')} style={{height:120}}></Image>
                    </View>
                    <View style={styles.productfooter}>
                        <Text style={styles.footertext}> Jone Doe's CBD Oil</Text>
                        <View style={styles.ratingview}>
                            {stars}
                                <Text style={{color : 'white', fontSize : 12}}>, 17 Reviews</Text>                      
                        </View>
                        <View style={{marginTop : 5}}>
                            <Icon name="chevron-circle-right"  size={20} color="white" />
                        </View>
                    </View>                      
                </View>

                <View style={{width : '10%'}}>
                </View>      

                <View style={styles.productscol}>
                    <View style={{flexDirection : 'row', justifyContent : 'flex-end', width:'90%'}}>
                        <Text style={styles.pricetext}>$ 50.00</Text>
                    </View>
                    <View>
                        <Image source={require('../assets/imgs/product6.png')} style={{height : 120}}></Image>
                    </View>
                    <View style={styles.productfooter}>
                        <Text style={styles.footertext}> Jone Doe's CBD Oil</Text>
                        <View style={styles.ratingview}>
                            {stars}
                                <Text style={{color : 'white', fontSize : 12}}>, 17 Reviews</Text>                      
                        </View>
                        <View style={{marginTop : 5}}>
                            <Icon name="chevron-circle-right"  size={20} color="white" />
                        </View>
                    </View> 
                </View>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    productsrow : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center',
        width : '90%',
        height : 220,
        marginTop : 30

    },
    productscol : {
        flexDirection : 'column',
        borderColor : '#3cc93f',
        borderWidth : 1,
        alignItems : 'center',
        justifyContent : 'flex-end',
        width : '45%',
        height : 220,
        borderBottomLeftRadius : 20,
        borderBottomRightRadius : 20,
        borderTopLeftRadius : 10
    },
    pricetext : {
        color : '#3cc93f',
        fontSize : 14,
        justifyContent : 'flex-end'
    },
    ratingview : {
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        marginTop : 5,
    },
    productfooter : {
        alignItems : 'center',
        backgroundColor : '#43d162',
        height : 70,
        width : '100%',
        borderBottomLeftRadius : 20,
        borderBottomRightRadius : 20

    },
    footertext : {
        marginTop : 5,
        color : 'white',
        fontSize : 14
    },
    ratingImage: {
        height: 15,
        width: 15,
    }, 
});

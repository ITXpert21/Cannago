
import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  Dimensions,
  TouchableOpacity,
  View
} from 'react-native';

import Cart from '../../components/consumer/product/Cart';
import RecommendProduct from '../../components/consumer/product/RecommendProduct';
import Tabs from '../../components/consumer/tab/Tabs';
import Icon from 'react-native-vector-icons/Feather';

export default class CartPage extends Component{

  state = {
    selectTab: 'cart'
  };
  constructor(props){
    super(props);
    
} 
  render(){
    return (
      <SafeAreaView style={{flex : 1, justifyContent : 'flex-end'}}>
        <View style={{flexDirection : 'row', width : '100%', height : screenHeight * 1 / 12}}>
          
            <TouchableOpacity style={styles.backBtnView} onPress={() => this.props.navigation.navigate('ProductDetailPage')}>
              <Icon name="arrow-left"  size={30} color="white"/>
            </TouchableOpacity>        
          
          <View style={styles.pageTitle}>
            <Text style={{fontSize : 22}}>Cart</Text>
          </View>        

        </View>


       <ScrollView height={screenHeight * 7 / 12} >
          <Cart/>
        </ScrollView> 
        <View style={{height : screenHeight * 1 / 24}}>
            <Text style={{fontSize : 20, marginLeft : '10%'}}>Recommended Items</Text>
        </View>
        <ScrollView horizontal={true} height={screenHeight * 3 / 12} style={{marginLeft : '5%'}}>
          <RecommendProduct />
        </ScrollView>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('CheckoutPage')}>
          <View style={styles.addcart}>
              <Text style={styles.addcarttext}>Next</Text>
          </View>
        </TouchableOpacity>
        <Tabs 
          gotoAddNewCartPage={() => this.props.navigation.navigate('AddNewCartPage')}
          gotoProductCategoryPage={() => this.props.navigation.navigate('ProductCategoryPage')}
          gotoProfilePage={() => this.props.navigation.navigate('ProfilePage')}
          gotoSearchStorePage={() => this.props.navigation.navigate('SearchStorePage')}
          selectTab={this.state.selectTab}
          />  
      </SafeAreaView>

    );
  }
}
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({
  addcarttext : {
    color : 'white',
    fontSize : 22,
    fontWeight : '400'
},
  addcart: {
      backgroundColor:'#23b825',
      width : '80%',
      height: screenHeight * 1 / 24 + 10,
      borderRadius:20,
      justifyContent : 'center',
      alignItems : 'center',
      shadowColor: '#919090',
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.9,
      elevation: 10, 
      marginLeft : '10%' ,
      marginBottom : 20
  },
  backBtnView : {
    width : '20%',
    height : screenHeight * 1 / 24,
    backgroundColor : '#23b825',
    marginTop : 20,
    alignItems : 'center',
    justifyContent : 'center',
    flexDirection : 'row'
},
pageTitle : {
  width : '60%',
  height : screenHeight * 1 / 24,
  alignItems : 'center',
  justifyContent : 'center',
  marginTop : 20,

}
});


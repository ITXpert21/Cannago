
import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Image,
  View
} from 'react-native';
import { ListItem} from 'react-native-elements';

import EditProduct from '../../components/dispensaries/product/EditProduct';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import Tabs from '../../components/dispensaries/tab/Tabs';

export default class EditProductPage extends Component{
  state = {
    selectTab: 'none'
  };  
  constructor(props){
    super(props);
    
} 
  render(){
    let rating = 3;
    let stars = [];
    for (var i = 1; i <= 5; i++) {
        let path = require('../../components/dispensaries/assets/imgs/star1.png');
        if (i > rating) {
          path = require('../../components/dispensaries/assets/imgs/star2.png');
        }
        stars.push(<Image key={i} style={styles.ratingImage} source={path} />);
      }       
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack('')}>
          <View style={{flexDirection : 'row'}}>
            <View style={styles.backBtnView}>
              <Icon name="arrow-left"  size={30} color="white"/>
            </View>
            <View style={styles.headerText}>
              <Text style={{fontSize:20, fontWeight : '400'}}>Edit an Item to Your Store</Text>
            </View>
            
          </View>        
        </TouchableOpacity>          

        <ScrollView>
          <EditProduct gotoProductsPage={() => this.props.navigation.navigate('ProductsDispensariesPage')}/>
          <Text style={{marginLeft : '10%', marginTop : 30, fontSize : 20}}>Read Reviews:</Text>
          <View style={styles.listitem}>
            <ListItem
                title='Naomi N.'
                subtitle={
                    <View style={styles.subtitleView}>
                        {stars}
                        <Text style={styles.ratingText}>5 months ago</Text>
                    </View>
                }
                containerStyle={styles.listitem}
                leftAvatar={{ source: require('../../components/dispensaries/assets/imgs/avatar1.png') }}
                />
            </View>
            <Text style={{marginLeft : '10%', fontSize : 14}}>This is my third time try this oil. I loved it.</Text>
            <View style={{flexDirection : 'row', justifyContent : 'center', alignItems : 'center', width : '100%'}}>
              <TouchableOpacity onPress={this.props.gotoProductsPage} style={{alignItems : 'center', justifyContent : 'center', width : '50%', paddingLeft : '10%', paddingRight : '10%'}}>
                  <View style={styles.deleteitemBtn}>
                      <Text style={styles.addcarttext}>Delete</Text>
                  </View>
              </TouchableOpacity>      
              <TouchableOpacity onPress={() => this.props.navigation.goBack('')} style={{alignItems : 'center', justifyContent : 'center', width : '50%',  paddingLeft : '10%', paddingRight : '10%'}}>
                  <View style={styles.addcart}>
                      <Text style={styles.addcarttext}>Update</Text>
                  </View>
              </TouchableOpacity>                      
            </View>  
        </ScrollView>
        <Tabs 
          gotoProductsPage={() => this.props.navigation.navigate('ProductsDispensariesPage')}
          gotoOrderHistoryPage={() => this.props.navigation.navigate('OrderHistoryPage')}
          gotoProfilePage={() => this.props.navigation.navigate('ProfileDispensariesPage')}
          selectTab={this.state.selectTab}
          />       
      </SafeAreaView>

    );
  }
}
const styles = StyleSheet.create({
  container : {
    flex : 1, 
    justifyContent : 'flex-end',
  },
  backBtnView : {
    flexDirection : 'row',
    width : '20%',
    height : 40,
     backgroundColor : '#23b825',
    marginTop : 20,
    alignItems : 'center',
    justifyContent : 'center'
  } ,
  headerText : {
    flexDirection : 'row',
    width : '70%',
    height : 40,
    alignItems : 'center',
    marginTop : 20,
    justifyContent : 'center'
  } , 
  subtitleView: {
    flexDirection: 'row',
    paddingTop: 5
  },  
  listitem : {
      width : '80%',
      backgroundColor : 'transparent',
      alignItems : 'center',
      justifyContent : 'center'
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey',
    textAlign: 'right'
  },
  ratingImage: {
    height: 20,
    width: 20
  },
  addcarttext : {
    color : 'white',
    fontSize : 20,
    fontWeight : '400'
  },
  addcart: {
      backgroundColor:'#23b825',
      width : '100%',
      height: 50,
      borderRadius:20,
      justifyContent : 'center',
      alignItems : 'center',
      shadowColor: '#919090',
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.9,
      elevation: 10, 
      margin : 20 
  },  
  deleteitemBtn: {
    backgroundColor:'#d15656',
    width : '100%',
    height: 50,
    borderRadius:20,
    justifyContent : 'center',
    alignItems : 'center',
    shadowColor: '#919090',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.9,
    elevation: 10, 
    margin : 20 
  },  
});


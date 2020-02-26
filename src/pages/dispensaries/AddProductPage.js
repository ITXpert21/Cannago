
import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  View
} from 'react-native';

import AddProduct from '../../components/dispensaries/product/AddProduct';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import Tabs from '../../components/dispensaries/tab/Tabs';

export default class AddProductPage extends Component{
  state = {
    selectTab: 'none'
  };  
  constructor(props){
    super(props);
    
} 
  render(){
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack('')}>
          <View style={{flexDirection : 'row'}}>
            <View style={styles.backBtnView}>
              <Icon name="arrow-left"  size={30} color="white"/>
            </View>
            <View style={styles.headerText}>
              <Text style={{fontSize:20, fontWeight : '400'}}>Add an Item to Your Store</Text>
            </View>
            
          </View>        
        </TouchableOpacity>          
        <ScrollView>
        <View style={styles.container}>
          <AddProduct gotoProductsPage={() => this.props.navigation.navigate('ProductsDispensariesPage')}/>
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
});



import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View
} from 'react-native';

import Detail from '../../components/consumer/product/Detail';
import Tabs from '../../components/consumer/tab/Tabs';
import Icon from 'react-native-vector-icons/Feather';

export default class ProductDetailPage extends Component{
  state = {
    selectTab: 'none'
  };
  constructor(props){
    super(props);
    
} 
  render(){
    return (
      <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('ProductsPage')}>
        <View style={styles.backBtnView}>
          <Icon name="arrow-left"  size={30} color="white"/>
        </View>        
        </TouchableOpacity>           
        <ScrollView>

        <View style={styles.container}>
          <Detail gotoCartPage={() => this.props.navigation.navigate('CartPage')}/>
        </View>
        </ScrollView>
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
const styles = StyleSheet.create({
  container : {
    flex : 1, 
    justifyContent : 'flex-end',
  },
  backBtnView : {
    width : '20%',
    height : 40,
    backgroundColor : '#23b825',
    marginTop : 20,
    alignItems : 'center',
    justifyContent : 'center'
}
});



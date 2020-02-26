
import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  Dimensions,
  View
} from 'react-native';

import AddNewCart from '../../components/consumer/product/AddNewCart';
import RecommendProduct from '../../components/consumer/product/RecommendProduct';
import Tabs from '../../components/consumer/tab/Tabs';

export default class AddNewCartPage extends Component{
  state = {
    selectTab: 'cart'
  };  
  constructor(props){
    super(props);
    
} 
  render(){
    return (
      <SafeAreaView style={{flex : 1, justifyContent : 'flex-end'}}>

          <AddNewCart gotoProductCategoryPage={() => this.props.navigation.navigate('ProductCategoryPage')}/>

          <View style={{marginLeft:20, marginTop: 30}}>
              <Text style={{fontSize : 20}}>Recommended Items</Text>
          </View>
          <ScrollView horizontal={true} height={recommendScrollHeight}>
            <RecommendProduct />
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
const recommendScrollHeight = Math.round(Dimensions.get('window').height)*3/7;




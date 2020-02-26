
import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View
} from 'react-native';

import Checkout from '../../components/consumer/checkout/Checkout';
import { ScrollView } from 'react-native-gesture-handler';
import Tabs from '../../components/consumer/tab/Tabs';

export default class CheckoutPage extends Component{
  state = {
    selectTab: 'none'
  };  
  constructor(props){
    super(props);
    
} 
  render(){
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
        <View style={styles.container}>
          <Checkout gotoTrackingPage={() => this.props.navigation.navigate('TrackingPage')}/>
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
});



import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View
} from 'react-native';
import { SearchBar} from 'react-native-elements';
import Tabs from '../../components/consumer/tab/Tabs';

import Products from '../../components/consumer/product/Products';

export default class ProductsPage extends Component{
  state = {
    selectTab: 'none'
  };
  constructor(props){
    super(props);
  }  

  updateSearch = search => {
    this.setState({ search });
  };
  render(){
    return (
      <SafeAreaView style={styles.container}>
          <SearchBar
            inputContainerStyle={{backgroundColor: 'white'}}
            containerStyle={styles.searchcontainer}
            placeholder="Type Here..."
            onChangeText={this.updateSearch}
            value={this.state.search}
          />
        <ScrollView>
          <View style={styles.container}>
            <Products gotoProductDetailPage={() => this.props.navigation.navigate('ProductDetailPage')}/>
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
  searchcontainer: {
    backgroundColor: 'white',
    borderWidth: 1, //no effect
    shadowColor: 'white', //no effect
    marginLeft : 20,
    marginTop : 20,
    marginRight : 20,
    borderRadius : 10,
   }
});


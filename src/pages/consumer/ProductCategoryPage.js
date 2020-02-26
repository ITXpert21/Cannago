
import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View
} from 'react-native';
import { SearchBar} from 'react-native-elements';
import Category from '../../components/consumer/product/Category';
import Tabs from '../../components/consumer/tab/Tabs';

export  default class ProductCategoryPage extends Component{
  state = {
    selectTab: 'home'
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
            <Category 
            gotoProductsPage={() => this.props.navigation.navigate('ProductsPage')}
            />
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
    margin : 20,
    
    borderRadius : 10,
   }
});


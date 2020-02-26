
import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  
  View
} from 'react-native';

import Header from '../../components/dispensaries/signup/Header';
import Content from '../../components/dispensaries/signup/Content';
import Icon from 'react-native-vector-icons/Feather';
import { ScrollView } from 'react-native-gesture-handler';
export default class SignupDispensariesPage extends Component{

 constructor(props){

    super(props);
    this.state={
      isChecked: 'false'
    }  
    
} 
  render(){
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('SigninDispensariesPage')}>
        <View style={{flexDirection : 'row', justifyContent : 'flex-start', alignItems : 'center'}}>
          <View style={styles.backBtnView}>
            <Icon name="arrow-left"  size={30} color="white"/>
          </View>
          <View style={{width : '80%'}}></View>   
        </View>
     
        </TouchableOpacity>                
        <ScrollView>
          <View style={styles.container}>
            <Header/>
            <Content gotoProductPage={() => this.props.navigation.navigate('ProductsDispensariesPage')}/>

          </View>
        </ScrollView>

      </SafeAreaView>

    );
  }
}
const styles = StyleSheet.create({
  container : {
      alignItems : 'center',
      flex : 1,
      marginBottom : 20
  },
  backBtnView : {
    width : '20%',
    height : 40,
    backgroundColor : '#23b825',
    marginTop : 20,
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center'
}
});


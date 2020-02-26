
import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
  View
} from 'react-native';

import Header from '../../components/dispensaries/signin/Header';
import Content from '../../components/dispensaries/signin/Content';

export default class SigninDispensariesPage extends Component{
  constructor(props){
    super(props);
    
} 
  render(){
    return (
      <SafeAreaView>
        <ScrollView height={screenHeight}>
        <View style={styles.container}>
          <Header/>
          <Content 
          gotoSignupPage={() => this.props.navigation.navigate('SignupDispensariesPage')}
          gotoForgotPwdPage={() => this.props.navigation.navigate('ForgotPwdPage')}
          gotoSigninPage={() => this.props.navigation.navigate('SigninPage')}
          gotoProductPage={() => this.props.navigation.navigate('ProductsDispensariesPage')}
          gotoDriverPage={() => this.props.navigation.navigate('SigninDriverPage')}

          />
          
        </View>
        </ScrollView>
      </SafeAreaView>

    );
  }
}
const screenHeight = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({
  container : {
      alignItems : 'center',
      width : '100%'

  },

});


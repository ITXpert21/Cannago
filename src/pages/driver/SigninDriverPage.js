
import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
  View
} from 'react-native';

import Header from '../../components/driver/signin/Header';
import Content from '../../components/driver/signin/Content';

export default class SigninDriverPage extends Component{
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
          gotoSignupPage={() => this.props.navigation.navigate('SignupDriverPage')}
          gotoForgotPwdPage={() => this.props.navigation.navigate('ForgotPwdPage')}
          gotoSigninPage={() => this.props.navigation.navigate('ProfileDriverPage')}
          gotoConsumerSigninPage={() => this.props.navigation.navigate('SigninPage')}
          gotoDispensariesPage={() => this.props.navigation.navigate('SigninDispensariesPage')}
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


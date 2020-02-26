
import React, {Component} from 'react';

import {
  StyleSheet,
  
  Platform,
  SafeAreaView,
  ScrollView,
  Dimensions
} from 'react-native';

import Header from '../../components/consumer/signin/Header';
import Content from '../../components/consumer/signin/Content';

const licenseKey = Platform.select({
  // iOS license key for applicationID: com.cannagoapp.cannagrowdev
  ios: 'sRwAAAEbY29tLmNhbm5hZ29hcHAuY2FubmFncm93ZGV2dDpWAgbXAyPGVFY7cyIZFNWfk/lLQDZc4vYrOA6LwO/RNwHTS7ug+/oUSXeBafqpdlCAyBGzFWNMRhzW16v4O0NFF3ppHV6aGE+uodCBweQiysPu14w2zDzOZQWtT3DTb2N0hI9zbtxu1oWnv0QfRSS4hpZ69C33BiJKawPg46pHweeF/u2j+wttal8QQKVzEUtpmeJy1w3uEEBNrUWF/b6VF2KGfdU0dv9Ay1jMTR+ix+y/FAPfj/lCYSHj+2DORrx6PTd/tIT+TfBw',
  // android license key for applicationID: com.cannagoapp.cannagrowdev
  android: 'sRwAAAAbY29tLmNhbm5hZ29hcHAuY2FubmFncm93ZGV2Smx+Aa0uoDFwpY2fpht5igmlM8eEyyeTDBGCBXmuVFjafsI1SNFFFCd3gGOjUFynbmqs5P/fqH7ayQ82u+vQ5weDFF9FunxYMy2y/+HFNDrAiExc6R0ZQdeyEIycV0QQGk/BGFsCqzdZ55LVsEM/OGUImr2Wdw6Hx5fW2cibGY9KCwPcYd732Cy6AlK+uMHKqEfwRLZvlfyJyp7J2CFIPqXmFqa/H0fKj483VfLppBltLA1FOk1UdrHKZaPkjPcvgnEVUFRKfRyn4JN3'
})

export default class SigninPage extends Component{
  constructor(props){
    super(props);
    
  } 
  render(){
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollableView}>
          <Header/>
          <Content 
            gotoSignupPage={() => this.props.navigation.navigate('SignupPage')}
            gotoProductCategory={() => this.props.navigation.navigate('ProductCategoryPage')}
            gotoForgotPwdPage={() => this.props.navigation.navigate('ForgotPwdPage')}
            gotoDispensariesPage={() => this.props.navigation.navigate('SigninDispensariesPage')}
            gotoDriverPage={() => this.props.navigation.navigate('SigninDriverPage')}
          />
        </ScrollView>
      </SafeAreaView>

    );
  }
}
const screenHeight = Math.round(Dimensions.get('window').height) ;

const styles = StyleSheet.create({
  container : {
      alignItems : 'center',
  },
  signuptextView : {
    alignItems : 'center',
    marginTop : 10,
  },    
  signupText : {
      fontSize : 14,
      fontWeight : 'bold' ,
      color : '#787777'
  },
  scrollableView : {
    height : screenHeight
  }

});



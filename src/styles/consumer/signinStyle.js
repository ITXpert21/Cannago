
import {StyleSheet, Dimensions} from 'react-native';
  
const screenWidth = Math.round(Dimensions.get('window').width) ;

export const styles = StyleSheet.create({
  container : {
      alignItems : 'center',

  },

  scrollableView : {
    width : screenWidth ,
    
  },
  logopic: {
    width : 160,
    height : 150,

  },

  logopicWrap : {
      alignItems : 'center',

  },
  logoname : {
      fontSize : 43,
      fontWeight : 'bold' 
  },
  logouser : {
      fontSize : 18,
      color : '#61605f'
  },  
  textinputview : {
    flexDirection: 'row',
    alignItems : 'center',
    width : screenWidth-60,
    height: 50,
    marginTop : 20,
    marginLeft : 30,
    borderRadius:20,
    borderColor : '#b3b0ad',
    borderWidth : 1
  },    
  icon : {
      marginLeft : 20,
      marginRight : 20
  },
  textinput : {
      width : screenWidth-60,
      height: 60,
  },
  forgottextview : {
      flexDirection: 'row',
      justifyContent : 'flex-end',
      alignItems : 'center',
      color : '#61605f',
      marginBottom : 20,
      height: 50
  },
  forgottext : {
      color : '#61605f',
      marginRight : 30,
      width : screenWidth-60,
      textAlign : 'right'
  },
  signinBtn: {
      backgroundColor:'#23b825',
      width : screenWidth-60,
      height: 50,
      borderRadius:20,
      justifyContent : 'center',
      alignItems : 'center',
      shadowColor: '#919090',
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.9,
      marginLeft : 30,
      elevation: 10,  
  },
  signiText : {
      color : 'white',
      fontSize : 22,
      fontWeight : '400'
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
  signupBtnText : {
      fontSize : 14,
      fontWeight : 'bold' ,
      color : '#37d613',
      
  },
  userSelectView : {
      width : screenWidth-60 ,
      height: 50,
      marginTop : 20,
      marginLeft : 30,

      borderRadius:20,
      justifyContent : 'center',
      alignItems : 'center',
      borderColor : '#b3b0ad',
      borderWidth : 1
  },
  userSelectText : {
      color : '#61605f',
      fontSize : 16,
      fontWeight : '300'
  },
});

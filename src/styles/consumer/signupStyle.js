
import {StyleSheet} from 'react-native';
  
export const styles = StyleSheet.create({
    container : {
        alignItems : 'center',
    },
    backBtnView : {
      width : '20%',
      height : 40,
      backgroundColor : '#23b825',
      marginTop : 20,
      alignItems : 'center',
      justifyContent : 'center'
    },
  
    logopic: {
      width : 150,
      height : 150,
      borderRadius: 100,
  },
  
  logopicWrap : {
      alignItems : 'center',
      justifyContent : 'center',
      borderWidth : 3,
      borderColor : '#2cc94e',
      borderRadius: 100,
      width : 170,
      height : 170,
      marginBottom : 20
  },
  camera : {
    width : 80,
    height : 80,
  },    
  checkboxview : {
      flexDirection: 'row',
      alignItems : 'center',
      width : 320,
      height: 60,
      borderRadius:20,
      borderColor : '#b3b0ad',
      borderWidth : 0
  },   
  textinputview : {
      flexDirection: 'row',
      alignItems : 'center',
      width : 320,
      height: 60,
      marginTop : 20,
      borderRadius:20,
      borderColor : '#b3b0ad',
      borderWidth : 1
  }, 
  driverlicenseview : {
      flexDirection: 'row',
      alignItems : 'center',
      width : 320,
      height: 60,
      marginTop : 20,
      borderRadius:20,
      borderColor : '#b3b0ad',
      borderWidth : 1
  
  },          
  icon : {
      marginLeft : 20,
      marginRight : 20
  },
  textinput : {
      width : 250,
      height: 60,
  },
  signinBtn: {
      marginTop : 10,
      marginBottom : 30,
      backgroundColor:'#23b825',
      width : 320,
      height: 50,
      borderRadius:20,
      justifyContent : 'center',
      alignItems : 'center',
      shadowColor: '#919090',
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.9,
      elevation: 10,  
  },
  signiText : {
      color : 'white',
      fontSize : 22,
      fontWeight : '400'
  }  
  });
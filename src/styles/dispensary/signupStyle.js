
import {StyleSheet, Dimensions} from 'react-native';
  
const screenWidth = Math.round(Dimensions.get('window').width);

export const styles = StyleSheet.create({
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
  },
  logopicWrap : {
    alignItems : 'center',
    justifyContent : 'center',
    borderWidth : 3,
    borderColor : '#2cc94e',
    borderRadius: 10,
    width : screenWidth - 60,
    height : 200,
    marginTop : 20,
    marginBottom : 20
  },
  camera : {
    width : 100,
    height : 100,
  },  
  checkboxview : {
    flexDirection: 'row',
    alignItems : 'center',
    width : screenWidth - 60,
    height: 60,
    borderRadius:20,
    borderColor : '#b3b0ad',
    borderWidth : 0
    },   
    textinputview : {
        flexDirection: 'row',
        alignItems : 'center',
        width : screenWidth - 60,
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
        width : screenWidth - 100,
        height: 60,
    },
    signinBtn: {
        marginTop : 10,
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
    },
    logopic: {
      width : screenWidth - 80,
      height : 180,
      borderRadius : 10
  },   
});
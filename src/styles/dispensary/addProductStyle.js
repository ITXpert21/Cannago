import {StyleSheet, Dimensions} from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);

export const styles = StyleSheet.create({
    container : {
      flex : 1, 
      justifyContent : 'flex-end',
    },
    backBtnView : {
      flexDirection : 'row',
      width : '20%',
      height : 40,
       backgroundColor : '#23b825',
      marginTop : 20,
      alignItems : 'center',
      justifyContent : 'center'
    } ,
    headerText : {
      flexDirection : 'row',
      width : '70%',
      height : 40,
      alignItems : 'center',
      marginTop : 20,
      justifyContent : 'center'
      },
      betterview : {
        flexDirection : 'row', 
        justifyContent : 'center'
      },
      tipitem : {
          width : '95%',
          height : 30,
          borderWidth : 1,
          borderColor : '#8c8989',
          alignItems : 'center',
          justifyContent : 'center',
          borderRadius : 5,
          flexDirection : 'row',
      },   
      textinputview : {
          alignItems : 'center',
          width : '100%',
          height: 50,
          borderRadius:20,
          borderColor : '#b3b0ad',
          borderWidth : 1,
          marginTop : 10,
      },   
      textinput : {
          width : '98%',
          height: 50,
          marginLeft : 40

      },        
      textareaContainer : {
          
          borderWidth : 1,
          borderColor : '#b3b3b3',
          width : '80%',
          height : 130,
          marginTop : 20
      },
      addcarttext : {
          color : 'white',
          fontSize : 22,
          fontWeight : '400'
      },
      addcart: {
          backgroundColor:'#23b825',
          width : 300,
          height: 50,
          borderRadius:20,
          justifyContent : 'center',
          alignItems : 'center',
          shadowColor: '#919090',
          shadowOffset: { width: 2, height: 2 },
          shadowOpacity: 0.9,
          elevation: 10, 
          margin : 20 
      },
      ratingImage: {
          height: 30,
          width: 30,
          margin : 5
      },
      logopic: {
          width : '95%',
          height : 180,
          borderRadius : 10,
  
      },
      camera : {
        width : 100,
        height : 100,
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
  });
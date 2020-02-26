import React, {Component} from 'react';
import {Text, StyleSheet, View, TextInput, TouchableOpacity, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Content extends Component{
    constructor(props){
        super(props);
        
    } 
  render(){
   return (
        <View style={{alignItems : 'center'}}>
            <View style={styles.textinputview}> 
                <Icon name="envelope-o"  size={20} color="#37d613" style={styles.icon}/>
                <TextInput style={styles.textinput} placeholder="Email Address"/>
            </View>
            <View style={styles.textinputview}> 
                <Icon name="lock"  size={25} color="#37d613" style={styles.icon}/>
                <TextInput style={styles.textinput} placeholder="Password"/>
            </View>
            <TouchableOpacity style={styles.forgottextview} onPress={this.props.gotoForgotPwdPage}>
                <Text style={styles.forgottext}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.props.gotoProductCategory}>
                <View style={styles.signinBtn}>
                    <Text style={styles.signiText}>Sign in</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.signuptextView}> 
                <Text style={styles.signupText}>Don't have account</Text>
                <TouchableOpacity onPress={this.props.gotoSignupPage}>
                    <Text style={styles.signupBtnText}>Sign up</Text>
                </TouchableOpacity>
 
            </View>
            <TouchableOpacity  onPress={this.props.gotoDriverPage}>
                <View style={styles.userSelectView}>
                    <Text style={styles.userSelectText}>Want to driver with us?</Text>
                </View>
            </TouchableOpacity>          
            <TouchableOpacity onPress={this.props.gotoDispensariesPage}>
                <View style={styles.userSelectView}>
                    <Text style={styles.userSelectText}>Want to sell with us?</Text>
                </View>
            </TouchableOpacity>       
        </View>
    );
  }

  gotoSignupPage = () => {
        alert("aaaaaa");
        //this.props.navigation.navigate('SignupPage');
    }
}
const screenWidth = Math.round(Dimensions.get('window').width) -60;

const styles = StyleSheet.create({
    textinputview : {
        flexDirection: 'row',
        alignItems : 'center',
        width : screenWidth,
        height: 50,
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
        width : screenWidth,
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
        width : 320,
        textAlign : 'right'
    },
    signinBtn: {
        backgroundColor:'#23b825',
        width : screenWidth,
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
        color : '#37d613'
    },
    userSelectView : {
        width : screenWidth ,
        height: 50,
        marginTop : 20,
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

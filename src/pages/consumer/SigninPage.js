
import React, {Component} from 'react';

import {
  AsyncStorage,
  Text,
  Image,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import {ENDPOINT_URL} from '../../config/config'
import {styles} from '../../styles/consumer/signinStyle'

export default class SigninPage extends Component{
  constructor(props){
    super(props); 
    this.state = {
      email : '',
      password : ''
    }
    
  } 

  signinUser = () => {
    fetch(ENDPOINT_URL+'userlogin', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
       },
      body: JSON.stringify({
          email : this.state.email,
          password : this.state.password
        }
      )      
    })
    .then(response => response.json())
    .then(response => {
      console.log(response);      
      if(response.message == 'success'){
        this.saveToStorage(response.data.id);
        this.props.navigation.navigate('ProductCategoryPage');
      }else{
        alert("Incorrect email or password!");
      }  
    })
    .catch(error => {
      console.log(error);
    }); 
  }  

  saveToStorage(userId){
    let obj = {
      email : this.state.email,
      userId : userId
    }
     AsyncStorage.setItem('loginedUser', JSON.stringify(obj));
  }

  render(){
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollableView}>
          <View style={styles.logopicWrap}>
            <Image style={styles.logopic} source={require('../../assets/imgs/logo.jpg')} ></Image>
            <Text style={styles.logoname}>Cannago</Text>
            <Text style={styles.logouser}>for consumers</Text>
          </View>

          <View style={styles.textinputview}> 
                <Icon name="envelope-o"  size={20} color="#37d613" style={styles.icon}/>
                <TextInput style={styles.textinput} placeholder="Email Address"
                  onChangeText={ email=> this.setState({email})}  
                />
            </View>
            <View style={styles.textinputview}> 
                <Icon name="lock"  size={25} color="#37d613" style={styles.icon}/>
                <TextInput style={styles.textinput} placeholder="Password" secureTextEntry={true}
                  onChangeText={ password=> this.setState({password})}
                />
            </View>
            <TouchableOpacity style={styles.forgottextview} onPress={() => this.props.navigation.navigate('ForgotPwdPage')}>
                <Text style={styles.forgottext}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.signinUser()}>
                <View style={styles.signinBtn}>
                    <Text style={styles.signiText}>Sign in</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.signuptextView}> 
                <Text style={styles.signupText}>Don't have account</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('SignupPage')}>
                    <Text style={styles.signupBtnText}>Sign up</Text>
                </TouchableOpacity>
 
            </View>
            <TouchableOpacity  onPress={() => this.props.navigation.navigate('SigninDispensariesPage')}>
                <View style={styles.userSelectView}>
                    <Text style={styles.userSelectText}>Want to sell with us?</Text>
                </View>
            </TouchableOpacity>          
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SigninDriverPage')}>
                <View style={styles.userSelectView}>
                    <Text style={styles.userSelectText}>Want to driver with us?</Text>
                </View>
            </TouchableOpacity>   
            <View style={{marginBottom : 100}}>
              </View>         
        {/* <Content 
            gotoSignupPage={() => this.props.navigation.navigate('SignupPage')}
            gotoProductCategory={() => this.props.navigation.navigate('ProductCategoryPage')}
            gotoForgotPwdPage={() => this.props.navigation.navigate('ForgotPwdPage')}
            gotoDispensariesPage={() => this.props.navigation.navigate('SigninDispensariesPage')}
            gotoDriverPage={() => this.props.navigation.navigate('SigninDriverPage')}
          /> */}
        </ScrollView>
      </SafeAreaView>

    );
  }
}




import React, {Component} from 'react';
import {
  AsyncStorage,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {ENDPOINT_URL} from '../../config/config'
import {styles} from '../../styles/dispensary/signinStyle'

export default class SigninDispensariesPage extends Component{
  constructor(props){
    super(props);
    this.state={
      dispensary_email : '',
      password : ''
    }  
  } 

  signinUser = () => {
    fetch(ENDPOINT_URL+'dispensarylogin', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
       },
      body: JSON.stringify({
          dispensary_email : this.state.dispensary_email,
          password : this.state.password
        }
      )      
    })
    .then(response => response.json())
    .then(response => {
      console.log(response);      
      if(response.message == 'success'){
        this.saveToStorage(response.data.id);
        this.props.navigation.navigate('ProductsDispensariesPage');
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
      dispensary_email : this.state.dispensary_email,
      userId : userId
    }
     AsyncStorage.setItem('loginedUser', JSON.stringify(obj));
  }

  render(){
    return (
      <SafeAreaView>
        <ScrollView height={screenHeight}>
        <View style={styles.container}>
          <View style={styles.logopicWrap}>
            <Image style={styles.logopic} source={require('../../assets/imgs/logo_dispensary.jpg')} ></Image>
            <Text style={styles.logoname}>Cannago</Text>
            <Text style={styles.logouser}>for Dispansaries</Text>
          </View>

          <View style={{alignItems : 'center', width : '100%'}}>
            <View style={styles.textinputview}> 
                <Icon name="envelope-o"  size={20} color="#37d613" style={styles.icon}/>
                <TextInput style={styles.textinput} placeholder="Email Address"
                  onChangeText={ dispensary_email=> this.setState({dispensary_email})}
                />
            </View>
            <View style={styles.textinputview}> 
                <Icon name="lock"  size={25} color="#37d613" style={styles.icon}/>
                <TextInput style={styles.textinput} placeholder="Password"
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
              <TouchableOpacity onPress={() => this.props.navigation.navigate('SignupDispensariesPage')}>
                  <Text style={styles.signupBtnText}>Sign up</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SigninPage')}>
              <View style={styles.userSelectView}>
                <Text style={styles.userSelectText}>Want to buy with us?</Text>
              </View>
            </TouchableOpacity>          
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SigninDriverPage')}>
              <View style={styles.userSelectView}>
                <Text style={styles.userSelectText}>Want to drive with us?</Text>
              </View>
            </TouchableOpacity>       
        </View>

   
        </View>
        </ScrollView>
      </SafeAreaView>

    );
  }
}
const screenHeight = Math.round(Dimensions.get('window').height);




import React, {Component} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
  View,
  AsyncStorage
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { ScrollView } from 'react-native-gesture-handler';
import {ENDPOINT_URL} from '../../config/config'
import {styles} from '../../styles/dispensary/signupStyle'
import CheckBox from 'react-native-check-box'
import ImagePicker from 'react-native-image-picker';

var renderIf = function(condition, content) {
  if (condition) {
      return content;
  } 
  return (<Image style={styles.camera} source={require('../../assets/imgs/camera.png')} ></Image>);
}

export default class SignupDispensariesPage extends Component{

 constructor(props){

    super(props);
    this.state={
      photo: {},
      isChecked: false,
      isChecked1: false,

      first_name : '',
      last_name : '',
      owner_email : '',
      owner_phonenumber : '',

      storename : '',
      dispensary_email : '',
      password : '',
      dispensary_phonenumber : '',
      dispensary_address : '',
      dispensary_hour : '',

      companyname : '',
      fein : '',      
    }  
    
  }

  createFormData = (photo, body) => {
    const data = new FormData();

    data.append("photo", {
      name: photo.fileName,
      type: photo.type,
      uri:
        Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", "")
    });

    Object.keys(body).forEach(key => {
      data.append(key, body[key]);
    });

    return data;
  };

  chooseFile = () => {
    var options = {
      title: 'Select Dispensary Photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
            photo: source,
        });
      }
    });
  };   

  registerDispensary = () => {
    if(this.state.first_name == ''){
      alert("Please enter first name");
      return;
    }
    if(this.state.last_name == ''){
        alert("Please enter last name");
        return;
    }            
    if(this.state.owner_email == ''){
        alert("Please enter owner email");
        return;
    }  
    if(this.state.owner_phonenumber == ''){
        alert("Please enter owner phonenumber");
        return;
    } 
    if(!this.state.dispensary_address ){
        alert("Please enter dispensary address");
        return;
    }   
    if(!this.state.dispensary_hour ){
      alert("Please enter dispensary hour");
      return;
    }      
    if(!this.state.companyname ){
      alert("Please enter companyname");
      return;
    }
    if(!this.state.fein ){
      alert("Please enter fein");
      return;
    }
    if(this.state.photo.fileName == undefined){
        alert("Please select your photo");
        return;
    }   
    if(!this.state.isChecked ){
      alert("Please check agreement");
      return;
    } 
    if(!this.state.isChecked1 ){
      alert("Please check Cannago's Terms & Condition");
      return;
    } 
    let dispensaryParam = {
      first_name : this.state.first_name,
      last_name : this.state.last_name,
      owner_email : this.state.owner_email,
      owner_phonenumber : this.state.owner_phonenumber,

      dispensary_name : this.state.dispensary_name,
      dispensary_email : this.state.dispensary_email,
      password : this.state.password,
      dispensary_phonenumber : this.state.dispensary_phonenumber,
      dispensary_address : this.state.dispensary_address,
      dispensary_hour : this.state.dispensary_hour,

      companyname : this.state.companyname,
      fein : this.state.fein,

      usertype : 1,            
    };
    fetch(ENDPOINT_URL+'addDispensary', {
      method: "POST",
      body: this.createFormData(this.state.photo, dispensaryParam)
    })
    .then(response => response.json())
    .then(response => {
        
         this.saveToStorage(response.data.insert_id);
         this.props.navigation.navigate('ProductsDispensariesPage');
    })
    .catch(error => {
      console.log(error);
    }); 
  }
  saveToStorage(userId){
    let obj = {
      dispensary_name : this.state.dispensary_name,
      dispensary_email : this.state.dispensary_email,
      userId : userId,
      usertype : 1
    }
     AsyncStorage.setItem('loginedUser', JSON.stringify(obj));
  }
  
  render(){
    return (
      <SafeAreaView style={styles.container}>
      
        <TouchableOpacity onPress={() => this.props.navigation.navigate('SigninDispensariesPage')}>
          <View style={{flexDirection : 'row', justifyContent : 'flex-start', alignItems : 'center'}}>
            <View style={styles.backBtnView}>
              <Icon name="arrow-left"  size={30} color="white"/>
            </View>
            <View style={{width : '80%'}}></View>   
          </View>
     
        </TouchableOpacity>                
        <ScrollView>
          <View style={styles.container}>
            <TouchableOpacity onPress={this.chooseFile.bind(this)}>
              <View style={styles.logopicWrap}>
                {renderIf(this.state.photo.uri,
                  <Image style={styles.logopic} source={{ uri: this.state.photo.uri }} ></Image>
                )}
              </View>  
            </TouchableOpacity>
            <View style={{alignItems : 'flex-start'}}> 
                <Text style={{fontSize : 18}}> Owner's Information</Text>
            </View>   
            {/* <Divider style={{ marginTop: 20, backgroundColor : 'black'}} /> */}
            <View style={styles.textinputview}> 
                <Icon name="user"  size={20} color="#37d613" style={styles.icon}/>
                <TextInput style={styles.textinput} placeholder="First Name"
                  onChangeText={ first_name=> this.setState({first_name})} 
                />
            </View>
            <View style={styles.textinputview}> 
                <Icon name="user"  size={20} color="#37d613" style={styles.icon}/>
                <TextInput style={styles.textinput} placeholder="Last Name"
                  onChangeText={ last_name=> this.setState({last_name})} 
                />
            </View>
            <View style={styles.textinputview}> 
                <Icon name="mail"  size={20} color="#37d613" style={styles.icon}/>
                <TextInput style={styles.textinput} placeholder="Owner's Email Address"
                  onChangeText={ owner_email=> this.setState({owner_email})} 
                />
            </View>
            <View style={styles.textinputview}> 
                <Icon name="phone"  size={25} color="#37d613" style={styles.icon}/>
                <TextInput style={styles.textinput} placeholder="Owner's Mobile number"
                  onChangeText={ owner_phonenumber=> this.setState({owner_phonenumber})} 
                />
            </View>
            <View style={{alignItems : 'flex-start', marginTop : 20}}> 
                <Text style={{fontSize : 18}}> Dispensary Information</Text>
            </View>   
            {/* <Divider style={{ marginTop: 20, backgroundColor : 'black'}} /> */}
            <View style={styles.textinputview}> 
                <Icon name="user"  size={20} color="#37d613" style={styles.icon}/>
                <TextInput style={styles.textinput} placeholder="Disensary  Storename"
                  onChangeText={ dispensary_name=> this.setState({dispensary_name})}
                />
            </View>
            <View style={styles.textinputview}> 
                <Icon name="mail"  size={20} color="#37d613" style={styles.icon}/>
                <TextInput style={styles.textinput} placeholder="Dispensary Email Address"
                  onChangeText={ dispensary_email=> this.setState({dispensary_email})}
                />
            </View>
            <View style={styles.textinputview}> 
                <Icon name="lock"  size={25} color="#37d613" style={styles.icon}/>
                <TextInput style={styles.textinput} placeholder="Password" secureTextEntry={true}
                  onChangeText={ password=> this.setState({password})}
                />
            </View>
            <View style={styles.textinputview}> 
                <Icon name="phone"  size={25} color="#37d613" style={styles.icon}/>
                <TextInput style={styles.textinput} placeholder="Dispensary Mobile number"
                  onChangeText={ dispensary_phonenumber=> this.setState({dispensary_phonenumber})}
                />
            </View>
            <View style={styles.textinputview}> 
                <Icon name="map-pin"  size={25} color="#37d613" style={styles.icon}/>
                <TextInput style={styles.textinput} placeholder="Dispensary Address"
                  onChangeText={ dispensary_address=> this.setState({dispensary_address})}
                />
            </View>
            <View style={styles.textinputview}> 
                <Icon name="map-pin"  size={25} color="#37d613" style={styles.icon}/>
                <TextInput style={styles.textinput} placeholder="Dispensary Hour"
                  onChangeText={ dispensary_hour=> this.setState({dispensary_hour})}
                />
            </View>
            <View style={styles.checkboxview}> 
                <CheckBox
                    style={{flex: 1, padding: 10}}
                    onClick={()=>{
                    this.setState({
                        isChecked:!this.state.isChecked
                    })
                    }}
                    isChecked={this.state.isChecked}
                    rightText={"By checking i am authorize signatory of this business with the power to commit to binding agreement"}
                    rightTextStyle={{color : '#9c9c9c', fontSize : 10}}
                    />                    
            </View>     
            <View style={{alignItems : 'flex-start', marginTop : 20}}> 
                <Text style={{fontSize : 18}}> Tax Information</Text>
            </View>   
            {/* <Divider style={{ marginTop: 20, backgroundColor : 'black'}} /> */}
            <View style={styles.textinputview}> 
                <Icon name="user"  size={20} color="#37d613" style={styles.icon}/>
                <TextInput style={styles.textinput} placeholder="Business entity/Company name"
                  onChangeText={ companyname=> this.setState({companyname})}
                />
            </View>
            <View style={styles.textinputview}> 
                <Icon name="envelope-o"  size={20} color="#37d613" style={styles.icon}/>
                <TextInput style={styles.textinput} placeholder="FEIN(Federal Employer Identification Number)"
                  onChangeText={ fein=> this.setState({fein})}
                />
            </View>
            <View style={styles.checkboxview}> 
                <CheckBox
                    style={{flex: 1, padding: 10}}
                    onClick={()=>{
                    this.setState({
                        isChecked1:!this.state.isChecked1
                    })
                    }}
                    isChecked={this.state.isChecked1}
                    rightText={"By checking this agree Cannago's Terms & Conditions"}
                    rightTextStyle={{color : '#9c9c9c', fontSize : 10}}
                    />                    
            </View>                     
            <TouchableOpacity onPress={() => this.registerDispensary()}>
                <View style={styles.signinBtn}>
                    <Text style={styles.signiText}>Create Account</Text>
                </View>
            </TouchableOpacity>            
            {/* <Content gotoProductPage={() => this.props.navigation.navigate('ProductsDispensariesPage')}/> */}

          </View>
        </ScrollView>

      </SafeAreaView>

    );
  }
}




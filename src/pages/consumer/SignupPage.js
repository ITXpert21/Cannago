
import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Text,
  TextInput,  
  Image, 
  Platform,
  AsyncStorage,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { ScrollView } from 'react-native-gesture-handler';
import CheckBox from 'react-native-check-box'
import * as BlinkIDReactNative from 'blinkid-react-native';
import ImagePicker from 'react-native-image-picker';
import { SafeAreaView } from 'react-native-safe-area-context';


const licenseKey = Platform.select({
    // iOS license key for applicationID: org.reactjs.native.example.BlinkIDReactNative
    ios: 'sRwAAAEbY29tLmNhbm5hZ29hcHAuY2FubmFncm93ZGV2dDpWAgbXAyPGVFY7cyIZFNWfk/lLQDZc4vYrOA6LwO/RNwHTS7ug+/oUSXeBafqpdlCAyBGzFWNMRhzW16v4O0NFF3ppHV6aGE+uodCBweQiysPu14w2zDzOZQWtT3DTb2N0hI9zbtxu1oWnv0QfRSS4hpZ69C33BiJKawPg46pHweeF/u2j+wttal8QQKVzEUtpmeJy1w3uEEBNrUWF/b6VF2KGfdU0dv9Ay1jMTR+ix+y/FAPfj/lCYSHj+2DORrx6PTd/tIT+TfBw',
    // android license key for applicationID: com.blinkidreactnative
    android: 'sRwAAAAbY29tLmNhbm5hZ29hcHAuY2FubmFncm93ZGV2Smx+Aa0uoDFwpY2fpht5igmlM8eEyyeTDBGCBXmuVFjafsI1SNFFFCd3gGOjUFynbmqs5P/fqH7ayQ82u+vQ5weDFF9FunxYMy2y/+HFNDrAiExc6R0ZQdeyEIycV0QQGk/BGFsCqzdZ55LVsEM/OGUImr2Wdw6Hx5fW2cibGY9KCwPcYd732Cy6AlK+uMHKqEfwRLZvlfyJyp7J2CFIPqXmFqa/H0fKj483VfLppBltLA1FOk1UdrHKZaPkjPcvgnEVUFRKfRyn4JN3'
});

var renderIf = function(condition, content) {
  if (condition) {
      return content;
  } 
  return (<Image style={styles.camera} source={require('../../assets/imgs/camera.png')} ></Image>);
}

export default class SignupPage extends Component{

  constructor(props){
      super(props);
      this.state = {
        photo: {},
        first_name : '',
        last_name : '',
        email : '',
        address : '',
        zipcode : '',
        password : '',
        phonenumber : '',
        license_number : '',
        usertype : 0,

        validated : true,
        isChecked : false
    };      
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
      title: 'Select User Photo',
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

  registerUser = () => {
    this.props.navigation.navigate('ProductCategoryPage');
    if(this.state.email == ''){
        alert("Please enter email");
        return;
    }
    if(this.state.zipcode == ''){
        alert("Please enter zipcode");
        return;
    }            
    if(this.state.password == ''){
        alert("Please enter password");
        return;
    }  
    if(this.state.phonenumber == ''){
        alert("Please enter phonenumber");
        return;
    } 
    if(!this.state.isChecked ){
        alert("Please check Cannago's Terms & Condition");
        return;
    }   
    if(this.state.photo.fileName == undefined){
        alert("Please select your photo");
        return;
    }              
    let userParam = {
        first_name : this.state.first_name,
        last_name : this.state.last_name,
        email : this.state.email,
        address : this.state.address,
        zipcode : this.state.zipcode,
        password : this.state.password,
        phonenumber : this.state.phonenumber,
        license_number : this.state.license_number,
        usertype : 0,            
    }

    fetch("http://192.168.100.57:3000/addUser", {
      method: "POST",
      body: this.createFormData(this.state.photo, userParam)
    })
    .then(response => response.json())
    .then(response => {
        console.log("response111111111", response.data.insert_id);
        this.saveToStorage(response.data.insert_id);
        this.props.navigation.navigate('ProductCategoryPage');
    })
    .catch(error => {
      console.log(error);
    });    
  };

  saveToStorage(userId){
    let obj = {
      email : this.state.email,
      userId : userId
    }
    AsyncStorage.setItem('loginedUser', Json.stringfy(obj));
  }
  getStorageData= async() => {
    try{
      let loginedUserInfo = await AsyncStorage.getItem('loginedUser');
      let parsedInfo =  Json.parse(loginedUserInfo);
    }
    catch(error){
      console.log(error);
    }
  }

  async scan() {
    console.log("scam startomg");
    try {
    
        var blinkIdCombinedRecognizer = new BlinkIDReactNative.BlinkIdCombinedRecognizer();
        blinkIdCombinedRecognizer.returnFullDocumentImage = true;
        blinkIdCombinedRecognizer.returnFaceImage = true;
    
        const scanningResults = await BlinkIDReactNative.BlinkID.scanWithCamera(
            new BlinkIDReactNative.BlinkIdOverlaySettings(),
            new BlinkIDReactNative.RecognizerCollection([blinkIdCombinedRecognizer/*, mrtdSuccessFrameGrabber*/]),
            licenseKey
        );
    
        if (scanningResults) {
            for (let i = 0; i < scanningResults.length; ++i) {
                this.setState({first_name : scanningResults[0].firstName});
                this.setState({last_name : scanningResults[0].last_name});
                this.setState({license_number : scanningResults[0].documentNumber});
                this.setState({address : scanningResults[0].address});
            
            }
        }

    } catch (error) {
                console.log(error);
    }
  } 


  render(){
    return (
      <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column',justifyContent: 'center',}} behavior="padding" enabled  /*keyboardVerticalOffset={30}*/>                 
      <SafeAreaView>

       <TouchableOpacity onPress={() => this.props.navigation.navigate('SigninPage')}>
         <View style={styles.backBtnView}>
         <Icon name="arrow-left"  size={30} color="white"/>
         </View>        
       </TouchableOpacity>     

      <ScrollView >
        <View style={styles.container}>
          <TouchableOpacity onPress={this.chooseFile.bind(this)}>
            <View style={styles.logopicWrap} >
                {renderIf(this.state.photo.uri,
                    <Image style={styles.logopic} source={{ uri: this.state.photo.uri }} ></Image>
                )}

            </View>
          </TouchableOpacity>

          <View style={styles.textinputview}> 
            <Icon name="mail"  size={20} color="#37d613" style={styles.icon}/>
            <TextInput style={styles.textinput} placeholder="Email Address"
                onChangeText={ email=> this.setState({email})}  
            />
          </View>
          <View style={styles.textinputview}> 
            <Icon name="lock"  size={25} color="#37d613" style={styles.icon}/>
            <TextInput style={styles.textinput} placeholder="Password"
                onChangeText={ password=> this.setState({password})}  
            />
          </View>
          <View style={styles.textinputview}> 
            <Icon name="lock"  size={25} color="#37d613" style={styles.icon}/>
            <TextInput style={styles.textinput} placeholder="Zip code"
                onChangeText={ zipcode=> this.setState({zipcode})}  
            />
          </View>
          <View style={styles.textinputview}> 
            <Icon name="phone"  size={25} color="#37d613" style={styles.icon}/>
            <TextInput style={styles.textinput} placeholder="Mobile number"
                onChangeText={ phonenumber=> this.setState({phonenumber})} 
            />
          </View>
          <TouchableOpacity onPress={this.scan.bind(this)}>
            <View style={styles.driverlicenseview}> 
                <Icon name="user"  size={25} color="#37d613" style={styles.icon}/>
                <Text style={{color : '#a8a8a7'}} >Scan Driver license</Text>
            </View>

          </TouchableOpacity>
          <View style={styles.checkboxview}> 
            <CheckBox
                style={{flex: 1, padding: 10}}
                onClick={()=>{
                this.setState({
                    isChecked:!this.state.isChecked
                })
                }}
                isChecked={this.state.isChecked}
                rightText={"By checking this I agree to Cannago's Terms & Conditions"}
                rightTextStyle={{color : '#9c9c9c'}}
                />                    
          </View>           
          <TouchableOpacity onPress={() => this.registerUser()}>
            <View style={styles.signinBtn}>
                <Text style={styles.signiText}>Create Account</Text>
            </View>
          </TouchableOpacity>
          {/* <Content 
            gotoProductCategoryPage={() => this.props.navigation.navigate('ProductCategoryPage')}
          /> */}
        </View>
      </ScrollView>
      </SafeAreaView>

      </KeyboardAvoidingView>
    );

  }
  
}

const styles = StyleSheet.create({
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



import React, {Component} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  Image,
  AsyncStorage,
  TextInput,
  View
} from 'react-native';

import Textarea from 'react-native-textarea';
import InputSpinner from 'react-native-input-spinner';

import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import Tabs from '../../components/dispensaries/tab/Tabs';
import {styles} from '../../styles/dispensary/addProductStyle'
import ImagePicker from 'react-native-image-picker';
import userService from '../../services/dispensary/userService.js'
import {ENDPOINT_URL} from '../../config/config'

var renderIf = function(condition, content) {
  if (condition) {
      return content;
  } 
  return (<Image style={styles.camera} source={require('../../assets/imgs/camera.png')} ></Image>);
}

export default class AddProductPage extends Component{

  loginedUserInfo = {};

  constructor(props){
    super(props);
    this.state={
      photo: {},
      productPrice : '',
      productPriceVal : 0,
      fees : '',
      feesVal : 0,
      grossPrice : '',
      grossPriceVal : 0,
      quantity : 1,
      productname : '',
      tag : '',
      description : '',
      dispensary_id : '',
      selectTab: 'none'
    }  

    userService.getStorageData().then((data) =>{
      this.setState({dispensary_id : data.dispensary_id});
    }).catch(err => console.error("error: " + err));    
  } 

  addProduct = () => {
    let param = {
      productPrice : this.state.productPriceVal,
      fees : this.state.feesVal,
      grossPrice : this.state.grossPriceVal,
      quantity : this.state.quantity,
      productname : this.state.productname,
      tag : this.state.tag,
      description : this.state.description,
      dispensary_id : this.state.dispensary_id
    }
    if(this.state.productPriceVal == ''){
      alert("Please enter product price");
      return;
    }
    if(this.state.productname == ''){
        alert("Please enter productname");
        return;
    }            
    if(this.state.photo.fileName == undefined){
      alert("Please select your photo");
      return;
    }   
    fetch(ENDPOINT_URL+'addProduct', {
      method: "POST",
      body: this.createFormData(this.state.photo, param)
    })
    .then(response => response.json())
    .then(response => {
      if(response.message == 'success')  
        this.props.navigation.navigate('ProductsDispensariesPage');
    })
    .catch(error => {
      console.log(error);
    });  
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

  priceEndEditing = () => {
    let productPrice = this.state.productPrice;
    let fees =  productPrice * 0.326;
    let grossPrice = parseFloat(productPrice)  + parseFloat(fees);

    this.setState({fees : '$ ' + fees, grossPrice : '$ ' + grossPrice, productPrice : '$ ' + productPrice})
    this.setState({feesVal : fees, grossPriceVal : grossPrice, productPriceVal : productPrice})


  }  
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

  render(){
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack('')}>
          <View style={{flexDirection : 'row'}}>
            <View style={styles.backBtnView}>
              <Icon name="arrow-left"  size={30} color="white"/>
            </View>
            <View style={styles.headerText}>
              <Text style={{fontSize:20, fontWeight : '400'}}>Add an Item to Your Store</Text>
            </View>
            
          </View>        
        </TouchableOpacity>          
        <ScrollView>
        <View style={styles.container}>
          <View style={{alignItems : 'center'}}> 
            <TouchableOpacity onPress={this.chooseFile.bind(this)}>
              <View style={styles.logopicWrap}>
              {renderIf(this.state.photo.uri,
                  <Image style={styles.logopic} source={{ uri: this.state.photo.uri }} ></Image>
                )}
              </View>
            </TouchableOpacity>
            <View style={{ width :  '100%',  alignItems : 'center', justifyContent : 'center', flexDirection : 'row'}}>
                <Text style={{fontSize : 16, }}>Quantity in Stock</Text> 
                <InputSpinner
                    max={10}
                    min={1}
                    step={1}
                    colorMax={"#f04048"}
                    colorMin={"#40c5f4"}
                    value={1}
                    height={30}
                    width={100}
                    style={{margin : 5}}
                    onChange={(quantity)=>{this.setState({quantity})}} />   
              </View>   
              <View style={{flexDirection : 'row', alignItems : 'center', justifyContent : 'center',  width : '100%'}}>
                <View style={{alignItems : 'center', justifyContent : 'center', margin : 5, width : '25%'}}> 
                  <Text style={{marginBottom : 10, color : '#8c8989'}}>Our fees</Text>
                  <View style={styles.tipitem}>
                    <Text style={{color : '#8c8989', width : '100%', textAlign : 'center'}}>{this.state.fees}</Text>
                  </View>
                </View>
                <View style={{alignItems : 'center', justifyContent : 'center', margin : 5, width : '25%'}}> 
                    <Text style={{marginBottom : 10, color : '#8c8989'}}>Product price</Text>
                    <View style={styles.tipitem}>
                      <Text style={{color : '#8c8989', width : '40%', textAlign : 'right'}}> $&nbsp;&nbsp;</Text>

                      <TextInput 
                        keyboardType='numeric'
                        onEndEditing={this.priceEndEditing.bind(this)}
                        onChangeText={ productPrice=> this.setState({productPrice})}
                        style={{color : '#8c8989', width : '60%', textAlign : 'left'}} />
                    </View>
                </View>
                <View style={{alignItems : 'center', justifyContent : 'center', margin : 5, width : '25%'}}> 
                  <Text style={{marginBottom : 10, color : '#8c8989'}}>Gross price</Text>
                  <View style={styles.tipitem}>
                      <Text style={{color : '#8c8989', width : '100%', textAlign : 'center'}}>{this.state.grossPrice}</Text>
                  </View>
                </View>                 
              </View>    
              <View style={{alignItems : 'flex-start', marginTop : 10, width : '80%'}}>
                <Text> Name of Product</Text>  
                <View style={styles.textinputview}> 
                    <TextInput style={styles.textinput} placeholder="Enter items name" onChangeText={productname=> this.setState({productname})}/>
                </View>
              </View>   
              <View style={{alignItems : 'flex-start', marginTop : 10, width : '80%'}}>
                <Text> Tags</Text>  
                <View style={styles.textinputview}> 
                    <TextInput style={styles.textinput} placeholder="Enter Relevant Search Tags item..." onChangeText={tag=> this.setState({tag})} />
                </View>
              </View>   
            

              <Textarea
                containerStyle={styles.textareaContainer}
                // style={styles.textarea}
                onChangeText={description=> this.setState({description})}
                // defaultValue={this.state.text}
                maxLength={200}
                placeholder={' Enter Item description...'}
                placeholderTextColor={'#c7c7c7'}
                underlineColorAndroid={'transparent'}
                />                  

            <TouchableOpacity onPress={() => this.addProduct()} style={{alignItems : 'center', justifyContent : 'center'}}>
              <View style={styles.addcart}>
                  <Text style={styles.addcarttext}>Add to Store</Text>
              </View>
            </TouchableOpacity>    
          </View>
        </View>  
          {/* <AddProduct gotoProductsPage={() => this.props.navigation.navigate('ProductsDispensariesPage')}/> */}
        </ScrollView>
        <Tabs 
          gotoProductsPage={() => this.props.navigation.navigate('ProductsDispensariesPage')}
          gotoOrderHistoryPage={() => this.props.navigation.navigate('OrderHistoryPage')}
          gotoProfilePage={() => this.props.navigation.navigate('ProfileDispensariesPage')}
          selectTab={this.state.selectTab}
          />       
      </SafeAreaView>

    );
  }
}
class Second {
 
  SecondClassFunction=()=>{
 
   alert("Second Class Function Without Argument Called");
 
  }
 
  SecondClassFunctionWithArgument=(Value)=>{
 
    Alert.alert(Value);
 
  }
 
}



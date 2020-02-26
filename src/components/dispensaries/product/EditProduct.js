import React, {Component} from 'react';
import {StyleSheet, View,  TouchableOpacity, Text, Image, TextInput} from 'react-native';
import Textarea from 'react-native-textarea';
import { Divider } from 'react-native-elements';
import InputSpinner from 'react-native-input-spinner';
import { ListItem} from 'react-native-elements';

export default class EditProduct extends Component{
    constructor(props){
        super(props)
        this.state={
            textValue: 'Want to drive with us?'
        }
    }

  render(){
   
    return (
        <View style={{alignItems : 'center'}}> 
            <View style={styles.logopicWrap}>
                <Image style={styles.logopic} source={require('../assets/imgs/station1.png')} ></Image>
                <Image style={styles.camera} source={require('../assets/imgs/camera.png')} ></Image>
            </View>

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
                    onChange={(num)=>{console.log(num)}} />   
             </View>   
             <View style={{flexDirection : 'row', alignItems : 'center', justifyContent : 'center', width : '100%'}}>
                <View style={{alignItems : 'center', justifyContent : 'center', margin : 5 ,width : '25%'}}> 
                    <Text style={{marginBottom : 10, color : '#8c8989'}}>Our fees</Text>
                    <TouchableOpacity style={styles.tipitem}>
                        <Text style={{color : '#8c8989'}}>$16.30</Text>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems : 'center', justifyContent : 'center', margin : 5,width : '25%'}}> 
                    <Text style={{marginBottom : 10, color : '#8c8989'}}>Product price</Text>
                    <TouchableOpacity style={styles.tipitem}>
                        <Text style={{color : '#8c8989'}}>$50</Text>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems : 'center', justifyContent : 'center', margin : 5, width : '25%'}}> 
                    <Text style={{marginBottom : 10, color : '#8c8989'}}>Gross price</Text>
                    <TouchableOpacity style={styles.tipitem}>
                        <Text style={{color : '#8c8989'}}>$33.70</Text>
                    </TouchableOpacity>
                </View>                 
             </View>    
             <View style={{alignItems : 'flex-start', marginTop : 10, width : '80%'}}>
                <Text> Name of Product</Text>  
                <View style={styles.textinputview}> 
                    <TextInput style={styles.textinput} placeholder="Enter items name"/>
                </View>
             </View>   
             <View style={{alignItems : 'flex-start', marginTop : 10, width : '80%'}}>
                <Text> Tags</Text>  
                <View style={styles.textinputview}> 
                    <TextInput style={styles.textinput} placeholder="Enter Relevant Search Tags item..."/>
                </View>
             </View>   
            

             <Textarea
                containerStyle={styles.textareaContainer}
                // style={styles.textarea}
                // onChangeText={this.onChange}
                // defaultValue={this.state.text}
                maxLength={200}
                placeholder={' Enter Item description...'}
                placeholderTextColor={'#c7c7c7'}
                underlineColorAndroid={'transparent'}
                />
   
        </View>
    );
  }
}

const styles = StyleSheet.create({
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
    },   
    textinputview : {
        alignItems : 'center',
        width : '100%',
        height: 50,
        borderRadius:20,
        borderColor : '#b3b0ad',
        borderWidth : 1,
        marginTop : 10
    },   
    textinput : {
        width : 300,
        height: 50,
    },        
    textareaContainer : {
        
        borderWidth : 1,
        borderColor : '#b3b3b3',
        width : '80%',
        height : 130,
        marginTop : 20
    },

    ratingImage: {
        height: 30,
        width: 30,
        margin : 5
    },
    logopic: {
        width : '80%',
        height : 150,
        borderRadius : 10,
        borderWidth : 2,
        borderColor : '#23b825',
  
    },
    camera : {
      width : 50,
      height : 50,
      marginTop : -30
    },
    logopicWrap : {
      alignItems : 'center',
      justifyContent : 'center',
      borderRadius: 10,
      width : '100%',
      height : 200,
      marginTop : 20
    },

});

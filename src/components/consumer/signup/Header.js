import React, {Component} from 'react';
import {Image, StyleSheet, View, TouchableOpacity, Button} from 'react-native';
import ImagePicker from 'react-native-image-picker';

var renderIf = function(condition, content) {
  if (condition) {
      return content;
  } 
  return (<Image style={styles.camera} source={require('../assets/imgs/camera.png')} ></Image>);
}

export default class Header extends Component{
  constructor(props) {
    super(props)
    this.state = {
        filePath: {},
    };
  }  

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
          filePath: source,
        });
      }
    });
  };

  render(){
    return (
      <TouchableOpacity onPress={this.chooseFile.bind(this)} >
        <View style={styles.logopicWrap} >
          {renderIf(this.state.filePath.uri,
            <Image style={styles.logopic} source={{ uri: this.state.filePath.uri }} ></Image>
          )}

        </View>
      </TouchableOpacity>

    
    );
  }
}

const styles = StyleSheet.create({

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
    }

});

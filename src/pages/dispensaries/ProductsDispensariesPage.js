
import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  Image,
  View,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Tabs from '../../components/dispensaries/tab/Tabs';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import { Divider } from 'react-native-elements';

import Products from '../../components/dispensaries/product/Products';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class ProductsDispensariesPage extends Component{
  state = {
    selectTab: 'product',
    popupVisible: false
  };
  constructor(props){
    super(props);
  }  

  updateSearch = search => {
    this.setState({ search });
  };
  render(){
    return (
      <SafeAreaView style={styles.container}>
        <View style={{alignItems : 'center', width : '100%'}}>
          <Text style={{fontSize : 22, margin : 20}}>Your Store Front</Text>
        </View>
        <View style={styles.searchview}>
          <Icon name="search"  size={20} color="#37d613" />
          <TextInput placeholder='Search' placeholder="Search my items" style={styles.searchInputText}/>
          <Icon name="plus"  size={20} color="#37d613" onPress={() => this.props.navigation.navigate('AddProductPage')}/>
        </View>

        <ScrollView>
          <View style={styles.container}>
            <Products gotoProductDetailPage={() => this.props.navigation.navigate('EditProductPage')}/>
          </View>
        </ScrollView>
        <Tabs 
          openPopup={() => {this.setState({ popupVisible: true });}}
          gotoOrderHistoryPage={() => this.props.navigation.navigate('OrderHistoryPage')}
          gotoProfilePage={() => this.props.navigation.navigate('ProfileDispensariesPage')}
          selectTab={this.state.selectTab}
          />
          <Dialog
              visible={this.state.popupVisible}
              dialogStyle={{borderTopLeftRadius : 30, borderTopRightRadius : 30}}
              containerStyle={{ justifyContent: 'flex-end'}}
              width={'100%'}
              height={400}
              dialogTitle={
                <View>
                  <View style={styles.dialogHeaderView}>
                    <Image style={{width : 50, height : 50}} source={require('../../components/dispensaries/assets/imgs/driver_avatar.png')} ></Image>
                    <Text style={{fontSize : 20, marginLeft : 20}}>Driver Name Bob D.</Text>
                    <Image style={{width : 40, height : 40 , marginLeft : 20}} source={require('../../components/dispensaries/assets/imgs/message.png')} ></Image>
                    <Image style={{width : 40, height : 40, marginLeft : 10}} source={require('../../components/dispensaries/assets/imgs/phonecall.png')} ></Image>

                  </View>

                </View>

              }
              onTouchOutside={() => {
              this.setState({ popupVisible: true });
              }}
              >
              <DialogContent>
                <View style={{flexDirection:'row', width : '100%', margin : 20}}>
                  <Image source={require('../../components/dispensaries/assets/imgs/location.png')} ></Image>
                  <Text style={{fontSize : 16, marginLeft : 20,}}>East Central Atlanta</Text>
                </View>
                <Divider style={{ backgroundColor: '#a0a3a0', width : '100%', marginLeft : 50 }} />
                <View style={{flexDirection:'row', width : '100%', margin : 20}}>
                  <Image source={require('../../components/dispensaries/assets/imgs/pinpoints.png')} ></Image>
                  <Text style={{fontSize : 16, marginLeft : 20,}}>Little Five Points</Text>
                </View>
                <Divider style={{ backgroundColor: '#a0a3a0', width : 1000}} />
                <View style={{flexDirection:'row', width : '100%', margin : 20}}>
                  <Image source={require('../../components/dispensaries/assets/imgs/car.png')} ></Image>
                  <View>
                    <Text style={{fontSize : 14, marginLeft : 20, color : '#a0a3a0', marginBottom : 5}}>Driver is</Text>
                    <Text style={{fontSize : 16, marginLeft : 20,}}>10 Mins</Text>
                  </View>
                  <View>
                    <Text style={{fontSize : 14, marginLeft : 20, color : '#a0a3a0', marginBottom : 5}}>Gross Order</Text>
                    <Text style={{fontSize : 16, marginLeft : 20,}}>$67.32</Text>
                  </View>
                </View>
                <View style={{flexDirection : 'row', alignItems : 'center', justifyContent : 'space-between'}}>
                    <TouchableOpacity style={styles.declineBtn}>
                      <Text>Decline</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.acceptBtn} onPress={() => {this.setState({ popupVisible: false });}}>
                      <Text style={{color : 'white'}}>Accept</Text>
                    </TouchableOpacity>                    
                </View>
                </DialogContent>
          </Dialog>             
      </SafeAreaView>

    );
  }
}
const styles = StyleSheet.create({
  container : {
    flex : 1, 
    justifyContent : 'flex-end',
  },
  searchview : {
    flexDirection : 'row',
    borderWidth : 1,
    width : '90%',
    height : 50,
    alignItems : 'center',
    justifyContent : 'center',
    borderColor : '#8e918e',
    borderRadius : 10,
    marginLeft : 20
  },
  searchInputText : {
    width : '80%',
    height : 50,
    marginLeft : 10

  },
  dialogHeaderView : {
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'center',
    width : '100%',
    height : 80,
    backgroundColor : '#ededed'
  },
  declineBtn : {
    width : 150,
    height : 50,
    borderWidth : 1,
    borderColor : '#a0a3a0',
    justifyContent : 'center',
    alignItems : 'center',
    borderRadius : 20
  },
  acceptBtn : {
    width : 150,
    height : 50,
    borderColor : '#a0a3a0',
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : '#23b825',
    borderRadius : 20
  }
});


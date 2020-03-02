
import { AsyncStorage} from 'react-native';

class UserService {
  
  userInfo = {};
  getStorageData= async() => {

    try{
      let parsedInfo =  JSON.parse(await AsyncStorage.getItem('loginedUser'));
      this.userInfo = parsedInfo;
    }
    catch(error){
      console.log(error);
      this.userInfo = error;
    }
    console.log("2222222", this.userInfo);

    return this.userInfo;
  }
}     

const userService = new UserService();
export default userService;  



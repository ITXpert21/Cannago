
import Firebase from '../config/firebase'

class UserService {
  registerConsumer(addParam){
    const newConsumersRef = Firebase.database().ref().child('consumers').push();
    const newConsumertKey = newConsumersRef.key;

    let consumerRef = Firebase.database().ref('consumers/' + newConsumertKey);
    return consumerRef.set(addParam).then((res)=>{
      return addParam;
    }).catch();
  }
  registerDispensary(addParam){

    const newDispensaryRef = Firebase.database().ref().child('dispensaries').push();
    const newDispensarytKey = newDispensaryRef.key;
    console.log('newDispensarytKey', newDispensarytKey);    
    console.log('addparam', addParam);    

   // addParam.dispensaryId = newDispensarytKey;
    console.log('addparam', addParam);
    let dispensaryRef = Firebase.database().ref('dispensaries/' + newDispensarytKey);
    return dispensaryRef.set(addParam).then((res)=>{
      return addParam;
    }).catch();
  }  
}
const userService = new UserService();
export default userService;  
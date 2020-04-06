
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
}
const userService = new UserService();
export default userService;  
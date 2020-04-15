
import Firebase from '../config/firebase'

class ProductService {
  registerProduct(addParam){
    const newProductsRef = Firebase.database().ref().child('products').push();
    const newProductKey = newProductsRef.key;
    addParam.productId = newProductKey;
    let productRef = Firebase.database().ref('products/' + newProductKey);
    return productRef.set(addParam).then((res)=>{
      return addParam;
    }).catch();
  }
  getProducts(uid){
    var ref = Firebase.database().ref('products');
    return ref.once("value").then((snapshot) => {
      return snapshot;
    }).catch(err=> console.log(err));
  }  
 
}
const productService = new ProductService();
export default productService;  
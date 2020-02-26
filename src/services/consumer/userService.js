class UserService {
    
    registerUserService = (formData) => {
        fetch("http://192.168.100.57:3000/addUser", {
          method: "POST",
          body: formData
        })
        .then(response => response.json())
        .then(response => {
          console.log("upload succes", response);
          return response;
          // 
        })
        .catch(error => {
          console.log(error);
          return error;
        });    
    };
   
    functionWithArg = Value => {
      //function to called from default class (with args)
      alert(Value);
    };
  }
  const userService = new UserService();
  export default userService;  
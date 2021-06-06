import Firebase from'../../config/firebase';
import firebase from'firebase';
const facebookLogin=()=>{
 
       return(dispatch)=>{
        var provider = new firebase.auth.FacebookAuthProvider();
       
          firebase.auth().signInWithPopup(provider)
  .then((result) => {
    var credential = result.credential;
    var user = result.user;    
    var accessToken = credential.accessToken;
console.log("User==>",user)
  })
  .catch((error) => {

    var errorCode = error.code;
    var errorMessage = error.message;
  
    console.log(errorMessage)

  });
       }
    
}
export {facebookLogin}
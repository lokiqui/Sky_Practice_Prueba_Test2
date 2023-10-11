import { Injectable } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

   auth = getAuth();
   userLogged:any;
   

  constructor() { }

  // createUserWithEmailAndPassword(auth:any, email:any, password:any)
  // .then((userCredential) => {
  //   // Signed in 
  //   const user = userCredential.user;
  //   // ...
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // ..
  // });
register(email:any, password:any){
  
  createUserWithEmailAndPassword(this.auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("account Creation Success")
 
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(error)
    console.log('error message is', error)
    // ..
  });
}

async login(email:any, password:any){

  let loggedIn;

  await signInWithEmailAndPassword(this.auth,email, password ) .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("User Signed In!")
    console.log("user crensentials are:", userCredential)
    console.log("user crensentials are:", typeof(userCredential))

    loggedIn = userCredential
    return userCredential
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(error)
    console.log('Failed to login', error)
  });

  console.log("user crensentials are:", loggedIn)

  return loggedIn
}
}

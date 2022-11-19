// 로그인, 로그아웃 등의 authenticate관련

import firebase from 'firebase'
import firebaseApp from './firebase'

class AuthService {
  login(providerName){
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }
  // logout(){
  //   firebase.auth().signOut();
  // }
  // onAuthChange(onUserChanged){
  //   firebase.auth().onAuthStateChanged(user=>{
  //     onUserChanged(user);
  //   });
  // }
}
export default AuthService;

import firebase from 'firebase'

// firebase 초기화

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};
console.log(process.env.REACT_APP_FIREBASE_API_KEY);

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
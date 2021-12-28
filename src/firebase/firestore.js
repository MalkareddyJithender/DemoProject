import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAgyH9lb5osSihWjRSnRXcBnNx742RIxUU",
    authDomain: "test-9baa8.firebaseapp.com",
    projectId: "test-9baa8",
    storageBucket: "test-9baa8.appspot.com",
    messagingSenderId: "731460039653",
    appId: "1:731460039653:web:73e8ca01a5e63a76c3f50c",
    measurementId: "G-79RRZNTG8T"
  };

// const firebaseConfig = {
//   apiKey: "AIzaSyBnd6AeFnH6f42itALLgZnq3uGBdCJylBg",
//   authDomain: "clone-4f49b.firebaseapp.com",
//   projectId: "clone-4f49b",
//   storageBucket: "clone-4f49b.appspot.com",
//   messagingSenderId: "849169760288",
//   appId: "1:849169760288:web:ce1e4be0dca3373a70fc45",
//   measurementId: "G-TH5PLCQR59"
// };

  const app = firebase.initializeApp(firebaseConfig);


export const db = firebase.firestore();
export const auth = firebase.auth();
// export default db;

  
  
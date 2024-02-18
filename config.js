import { initializeApp } from 'firebase/app';
import { initializeFirestore } from 'firebase/firestore';


   const firebaseConfig = {
     apiKey: "AIzaSyCv5SFyFrdR4uuMnVx8LijcySDMceRoLMs",
     authDomain: "fir-reactnative-84379.firebaseapp.com",
     projectId: "fir-reactnative-84379",
     storageBucket: "fir-reactnative-84379.appspot.com",
     messagingSenderId: "94383074946",
     appId: "1:94383074946:web:eadd59a3f1f803d606ce9b"
   };



const app = initializeApp(firebaseConfig);
const db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
});

export { db };